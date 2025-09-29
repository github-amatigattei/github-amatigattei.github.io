// GDPR Cookie Consent Management System
export interface CookieConsent {
  essential: boolean
  functional: boolean
  analytics: boolean
  marketing: boolean
  timestamp: number
}

export interface CookieCategory {
  id: keyof Omit<CookieConsent, "timestamp">
  name: string
  description: string
  required: boolean
  cookies: string[]
}

export const COOKIE_CATEGORIES: CookieCategory[] = [
  {
    id: "essential",
    name: "Cookie Essenziali",
    description: "Questi cookie sono necessari per il funzionamento del sito web e non possono essere disabilitati.",
    required: true,
    cookies: ["consent-preferences", "session-id"],
  },
  {
    id: "functional",
    name: "Cookie Funzionali",
    description: "Questi cookie migliorano la funzionalità del sito web, come la memorizzazione delle preferenze.",
    required: false,
    cookies: ["language-preference", "theme-preference"],
  },
  {
    id: "analytics",
    name: "Cookie Analitici",
    description: "Questi cookie ci aiutano a capire come i visitatori interagiscono con il sito web.",
    required: false,
    cookies: ["_ga", "_ga_*", "_gid", "_gat"],
  },
  {
    id: "marketing",
    name: "Cookie di Marketing",
    description: "Questi cookie vengono utilizzati per fornire annunci pubblicitari più pertinenti.",
    required: false,
    cookies: ["_fbp", "_fbc", "ads-preferences"],
  },
]

const CONSENT_COOKIE_NAME = "cookie-consent"
const CONSENT_EXPIRY_DAYS = 365

export function getDefaultConsent(): CookieConsent {
  return {
    essential: true,
    functional: false,
    analytics: false,
    marketing: false,
    timestamp: Date.now(),
  }
}

export function saveConsent(consent: CookieConsent): void {
  const consentWithTimestamp = {
    ...consent,
    timestamp: Date.now(),
  }

  const expiryDate = new Date()
  expiryDate.setDate(expiryDate.getDate() + CONSENT_EXPIRY_DAYS)

  document.cookie = `${CONSENT_COOKIE_NAME}=${JSON.stringify(consentWithTimestamp)}; expires=${expiryDate.toUTCString()}; path=/; SameSite=Strict`
}

export function getConsent(): CookieConsent | null {
  if (typeof document === "undefined") return null

  const cookies = document.cookie.split(";")
  const consentCookie = cookies.find((cookie) => cookie.trim().startsWith(`${CONSENT_COOKIE_NAME}=`))

  if (!consentCookie) return null

  try {
    const consentValue = consentCookie.split("=")[1]
    return JSON.parse(decodeURIComponent(consentValue))
  } catch {
    return null
  }
}

export function hasConsent(): boolean {
  return getConsent() !== null
}

export function acceptAllCookies(): CookieConsent {
  const consent: CookieConsent = {
    essential: true,
    functional: true,
    analytics: true,
    marketing: true,
    timestamp: Date.now(),
  }
  saveConsent(consent)
  return consent
}

export function acceptEssentialOnly(): CookieConsent {
  const consent = getDefaultConsent()
  saveConsent(consent)
  return consent
}

export function clearConsent(): void {
  document.cookie = `${CONSENT_COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
}

// Utility to check if a specific category is consented
export function isCategoryConsented(category: keyof Omit<CookieConsent, "timestamp">): boolean {
  const consent = getConsent()
  return consent ? consent[category] : false
}
