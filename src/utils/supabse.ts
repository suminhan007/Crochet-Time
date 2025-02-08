import {createClient} from '@supabase/supabase-js';

const supabaseUrl = 'https://dxzusoigsbcetdauouzs.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4enVzb2lnc2JjZXRkYXVvdXpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4OTczNDAsImV4cCI6MjA1NDQ3MzM0MH0.gxVrdRaMzhlXk8oI9mQfk4CDQbPWn6zP6q_SoZj44D4';
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;