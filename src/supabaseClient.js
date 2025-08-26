// src/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kwssnmtjgdrqkchflhbd.supabase.co"; 
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3c3NubXRqZ2RycWtjaGZsaGJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYyMjQwMzcsImV4cCI6MjA3MTgwMDAzN30.dUbYn7kSFgq_3McO4ZDAy-eLQ94AHxZ5V9H6oGiwIa8"; // 👉 ganti pakai anon public key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
