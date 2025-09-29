import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Shield, Mail, Phone, MapPin } from "lucide-react"

export const metadata = {
  title: "Informativa sulla Privacy - CED Contabilità",
  description: "Informativa sulla privacy e protezione dei dati personali di CED Contabilità in conformità al GDPR.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">Informativa sulla Privacy</h1>
            <p className="text-lg text-muted-foreground">Come proteggiamo e utilizziamo i tuoi dati personali</p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Ultimo aggiornamento: Gennaio 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>Tempo di lettura: 8 minuti</span>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Introduzione</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                CED Contabilità si impegna a proteggere la privacy e i dati personali dei propri clienti e visitatori
                del sito web. Questa informativa descrive come raccogliamo, utilizziamo e proteggiamo le tue
                informazioni personali in conformità al Regolamento Generale sulla Protezione dei Dati (GDPR) UE
                2016/679.
              </p>
            </div>
          </Card>

          {/* Data Controller */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Titolare del Trattamento</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <p>
                    <strong>CED Contabilità S.r.l.</strong>
                  </p>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Via Roma 123, 20121 Milano, Italia</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>+39 02 1234 5678</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>privacy@cedcontabilita.it</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <p>
                    <strong>Dati Societari:</strong>
                  </p>
                  <p className="text-sm text-muted-foreground">P.IVA: 12345678901</p>
                  <p className="text-sm text-muted-foreground">C.F.: 12345678901</p>
                  <p className="text-sm text-muted-foreground">REA: MI-1234567</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Data Collection */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Dati Raccolti</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Dati forniti volontariamente:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Nome, cognome e dati di contatto (email, telefono)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Informazioni aziendali (ragione sociale, P.IVA, settore)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Messaggi e comunicazioni inviate tramite i nostri moduli di contatto</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Dati raccolti automaticamente:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Indirizzo IP e informazioni del browser</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Dati di navigazione e utilizzo del sito web</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Cookie e tecnologie simili (vedi Cookie Policy)</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Purpose of Processing */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Finalità del Trattamento</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold">Servizi Professionali:</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Fornitura di servizi contabili e fiscali</li>
                    <li>• Consulenza finanziaria e legale</li>
                    <li>• Gestione della relazione cliente</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold">Comunicazione:</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Risposta a richieste di informazioni</li>
                    <li>• Invio di comunicazioni commerciali</li>
                    <li>• Newsletter e aggiornamenti normativi</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold">Miglioramento Servizi:</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Analisi dell'utilizzo del sito web</li>
                    <li>• Ottimizzazione dell'esperienza utente</li>
                    <li>• Sviluppo di nuovi servizi</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold">Obblighi Legali:</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Adempimenti fiscali e contabili</li>
                    <li>• Conservazione documentale</li>
                    <li>• Antiriciclaggio e compliance</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* Legal Basis */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Base Giuridica</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Il trattamento dei tuoi dati personali si basa su:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>
                    <strong>Consenso:</strong> Per l'invio di comunicazioni commerciali e newsletter
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>
                    <strong>Esecuzione contrattuale:</strong> Per la fornitura dei servizi professionali
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>
                    <strong>Interesse legittimo:</strong> Per il miglioramento dei servizi e la sicurezza
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>
                    <strong>Obbligo legale:</strong> Per gli adempimenti normativi e fiscali
                  </span>
                </li>
              </ul>
            </div>
          </Card>

          {/* Your Rights */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">I Tuoi Diritti</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>In conformità al GDPR, hai i seguenti diritti:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>
                      <strong>Accesso:</strong> Ottenere informazioni sui tuoi dati
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>
                      <strong>Rettifica:</strong> Correggere dati inesatti
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>
                      <strong>Cancellazione:</strong> Richiedere la rimozione dei dati
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>
                      <strong>Limitazione:</strong> Limitare il trattamento
                    </span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>
                      <strong>Portabilità:</strong> Trasferire i tuoi dati
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>
                      <strong>Opposizione:</strong> Opporti al trattamento
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>
                      <strong>Revoca consenso:</strong> Ritirare il consenso
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>
                      <strong>Reclamo:</strong> Presentare reclamo al Garante
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Contact */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Contatti per la Privacy</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Per esercitare i tuoi diritti o per qualsiasi domanda riguardante il trattamento dei tuoi dati
                personali, puoi contattarci:
              </p>

              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>
                      <strong>Email:</strong> privacy@cedcontabilita.it
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>
                      <strong>Telefono:</strong> +39 02 1234 5678
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>
                      <strong>Indirizzo:</strong> Via Roma 123, 20121 Milano, Italia
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button asChild>
              <a href="/">Torna alla Home</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/cookie-policy">Leggi la Cookie Policy</a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
