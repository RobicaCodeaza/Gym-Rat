import { createClient } from '@supabase/supabase-js'
import { Database } from '../types/database.types'

export const supabaseUrl = 'https://qwuyntgmuewkwaxomhxo.supabase.co'
export const supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3dXludGdtdWV3a3dheG9taHhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1NzIyMDYsImV4cCI6MjA0MjE0ODIwNn0.z-MdEQGGetw77i_NRFpp1eimprVq4DplD2s_geQ77FA'

const supabase = createClient<Database>(supabaseUrl, supabaseKey)
export default supabase
