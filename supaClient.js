import { createClient } from '@supabase/supabase-js';
import { supabase } from './supaClient';

const supabaseUrl = 'https://dxzusoigsbcetdauouzs.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4enVzb2lnc2JjZXRkYXVvdXpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4OTczNDAsImV4cCI6MjA1NDQ3MzM0MH0.gxVrdRaMzhlXk8oI9mQfk4CDQbPWn6zP6q_SoZj44D4';
// const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const register = async (email, password) => {
  const { user, error } = await supabase.auth.signUp({ email, password });
  if (error) {
    console.error('Error registering:', error);
  } else {
    console.log('User registered:', user);
  }
};

const login = async (email, password) => {
  const { user, error } = await supabase.auth.signIn({ email, password });
  if (error) {
    console.error('Error logging in:', error);
  } else {
    console.log('User logged in:', user);
  }
};