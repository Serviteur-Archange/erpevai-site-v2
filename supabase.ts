import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pokeztntfawnawdydjhu.supabase.co'
const supabaseAnonKey = 'sb_publishable_4Mf6ONZXF-JnisLMatSATQ_7JAMJn4f'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)