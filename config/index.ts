import type { AppInfo } from '@/types/app'

export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`

export const APP_INFO: AppInfo = {
  title: 'esamz.ai',
  description: '',
  copyright: '',
  privacy_policy: '',
  default_language: 'en',
  disable_session_same_site: false, // set it to true if you want to embed the chatbot in an iframe
}

export const isShowPrompt = false
export const promptTemplate = 'I want you to act as a javascript console.'
export const API_PREFIX = '/api'
export const LOCALE_COOKIE_NAME = 'locale'
export const DEFAULT_VALUE_MAX_LEN = 48

// ---------------------------
// 💎 Plan Selection Section
// ---------------------------

export type Plan = 'free' | 'pro' | 'pro_plus'

export interface PlanInfo {
  name: string
  price: string
  description: string
  redirectUrl: string
}

export const PLANS: Record<Plan, PlanInfo> = {
  free: {
    name: 'Free',
    price: '₹0',
    description: 'Basic plan with limited access.',
    redirectUrl: 'https://esamz.site',
  },
  pro: {
    name: 'Pro',
    price: '₹99/month',
    description: '1000 daily requests + fast speed.',
    redirectUrl: 'https://esamzsubscription.mojo.page/esamz-subscription',
  },
  pro_plus: {
    name: 'Pro+',
    price: '₹199/month',
    description: 'Unlimited requests + fastest performance.',
    redirectUrl: 'https://esamzsubscription.mojo.page/esamz-subscription',
  },
}

/**
 * Redirects user based on selected plan.
 * @param plan - The selected plan ('free', 'pro', or 'pro_plus')
 */
export const redirectToPlan = (plan: Plan) => {
  const selected = PLANS[plan]
  if (selected) {
    window.location.href = selected.redirectUrl
  } else {
    console.error('Invalid plan selected')
  }
}



