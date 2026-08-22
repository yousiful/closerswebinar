import type { Handler, HandlerEvent } from '@netlify/functions';

/**
 * Closers landing page lead capture -> GoHighLevel.
 *
 * The page POSTs { full_name, email, phone, utm_source, utm_campaign } here and
 * this upserts the contact into the Media Traffics GHL location. The Private
 * Integration Token stays server-side and is never shipped to the browser.
 *
 * Netlify env vars: GHL_PIT (required), GHL_LOCATION_ID (optional).
 */

const GHL_BASE = 'https://services.leadconnectorhq.com';
const GHL_VERSION = '2021-07-28';
const DEFAULT_LOCATION_ID = 'q5L4ttbBMHNxieXIcTVJ';
const SOURCE = 'Closers Landing Page';
const TAGS = ['closers-landing-page', 'high-ticket-closer-lead'];

interface LeadPayload {
  full_name?: string;
  email?: string;
  phone?: string;
  utm_source?: string;
  utm_campaign?: string;
}

const json = (statusCode: number, body: unknown) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

export const handler: Handler = async (event: HandlerEvent) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let payload: LeadPayload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch {
    return json(400, { error: 'Invalid JSON' });
  }

  const fullName = (payload.full_name || '').trim();
  const email = (payload.email || '').trim();
  const phone = (payload.phone || '').trim();

  if (!email && !phone) {
    return json(400, { error: 'email or phone required' });
  }

  const token = process.env.GHL_PIT;
  if (!token) {
    console.error('GHL_PIT is not set, cannot create contact');
    return json(500, { error: 'Lead capture is not configured' });
  }

  const spaceIndex = fullName.indexOf(' ');
  const firstName = spaceIndex === -1 ? fullName : fullName.slice(0, spaceIndex);
  const lastName = spaceIndex === -1 ? '' : fullName.slice(spaceIndex + 1).trim();

  // utm_campaign is often a raw numeric Meta campaign ID, not a readable name.
  // Keep it out of tags (tags should stay human-scannable) and carry it in
  // source instead, alongside utm_source, so attribution isn't lost.
  const tags = [...TAGS];
  const sourceParts = [SOURCE];
  if (payload.utm_source) sourceParts.push(payload.utm_source);
  if (payload.utm_campaign) sourceParts.push(`campaign:${payload.utm_campaign}`);
  const source = sourceParts.length > 1
    ? `${sourceParts[0]} (${sourceParts.slice(1).join(', ')})`
    : sourceParts[0];

  try {
    const response = await fetch(`${GHL_BASE}/contacts/upsert`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Version: GHL_VERSION,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        locationId: process.env.GHL_LOCATION_ID || DEFAULT_LOCATION_ID,
        firstName,
        lastName,
        name: fullName,
        email,
        phone,
        source,
        tags,
      }),
    });

    const data = (await response.json().catch(() => ({}))) as {
      contact?: { id?: string };
      message?: string;
    };

    if (!response.ok) {
      console.error('GHL upsert failed', response.status, data.message);
      return json(502, { error: 'Could not save lead' });
    }

    return json(200, { ok: true, id: data.contact?.id || null });
  } catch (error) {
    console.error('GHL upsert threw', error);
    return json(502, { error: 'Could not save lead' });
  }
};
