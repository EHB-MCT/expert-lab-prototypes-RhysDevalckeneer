import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://menndgcfzbyqblpulfmp.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lbm5kZ2NmemJ5cWJscHVsZm1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgzNzgwODUsImV4cCI6MjAwMzk1NDA4NX0.A9Sbo7wqZ_u7Rlo9vYpg3uP29Ve7dsXJ1f6YZX28J3M')