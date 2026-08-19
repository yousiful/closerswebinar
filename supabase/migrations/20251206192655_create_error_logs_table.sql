/*
  # Create error_logs table for error tracking

  1. New Tables
    - `error_logs`
      - `id` (uuid, primary key) - Unique identifier for each error log
      - `message` (text) - Error message
      - `stack` (text, optional) - Error stack trace
      - `component` (text, optional) - Component where error occurred
      - `user_agent` (text) - Browser user agent
      - `url` (text) - URL where error occurred
      - `timestamp` (timestamptz) - When the error occurred
      - `severity` (text) - Error severity level (low, medium, high, critical)
      - `context` (jsonb, optional) - Additional error context
      - `created_at` (timestamptz) - When the log was created

  2. Security
    - Enable RLS on `error_logs` table
    - Add policy for anonymous users to insert error logs
    - Add policy for authenticated admins to view error logs

  3. Indexes
    - Create index on timestamp for efficient querying
    - Create index on severity for filtering
*/

CREATE TABLE IF NOT EXISTS error_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  message text NOT NULL,
  stack text,
  component text,
  user_agent text NOT NULL,
  url text NOT NULL,
  timestamp timestamptz NOT NULL,
  severity text NOT NULL CHECK (severity IN ('low', 'medium', 'high', 'critical')),
  context jsonb,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE error_logs ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert error logs
CREATE POLICY "Anyone can log errors"
  ON error_logs
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated admins can view error logs
CREATE POLICY "Only authenticated users can view error logs"
  ON error_logs
  FOR SELECT
  TO authenticated
  USING (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_error_logs_timestamp ON error_logs(timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_error_logs_severity ON error_logs(severity);
CREATE INDEX IF NOT EXISTS idx_error_logs_component ON error_logs(component);
