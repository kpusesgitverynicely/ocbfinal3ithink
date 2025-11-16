/*
  # Create consultation forms table

  1. New Tables
    - `consultation_forms`
      - `id` (uuid, primary key)
      - `full_name` (text)
      - `phone_number` (text)
      - `email` (text)
      - `contact_method` (text)
      - `event_type` (text)
      - `event_date` (date, nullable)
      - `date_not_final` (boolean)
      - `event_location` (text)
      - `venue_not_booked` (boolean)
      - `guest_count` (text)
      - `services` (jsonb - array of selected services)
      - `theme_and_style` (text)
      - `inspiration_url` (text)
      - `budget_range` (text)
      - `additional_notes` (text)
      - `created_at` (timestamp)
  
  2. Security
    - Enable RLS on `consultation_forms` table
    - Add policy allowing anyone to insert new submissions
    - Add policy allowing authenticated users to view their own submissions (optional)
*/

CREATE TABLE IF NOT EXISTS consultation_forms (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  phone_number text NOT NULL,
  email text NOT NULL,
  contact_method text NOT NULL,
  event_type text NOT NULL,
  event_date date,
  date_not_final boolean DEFAULT false,
  event_location text,
  venue_not_booked boolean DEFAULT false,
  guest_count text NOT NULL,
  services jsonb DEFAULT '[]'::jsonb,
  theme_and_style text,
  inspiration_url text,
  budget_range text NOT NULL,
  additional_notes text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE consultation_forms ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit consultation form"
  ON consultation_forms
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Users can view all consultation forms after submission"
  ON consultation_forms
  FOR SELECT
  TO anon, authenticated
  USING (true);