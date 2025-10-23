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
  disable_session_same_site: false, // set to true if embedding chatbot in iframe
}

export const isShowPrompt = false
export const promptTemplate = 'I want you to act as a javascript console.'
export const API_PREFIX = '/api'
export const LOCALE_COOKIE_NAME = 'locale'
export const DEFAULT_VALUE_MAX_LEN = 48

// ----------------------------------
// 💎 PLAN SYSTEM (FREE / PRO / PRO+)
// ----------------------------------

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
    description: '1000 daily requests + fast performance.',
    redirectUrl: 'https://esamzsubscription.mojo.page/esamz-subscription',
  },
  pro_plus: {
    name: 'Pro+',
    price: '₹199/month',
    description: 'Unlimited requests + fastest speed.',
    redirectUrl: 'https://esamzsubscription.mojo.page/esamz-subscription',
  },
}

/**
 * Safe redirect only when in browser.
 */
export const redirectToPlan = (plan: Plan) => {
  if (typeof window !== 'undefined') {
    const selected = PLANS[plan]
    if (selected) {
      window.location.assign(selected.redirectUrl)
    } else {
      console.error('Invalid plan selected:', plan)
    }
  } else {
    console.warn('redirectToPlan() called outside browser context.')
    
