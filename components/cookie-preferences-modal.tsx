"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Shield, Settings, BarChart3, Target, Info, Save, X } from "lucide-react"
import { type CookieConsent, COOKIE_CATEGORIES, getConsent, getDefaultConsent } from "@/lib/cookie-consent"
import { useCookieConsent } from "@/hooks/use-cookie-consent"

interface CookiePreferencesModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const categoryIcons = {
  essential: Shield,
  functional: Settings,
  analytics: BarChart3,
  marketing: Target,
}

const categoryColors = {
  essential: "text-green-600",
  functional: "text-blue-600",
  analytics: "text-purple-600",
  marketing: "text-orange-600",
}

export function CookiePreferencesModal({ open, onOpenChange }: CookiePreferencesModalProps) {
  const { updateConsent } = useCookieConsent()
  const [preferences, setPreferences] = useState<CookieConsent>(getDefaultConsent())
  const [hasChanges, setHasChanges] = useState(false)

  useEffect(() => {
    if (open) {
      const currentConsent = getConsent() || getDefaultConsent()
      setPreferences(currentConsent)
      setHasChanges(false)
    }
  }, [open])

  const handleToggle = (category: keyof Omit<CookieConsent, "timestamp">, value: boolean) => {
    if (category === "essential") return // Essential cookies cannot be disabled

    const newPreferences = {
      ...preferences,
      [category]: value,
    }
    setPreferences(newPreferences)
    setHasChanges(true)
  }

  const handleSave = () => {
    updateConsent(preferences)
    setHasChanges(false)
    onOpenChange(false)
  }

  const handleAcceptAll = () => {
    const allAccepted: CookieConsent = {
      essential: true,
      functional: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now(),
    }
    setPreferences(allAccepted)
    updateConsent(allAccepted)
    onOpenChange(false)
  }

  const handleRejectAll = () => {
    const essentialOnly = getDefaultConsent()
    setPreferences(essentialOnly)
    updateConsent(essentialOnly)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Shield className="h-5 w-5 text-primary" />
            Preferenze Cookie
          </DialogTitle>
          <DialogDescription>
            Gestisci le tue preferenze sui cookie. Puoi abilitare o disabilitare diverse categorie di cookie in base
            alle tue preferenze sulla privacy.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Overview */}
          <Card className="p-4 bg-muted/50">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-primary mt-0.5" />
              <div className="space-y-2">
                <h4 className="font-medium">Informazioni sui Cookie</h4>
                <p className="text-sm text-muted-foreground">
                  I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito
                  web. Ci aiutano a fornire una migliore esperienza utente e a capire come viene utilizzato il nostro
                  sito.
                </p>
              </div>
            </div>
          </Card>

          {/* Cookie Categories */}
          <div className="space-y-4">
            {COOKIE_CATEGORIES.map((category) => {
              const Icon = categoryIcons[category.id]
              const isEnabled = preferences[category.id]
              const isRequired = category.required

              return (
                <Card key={category.id} className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-3">
                        <Icon className={`h-5 w-5 ${categoryColors[category.id]}`} />
                        <h3 className="font-semibold">{category.name}</h3>
                        {isRequired && (
                          <Badge variant="secondary" className="text-xs">
                            Richiesto
                          </Badge>
                        )}
                      </div>

                      <p className="text-sm text-muted-foreground">{category.description}</p>

                      {category.cookies.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium">Cookie utilizzati:</h4>
                          <div className="flex flex-wrap gap-1">
                            {category.cookies.map((cookie) => (
                              <Badge key={cookie} variant="outline" className="text-xs">
                                {cookie}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={isEnabled}
                        onCheckedChange={(checked) => handleToggle(category.id, checked)}
                        disabled={isRequired}
                        aria-label={`${isRequired ? "Richiesto" : "Attiva/Disattiva"} ${category.name}`}
                      />
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          <Separator />

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-between">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button onClick={handleAcceptAll} className="bg-primary hover:bg-primary/90">
                Accetta Tutti
              </Button>
              <Button onClick={handleRejectAll} variant="outline">
                Solo Essenziali
              </Button>
            </div>

            <div className="flex gap-3">
              <Button onClick={() => onOpenChange(false)} variant="ghost">
                <X className="h-4 w-4 mr-2" />
                Annulla
              </Button>
              <Button onClick={handleSave} disabled={!hasChanges} variant="default">
                <Save className="h-4 w-4 mr-2" />
                Salva Preferenze
              </Button>
            </div>
          </div>

          {/* Legal Notice */}
          <Card className="p-4 bg-muted/30">
            <p className="text-xs text-muted-foreground">
              Le tue preferenze sui cookie verranno salvate per 12 mesi. Puoi modificare queste impostazioni in
              qualsiasi momento visitando questa pagina. Per maggiori informazioni, consulta la nostra{" "}
              <a href="/privacy-policy" className="text-primary hover:underline">
                Informativa sulla Privacy
              </a>{" "}
              e la{" "}
              <a href="/cookie-policy" className="text-primary hover:underline">
                Cookie Policy
              </a>
              .
            </p>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  )
}
