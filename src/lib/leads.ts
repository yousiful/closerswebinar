const ENDPOINT = '/.netlify/functions/ghl-lead';

export interface Lead {
  full_name: string;
  email: string;
  phone?: string;
  utm_source?: string;
  utm_campaign?: string;
}

export async function submitLead(lead: Lead): Promise<string | null> {
  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(lead),
  });

  if (!response.ok) {
    throw new Error(`Lead submission failed with status ${response.status}`);
  }

  const data = (await response.json()) as { id?: string | null };
  return data.id ?? null;
}
