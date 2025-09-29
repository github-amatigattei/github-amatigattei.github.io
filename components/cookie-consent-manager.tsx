"use client"

import { useState } from "react"
import { CookieBanner } from "@/components/cookie-banner"
import { CookiePreferencesModal } from "@/components/cookie-preferences-modal"

export function CookieConsentManager() {
  const [showPreferences, setShowPreferences] = useState(false)

  const handleOpenPreferences = () => {
    setShowPreferences(true)
  }

  const handleClosePreferences = (open: boolean) => {
    setShowPreferences(open)
  }

  return (
    <>
      <CookieBanner onOpenPreferences={handleOpenPreferences} />
      <CookiePreferencesModal open={showPreferences} onOpenChange={handleClosePreferences} />
    </>
  )
}
