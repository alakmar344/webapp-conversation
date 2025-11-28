import 'server-only'

import { cookies, headers } from 'next/headers'
import Negotiator from 'negotiator'
import { match } from '@formatjs/intl-localematcher'
import type { Locale } from '.'
import { i18n } from '.'

// The safest fallback locale
const FALLBACK_LOCALE: Locale = i18n.defaultLocale as Locale

export const getLocaleOnServer = async (): Promise<Locale> => {
  try {
    // 1. Load available locales
    const locales: string[] = [...i18n.locales]

    // 2. Try cookie first
    let languages: string[] = []
    try {
      const localeCookie = (await cookies())?.get('locale')
      if (localeCookie?.value) {
        languages = [localeCookie.value]
      }
    } catch {}

    // 3. If no cookie, use request headers safely
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

        if (langs && Array.isArray(langs) && langs.length > 0) {
          languages = langs
        }
      } catch {}
    }

    // 4. Match locale safely
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
    // Final fail-safe: never crash SSR
    return FALLBACK_LOCALE
  }
}

  // match locale
  const matchedLocale = match(languages, locales, i18n.defaultLocale) as Locale
  return matchedLocale
}
