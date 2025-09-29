"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X, Settings, Shield, BarChart3, Target } from "lucide-react"
import { useCookieConsent } from "@/hooks/use-cookie-consent"

interface CookieBannerProps {
  onOpenPreferences: () => void
}

export function CookieBanner({ onOpenPreferences }: CookieBannerProps) {
  const { showBanner, acceptAll, acceptEssential, isLoading } = useCookieConsent()
  const [isVisible, setIsVisible] = useState(true)

  if (isLoading || !showBanner || !isVisible) {
    return null
  }

  const handleAcceptAll = () => {
    acceptAll()
    setIsVisible(false)
  }

  const handleAcceptEssential = () => {
    acceptEssential()
    setIsVisible(false)
  }

  const handleOpenPreferences = () => {
    onOpenPreferences()
  }

  const handleClose = () => {
    // Close banner but don't save preferences - user must make a choice
    setIsVisible(false)
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t">
      <Card className="max-w-6xl mx-auto p-6 shadow-lg">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-lg">Rispettiamo la Tua Privacy</h3>
            </div>

            <div className="text-sm text-muted-foreground space-y-2">
              <p>
                Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito web, analizzare il traffico e
                personalizzare i contenuti. Puoi scegliere quali categorie di cookie accettare.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-4">
                <div className="flex items-center gap-2 text-xs">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span>Essenziali (Richiesti)</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Settings className="h-4 w-4 text-blue-600" />
                  <span>Funzionali</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <BarChart3 className="h-4 w-4 text-purple-600" />
                  <span>Analitici</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Target className="h-4 w-4 text-orange-600" />
                  <span>Marketing</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button onClick={handleAcceptAll} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Accetta Tutti i Cookie
              </Button>

              <Button
                onClick={handleAcceptEssential}
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 bg-transparent"
              >
                Solo Cookie Essenziali
              </Button>

              <Button onClick={handleOpenPreferences} variant="ghost" className="text-primary hover:bg-primary/10">
                <Settings className="h-4 w-4 mr-2" />
                Personalizza Preferenze
              </Button>
            </div>

            <p className="text-xs text-muted-foreground">
              Continuando a navigare sul sito, accetti l'uso dei cookie essenziali. Per maggiori informazioni, consulta
              la nostra{" "}
              <a href="/privacy-policy" className="text-primary hover:underline">
                Informativa sulla Privacy
              </a>{" "}
              e la{" "}
              <a href="/cookie-policy" className="text-primary hover:underline">
                Cookie Policy
              </a>
              .
            </p>
          </div>

          <Button
            onClick={handleClose}
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground shrink-0"
            aria-label="Chiudi banner cookie"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  )
}
