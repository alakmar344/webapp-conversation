import 'server-only'

import { cookies, headers } from 'next/headers'
import Negotiator from 'negotiator'
import { match } from '@formatjs/intl-localematcher'
import type { Locale } from '.'
import { i18n } from '.'

const FALLBACK_LOCALE: Locale = i18n.defaultLocale as Locale

export const getLocaleOnServer = async (): Promise<Locale> => {
  try {
    const locales: string[] = [...i18n.locales]

    let languages: string[] = []

    // 1. Try cookie safely
    try {
      const cookieStore = await cookies()
      const localeCookie = cookieStore?.get('locale')
      if (localeCookie?.value) {
        languages = [localeCookie.value]
      }
    } catch {
      // ignore cookie errors (safe)
    }

    // 2. Try headers safely if no cookie
    if (languages.length === 0) {
      try {
        const rawHeaders = await headers()
        const negotiatorHeaders: Record<string, string> = {}

        rawHeaders.forEach((value, key) => {
          if (typeof value === 'string') {
            negotiatorHeaders[key] = value
          }
        })

        const negotiator = new Negotiator({ headers: negotiatorHeaders })
        const langs = negotiator.languages()

        if (Array.isArray(langs) && langs.length > 0) {
          languages = langs
        }
      } catch {
        // ignore header parsing errors
      }
    }

    // 3. Match the locale safely
    try {
      return match(
        languages.length > 0 ? languages : [FALLBACK_LOCALE],
        locales,
        FALLBACK_LOCALE
      ) as Locale
    } catch {
      return FALLBACK_LOCALE
    }
  } catch {
    return FALLBACK_LOCALE
  }
}
