"use client"

import { useState, useEffect } from "react"
import {
  type CookieConsent,
  getConsent,
  saveConsent,
  hasConsent,
  acceptAllCookies,
  acceptEssentialOnly,
  getDefaultConsent,
} from "@/lib/cookie-consent"

export function useCookieConsent() {
  const [consent, setConsent] = useState<CookieConsent | null>(null)
  const [showBanner, setShowBanner] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const currentConsent = getConsent()
    const shouldShowBanner = !hasConsent()

    setConsent(currentConsent || getDefaultConsent())
    setShowBanner(shouldShowBanner)
    setIsLoading(false)
  }, [])

  const updateConsent = (newConsent: Partial<CookieConsent>) => {
    const updatedConsent: CookieConsent = {
      ...consent!,
      ...newConsent,
      timestamp: Date.now(),
    }

    saveConsent(updatedConsent)
    setConsent(updatedConsent)
    setShowBanner(false)
  }

  const acceptAll = () => {
    const allAccepted = acceptAllCookies()
    setConsent(allAccepted)
    setShowBanner(false)
  }

  const acceptEssential = () => {
    const essentialOnly = acceptEssentialOnly()
    setConsent(essentialOnly)
    setShowBanner(false)
  }

  const openPreferences = () => {
    // This will be handled by the preferences modal
    return true
  }

  return {
    consent,
    showBanner,
    isLoading,
    updateConsent,
    acceptAll,
    acceptEssential,
    openPreferences,
  }
}
