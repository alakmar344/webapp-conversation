import type { AppInfo } from '@/types/app'

export const APP_ID = process.env.NEXT_PUBLIC_APP_ID ?? ''
export const API_KEY = process.env.NEXT_PUBLIC_APP_KEY ?? ''
export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? ''

export const APP_INFO: AppInfo = {
  title: 'esamz.ai',
  description: 'esamz.ai — Dive into the unknown, emerge with insight.',
  copyright: '',
  privacy_policy: '',
  default_language: 'en',
  disable_session_same_site: false,
}

export const isShowPrompt = false
export const promptTemplate = 'I want you to act as a javascript console.'
export const API_PREFIX = '/api'
export const LOCALE_COOKIE_NAME = 'locale'
export const DEFAULT_VALUE_MAX_LEN = 48

export const PLANS = [
  {
    name: 'Free Plan',
    price: 0,
    features: ['50 messages/day', 'Slowest speed'],
    redirect: 'https://esamz.site',
  },
  {
    name: 'Pro Plan',
    price: 99,
    features: ['1000 requests/day', 'Fast speed'],
    redirect: 'https://esamzsubscription.mojo.page/esamz-subscription',
  },
  {
    name: 'Pro+ Plan',
    price: 199,
    features: ['Unlimited requests', 'Fastest speed'],
    redirect: 'https://esamzsubscription.mojo.page/esamz-subscription',
  },
]

