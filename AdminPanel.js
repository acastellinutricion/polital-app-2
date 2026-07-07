import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://vszcakubssswvofnuhze.supabase.co'
const SUPABASE_KEY = 'sb_publishable_86JNyOKyNltgsee-SCSVmg_kWb4yBHr'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
