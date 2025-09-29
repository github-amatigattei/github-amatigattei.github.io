import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Award } from "lucide-react"

export function HeroSection() {
  return (
    <section
      className="relative py-10 md:py-32 overflow-x-hidden mx-auto px-4 sm:px-6 lg:px-8"
      style={{
      backgroundImage: 'url("/header-bg.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      }}
    >
      {/* Overlay to desaturate/whiten the background image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
      <div
        className="w-full h-full"
        style={{
        background: "rgba(12, 37, 60, 0.6)",
        mixBlendMode: "lighten",
        backdropFilter: "grayscale(0.8) brightness(0.8)",
        WebkitBackdropFilter: "grayscale(1) brightness(0.8)",
        }}
      ></div>
      </div>
      <div className="container relative z-10 mx-auto">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-4">
        <img
          src="/AG-PRO2-4c.png"
          alt="Amati Gattei Logo"
          width={225}
          height={225}
          className="object-contain"
        />
        </div>
        <div className="inline-flex items-center rounded-full border px-6 py-2 text-sm mb-8 bg-card">
        {/* <Award className="mr-2 h-4 w-4 text-primary" /> */}
        <span className="text-muted-foreground">Da 30 anni sul territorio Riminese • Consulenza fiscale e finanziaria esperta</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tight text-balance mb-6 text-white text-shadow-lg">
        Studio Dottori Commercialisti<br />
        <span className="text-primary block text-shadow-lg" style={{ color: "rgba(246, 130, 31, 1)" }}>Amati Gattei</span>
        </h1>
        <h2 className="text-4xl md:text-4xl lg:text-4xl font-serif tracking-tight text-balance mb-2 text-shadow-lg text-white">
        Revisori Legali
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto leading-relaxed text-white text-shadow-md">
        Esperienza trentennale nella consulenza fiscale e finanziaria alle imprese e ai privati. Esperti in Bilancio e Gestione dell'Impresa, diritto societario e Codice della Crisi di Impresa e dell'Insolvenza. 
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
        <Button size="lg" className="text-base px-8" style={{ color: "rgba(5, 49, 88, 1)", background: "rgba(255, 255, 255, 1)" }}>
          <a href="#services" className="flex items-center">
          <Shield className="mr-2 h-4 w-4"/>
          Visualizza i Nostri Servizi
          </a>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="text-base px-8 bg-[rgba(246,130,31,1)] text-white hover:bg-white hover:text-[rgba(5,49,88,1)]"
        >
          <a href="#contact" className="flex items-center">
          Prenota 1ª Consulenza Gratuita
          <ArrowRight className="ml-2 h-4 w-4" /> 
          </a>
        </Button>
        </div>

        <div className="inline-flex items-center rounded-full border px-6 py-2 text-sm mb-8 bg-card">
        <span className="text-muted-foreground">Dottori Commercialisti Abilitati Iscritti all'Albo  •    Consulenze a Privati e Aziende</span>
        </div>
      </div>
      </div>

      <div className="absolute inset-0 -z-10">
      <div
        className="w-full h-full"
        style={{
        backdropFilter: "blur(400px)",
        WebkitBackdropFilter: "blur(400px)",
        }}
      ></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}
