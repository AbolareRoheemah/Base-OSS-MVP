import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export type Profile = {
  wallet_address: string
  github_username: string | null
  role: 'contributor' | 'maintainer' | 'both'
  tech_stack: string[] | null
  topics: string[] | null
  total_xp: number
  level: number
  contributions_count: number
  total_earned_usdc: number
  created_at: string
  updated_at: string
}

export type Issue = {
  id: string
  repo_id: string
  title: string
  description: string
  difficulty: 'easy' | 'medium' | 'hard'
  status: 'open' | 'assigned' | 'in_progress' | 'completed' | 'closed'
  tech_stack_required: string[] | null
  topics: string[] | null
  suggested_tip_usdc: number | null
  actual_tip_usdc: number | null
  xp_reward: number | null
  assigned_to_wallet: string | null
  github_issue_url: string | null
  created_at: string
  updated_at: string
}

export type Repository = {
  id: string
  project_id: string
  name: string
  github_url: string
  description: string | null
  tech_stack: string[] | null
  topics: string[] | null
  stars_count: number
  created_at: string
}

export type Project = {
  id: string
  name: string
  category: string
  description: string | null
  website_url: string | null
  created_at: string
}