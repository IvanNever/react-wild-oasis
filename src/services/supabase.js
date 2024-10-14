import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://xbrxzggohzbmkrrjhbfb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhicnh6Z2dvaHpibWtycmpoYmZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg2NTQzNTQsImV4cCI6MjA0NDIzMDM1NH0.zZJ1NBkbAjknOS2UE4YuEoOaZBRLew6Dmhtp9vC-Ed4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
