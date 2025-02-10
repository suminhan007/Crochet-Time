import {createClient} from '@supabase/supabase-js';

const supabaseUrl = 'https://hjlispmloverkigqdirr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqbGlzcG1sb3ZlcmtpZ3FkaXJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxNjI4NzgsImV4cCI6MjA1NDczODg3OH0.OVWZZE3ihPJHB8Reg0ltprkEkqd_Wg-E47QH_HE_umY';
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;