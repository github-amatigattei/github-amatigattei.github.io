import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator, FileText, Building2, PiggyBank, Scale, TrendingUp, ArrowRight } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Calculator,
      title: "Preparazione e Pianificazione Fiscale",
      description:
        "Servizi fiscali per imprese e privati, inclusa la pianificazione strategica per minimizzare il carico fiscale e garantire la conformità normativa.",
      features: [
        "Pianificazione fiscale strategica",
        "Assistenza agli adempimenti fiscali",
        "Dichiarazioni fiscali per imprese e società",
        "Gestione adempimenti IVA",
        "Dichiarazioni fiscali per privati",
        "Gestione dei pagamenti fiscali ordinari",
        "Assistenza ai pagamenti fiscali arretrati"
      ],
    },
    {
      icon: Building2,
      title: "Servizi Finanziari per l'Avvio e la Gestione dell'Impresa",
      description:
        "Assistenza alla costituzione e avvio di nuove imprese.",
      features: [
        "Costituzione società e adempimenti per l'avvio dell'attività d'impresa",
        "Gestione scritture contabili",
        "Gestione libri sociali",
        "Consulenza per finanziamenti",
        "Consulenza per investimenti",
        "Predisposizione del bilancio di esercizio",
        "Previsione dei costi di gestione"
      ],
    },
    {
      icon: TrendingUp,
      title: "Consulenza per la Crescita dell'Impresa",
      description:
        "Consulenza per aziende che desiderano migliorare la performance e la redditività in modo equilibrato sulla base del bilancio.",
      features: [
        "Elaborazione bilancio di previsione (budget)",
        "Gestione del bilancio di esercizio", 
        "Misurazione della performance economica, patrimoniale e finanziaria",
        "Controllo degli scostamenti e interventi correttivi"
      ],
    },
    {
      icon: FileText,
      title: "Assistenza alla Crisi di Impresa",
      description:
        "Assistenza specializzata a imprese in situazioni di crisi. Supporto nella diagnosi, pianificazione e implementazione di soluzioni per il risanamento aziendale.",
      features: ["Diagnosi accurata delle cause della crisi ", 
        "Proposta di soluzioni strategiche e operative", 
        "Supporto nella ristrutturazione del debito e nella riorganizzazione aziendale", 
        "Verifica degli adeguati assetti organizzativi, amministrativi e contabili"],
    },
    {
      icon: Scale,
      title: "Assistenza alla Ristrutturazione del Debito e alle Procedure di Sovraindebitamento",
      description:
        "Assistenza nella gestione dei debiti di piccole aziende e privati che affrontano difficoltà finanziarie.",
      features: ["Analisi dettagliata della situazione debitoria", 
        "Pianificazione di strategie per la ristrutturazione del debito", 
        "Sviluppo di piani di risanamento finanziario",
        "Negoziazione con i creditori", 
        "Supporto nelle procedure legali di sovraindebitamento"],
    },
    {
      icon: PiggyBank,
      title: "Pianificazione Patrimoniale e Finanziaria",
      description:
        "Consulenza alla gestione del patrimonio e pianificazione finanziaria per privati e famiglie.",
      features: [
        "Consulenza per la strategia pensionistica",
        "Gestione del patrimonio personale o familiare",
        "Pianificazione successoria",
        "Consulenza sugli investimenti"
      ],
    }
  ]

  return (
    <section id="services" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4" style={{ background: "rgba(6, 44, 77, 1)", color: "white" }}>
            I Nostri Servizi
          </Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-balance mb-4 text-shadow-md" style={{ color: "rgba(5, 49, 88, 1)" }}>
            Soluzioni su Misura per Aziende e Privati
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Dalla preparazione fiscale alla pianificazione finanziaria strategica, offriamo una gamma completa di
            servizi progettati per proteggere e far crescere i tuoi interessi finanziari.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="shadow-sm hover:shadow-[0_8px_32px_0_rgba(6,44,77,1)] transition-all hover:-translate-y-1 border-0"
            >
              <CardHeader>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                <service.icon className="h-6 w-6 text-primary"/>
              </div>
              <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="text-sm flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0" />
                  {feature}
                </li>
                ))}
              </ul>
              {/* <Button variant="ghost" className="w-full justify-between p-0 h-auto font-medium">
                Scopri di Più
                <ArrowRight className="h-4 w-4" />
              </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="px-8" style={{ background: "rgba(6, 44, 77, 1)" }}>
            <a href="#contact" className="flex items-center">
            Prenota la tua consulenza
            <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            Discuti le tue esigenze specifiche con il nostro team
          </p>
        </div>
      </div>
    </section>
  )
}
