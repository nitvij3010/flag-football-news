import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ifzkckewwjbiwzymbutw.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlmemtja2V3d2piaXd6eW1idXR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyMTg3NzcsImV4cCI6MjA5MTc5NDc3N30.Yza4ZoV7bvjGicsOjh59bnOrQDZ9VjZGehF8NSGLutk'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
