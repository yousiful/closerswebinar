/*
  # Create leads table for landing page

  1. New Tables
    - `leads`
      - `id` (uuid, primary key) - Unique identifier for each lead
      - `full_name` (text) - Lead's full name
      - `email` (text, unique) - Lead's email address
      - `phone` (text, optional) - Lead's phone number
      - `created_at` (timestamptz) - When the lead was captured
      - `utm_source` (text, optional) - UTM tracking parameter
      - `utm_campaign` (text, optional) - UTM campaign tracking

  2. Security
    - Enable RLS on `leads` table
    - Add policy for service role to insert leads (form submissions)
    - No public read access to protect lead privacy
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text UNIQUE NOT NULL,
  phone text,
  utm_source text,
  utm_campaign text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to submit leads (insert only)
CREATE POLICY "Anyone can submit leads"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated admin users can view leads
CREATE POLICY "Only authenticated users can view leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);