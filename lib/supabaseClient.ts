import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database tables
export type Lead = {
  id?: string;
  name: string;
  email: string;
  phone: string;
  gym_name: string;
  message: string;
  created_at?: string;
};

export type ContactMessage = {
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at?: string;
};

// Function to save a new lead
// Function to save a new lead
export async function saveLead(leadData: Omit<Lead, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('leads')
    .insert([leadData])
    .select();

  if (error) {
    console.error('Error saving lead:', error);
    throw error;
  }

  return data?.[0];
}

// Function to save a contact message
export async function saveContactMessage(messageData: Omit<ContactMessage, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('contact_messages')
    .insert([messageData])
    .select();

  if (error) {
    console.error('Error saving contact message:', error);
    throw error;
  }

  return data?.[0];
}
