# closerswebinar

Landing page for the Media Traffics high-ticket closer training program, live at
[closers.kenjiai.com](https://closers.kenjiai.com).

## Stack

Vite + React + TypeScript + Tailwind, deployed on Netlify (site `glittering-cendol-f513f4`),
auto-building from the `main` branch of this repo.

## Lead capture

The form posts to `/.netlify/functions/ghl-lead`, which upserts the contact into
GoHighLevel. The Private Integration Token stays server-side.

Required Netlify environment variable:

| Variable | Purpose |
| --- | --- |
| `GHL_PIT` | GoHighLevel Private Integration Token |
| `GHL_LOCATION_ID` | Optional. Defaults to the Media Traffics location. |

## Local development

```
npm install
npm run dev          # front end only, the function is not available
netlify dev          # front end plus the lead capture function
npm run build
npm run typecheck
```
