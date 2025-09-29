"use client"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-sm" style={{ background: "rgba(6, 44, 77, 1)", color: "white" }}>
            Contattaci
          </Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-balance mb-4 text-shadow-sm" style={{ color: "rgba(5, 49, 88, 1)" }}>
            Prenota la tua consulenza
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Se non hai mai lavorato con noi, contattaci oggi per una prima consulenza gratuita per
            discutere le tue esigenze specifiche e come possiamo aiutarti.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mx-auto">
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-6">Mettiti in Contatto</h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4" >
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center" style={{ background: "rgba(6, 44, 77, 1)"}}>
                  <Mail className="h-5 w-5" color="white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">amatigattei@riminiservizi.com</p>
                  <p className="text-sm text-muted-foreground">Rispondiamo tipicamente entro 24 ore</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 mx-auto">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center" style={{ background: "rgba(6, 44, 77, 1)"}}>
                  <Phone className="h-5 w-5 text-primary" color="white"/>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Telefono</h4>
                  <p className="text-muted-foreground">0541 793072</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 mx-auto">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center" style={{ background: "rgba(6, 44, 77, 1)"}}>
                  <MapPin className="h-5 w-5 text-primary" color="white"/>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Ufficio</h4>
                  <p className="text-muted-foreground">
                    Via Ariete 18, Rimini 47923 Italia
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center" style={{ background: "rgba(6, 44, 77, 1)"}}>
                  <Clock className="h-5 w-5 text-primary" color="white"/>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Orari di Apertura</h4>
                  <p className="text-muted-foreground">
                    Lunedì - Venerdì: 9:00 - 12:30
                  </p>
                </div>
              </div>
            </div>

            <Card className="bg-primary/5 border-primary/20 mx-auto" style={{ background: "rgba(5, 49, 88, 1)" }}>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2" style={{ color: "rgba(246, 130, 31, 1)" }}>Consulenza Iniziale Gratuita</h4>
                <p className="text-sm text-muted-foreground" style={{ color: "rgba(243, 246, 248, 1)" }}>
                  Offriamo una prima consulenza gratuita di 30 minuti per discutere le tue esigenze e come possiamo aiutarti.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Inviaci un Messaggio</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                className="space-y-6"
                onSubmit={e => {
                  e.preventDefault()
                  const form = e.currentTarget
                  const firstName = (form.elements.namedItem("firstName") as HTMLInputElement)?.value || ""
                  const lastName = (form.elements.namedItem("lastName") as HTMLInputElement)?.value || ""
                  const email = (form.elements.namedItem("email") as HTMLInputElement)?.value || ""
                  const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value || ""
                  const service = (form.elements.namedItem("service") as HTMLSelectElement)?.value || ""
                  const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || ""

                  const subject = "Richiesta Consulenza: " + (service ? service : "")
                  const body =
                    `Nome: ${firstName}\n` +
                    `Cognome: ${lastName}\n` +
                    `Email: ${email}\n` +
                    (phone ? `Telefono: ${phone}\n` : "") +
                    (service ? `Servizio di interesse: ${service}\n` : "") +
                    `Messaggio:\n${message}`

                  const mailtoLink = `mailto:amatigattei@riminiservizi.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
                  window.open(mailtoLink, "_blank")
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nome</Label>
                    <Input id="firstName" name="firstName" placeholder="Mario" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Cognome</Label>
                    <Input id="lastName" name="lastName" placeholder="Rossi" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="mariorossi@libero.it" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefono (Opzionale)</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Interesse per il Servizio</Label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Seleziona un servizio</option>
                    <option value="Preparazione e Pianificazione Fiscale">Preparazione e Pianificazione Fiscale</option>
                    <option value="Servizi Finanziari per l'Avvio e la Gestione dell'Impresa">Servizi Finanziari per l'Avvio e la Gestione dell'Impresa</option>
                    <option value="Consulenza per la Crescita dell'Impresa">Consulenza per la Crescita dell'Impresa</option>
                    <option value="Assistenza alla Crisi di Impresa">Assistenza alla Crisi di Impresa</option>
                    <option value="Assistenza alla Ristrutturazione del Debito e alle Procedure di Sovraindebitamento">Assistenza alla Ristrutturazione del Debito e alle Procedure di Sovraindebitamento</option>
                    <option value="Pianificazione Patrimoniale e Finanziaria">Pianificazione Patrimoniale e Finanziaria</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Messaggio</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Specifica quale tra i servizi ti interessa e fornisci qualche dettaglio in più sulla tua richiesta..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg" style={{ background: "rgba(5, 49, 88, 1)" }}>
                  <Send className="mr-2 h-4 w-4" />
                  Invia Messaggio
                </Button>

                {/* <p className="text-xs text-muted-foreground text-center">
                  Inviando questo modulo, non verranno salvate le tue
                  informazioni con terze parti.
                </p> */}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
