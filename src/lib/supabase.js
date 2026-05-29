import { createClient } from '@supabase/supabase-js';

// TODO: Replace these with your actual Supabase project URL and anon public key
// You can find these in your Supabase Dashboard -> Settings -> API
const supabaseUrl = 'https://lityzhdoaztveqcxgsxr.supabase.co';
const supabaseAnonKey = 'sb_publishable_AwqODZbyeyjxE3f6DOpPCw_RlTnt37x';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
