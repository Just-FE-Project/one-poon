import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://edcwtpoqkmfdpcfucvuu.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkY3d0cG9xa21mZHBjZnVjdnV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg3NTk4MjYsImV4cCI6MjAyNDMzNTgyNn0.f1ukiBdupAC-DVvL2-fivUCCsgyIFg9MPFDP9e2N3mo';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
