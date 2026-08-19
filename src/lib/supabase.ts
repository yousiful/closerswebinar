import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Lead {
  id?: string;
  full_name: string;
  email: string;
  phone?: string;
  utm_source?: string;
  utm_campaign?: string;
  created_at?: string;
}

export async function submitLead(lead: Lead) {
  const { data, error } = await supabase
    .from('leads')
    .insert([lead])
    .select()
    .maybeSingle();

  if (error) throw error;
  return data;
}
