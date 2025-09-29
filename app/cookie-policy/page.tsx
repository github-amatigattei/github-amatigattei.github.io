import { Header } from "@/app/cookie-policy/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Settings, BarChart3, Target, Calendar, Clock } from "lucide-react"
import { COOKIE_CATEGORIES } from "@/lib/cookie-consent"

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

export const metadata = {
  title: "Cookie Policy",
  description:
    "Informazioni dettagliate sui cookie utilizzati dal sito web e come gestire le tue preferenze.",
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-8 py-16 max-w-4xl">
        <div className="space-y-2">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">Cookie Policy</h1>
            <p className="text-lg text-muted-foreground">Informazioni sui cookie utilizzati su questo sito web</p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Ultimo aggiornamento: Ottobre 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>Tempo di lettura: 5 minuti</span>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Cosa sono i Cookie?</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo (computer, tablet,
                smartphone) quando visiti un sito web. Questi file contengono informazioni che vengono utilizzate per
                migliorare la tua esperienza di navigazione.
              </p>
              <p>
                AG.CED srl utilizza i cookie per fornire i nostri servizi, personalizzare i contenuti,
                analizzare il traffico del sito e comprendere come i visitatori interagiscono con il nostro sito web.
              </p>
            </div>
          </Card>

          {/* Cookie Categories */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Categorie di Cookie Utilizzati</h2>

            {COOKIE_CATEGORIES.map((category) => {
              const Icon = categoryIcons[category.id]

              return (
                <Card key={category.id} className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Icon className={`h-6 w-6 ${categoryColors[category.id]}`} />
                      <h3 className="text-xl font-semibold">{category.name}</h3>
                      {category.required && <Badge variant="secondary">Richiesto</Badge>}
                    </div>

                    <p className="text-muted-foreground">{category.description}</p>

                    {category.cookies.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="font-medium">Cookie specifici:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {category.cookies.map((cookie) => (
                            <div key={cookie} className="flex items-center gap-2">
                              <Badge variant="outline" className="text-xs">
                                {cookie}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Additional details for each category */}
                    {category.id === "essential" && (
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          <strong>Finalità:</strong> Questi cookie sono strettamente necessari per il funzionamento del
                          sito web e non possono essere disabilitati. Includono cookie per la gestione delle sessioni,
                          la sicurezza e le preferenze sui cookie.
                        </p>
                      </div>
                    )}

                    {category.id === "functional" && (
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          <strong>Finalità:</strong> Questi cookie migliorano la funzionalità del sito web memorizzando
                          le tue preferenze, come la lingua selezionata o le impostazioni del tema.
                        </p>
                      </div>
                    )}

                    {category.id === "analytics" && (
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          <strong>Finalità:</strong> Questi cookie ci aiutano a capire come i visitatori utilizzano il
                          nostro sito web, quali pagine sono più popolari e come migliorare l'esperienza utente.
                        </p>
                      </div>
                    )}

                    {category.id === "marketing" && (
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          <strong>Finalità:</strong> Questi cookie vengono utilizzati per fornire annunci pubblicitari
                          più pertinenti e per misurare l'efficacia delle campagne pubblicitarie.
                        </p>
                      </div>
                    )}
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Cookie Management */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Gestione dei Cookie</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">Puoi gestire le tue preferenze sui cookie in diversi modi:</p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    <strong>Banner Cookie:</strong> Quando visiti il nostro sito per la prima volta, apparirà un banner
                    che ti permetterà di scegliere quali cookie accettare.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    <strong>Centro Preferenze:</strong> Puoi modificare le tue preferenze in qualsiasi momento cliccando
                    sul link "Gestisci Cookie" nel footer del sito.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    <strong>Impostazioni Browser:</strong> Puoi anche gestire i cookie direttamente dalle impostazioni
                    del tuo browser web.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Legal Information */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Base Legale e Conservazione</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Il trattamento dei dati tramite cookie si basa sul tuo consenso per i cookie non essenziali, in
                conformità al Regolamento Generale sulla Protezione dei Dati (GDPR) e alla normativa italiana sui
                cookie.
              </p>

              <p>
                <strong>Periodo di conservazione:</strong> Le tue preferenze sui cookie vengono conservate per un
                periodo di 12 mesi dalla data del consenso. Dopo questo periodo, ti verrà nuovamente richiesto di
                esprimere le tue preferenze.
              </p>

              <p>
                <strong>Diritti dell'interessato:</strong> Hai il diritto di revocare il tuo consenso in qualsiasi
                momento, di accedere ai tuoi dati e di richiederne la cancellazione.
              </p>
            </div>
          </Card>

          {/* Contact Information */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Contatti</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Per qualsiasi domanda riguardante questa Cookie Policy o per esercitare i tuoi diritti, puoi
                contattarci:
              </p>

              <div className="space-y-2">
                <p>
                  <strong>AG.CED srl</strong>
                </p>
                <p>Email: amatigattei@riminiservizi.com</p>
                <p>Telefono: 0541 793072</p>
                <p>Indirizzo: Via Ariete 18, Rimini 47923 Italia </p>
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button asChild>
              <a href="">Torna alla Home</a>
            </Button>
            {/* <Button variant="outline" asChild>
              <a href="/privacy-policy">Leggi l'Informativa Privacy</a>
            </Button> */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
