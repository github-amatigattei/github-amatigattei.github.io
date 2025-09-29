import { Facebook, Twitter, Linkedin, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/30 py-16 rounded-lg px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center overflow-hidden p-0">
              <img
                src="/AG-PRO2-4c.png"
                alt="AG.CED Logo"
                className="h-full w-full object-cover"
              />
            </div>
              <span className="text-xl font-bold">AG.CED srl</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Esperti fiscali e di contabilità.
            </p>
          </div>


          <div>
            <h3 className="font-semibold mb-4">Link rapidi</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#expertise" className="text-muted-foreground hover:text-foreground transition-colors">
                  Su di noi
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Servizi
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contatti
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Privacy Policy</h3>
            <ul className="space-y-2 text-sm">
                <li>
                <a href="/cookie-policy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Consulta qui la nostra Cookie Policy per saperne di più su come proteggiamo i tuoi dati.
                </a>
                </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0" style={{ color: "rgba(113, 114, 114, 1)" }}>© 2025 AG.CED srl. Tutti i diritti sono riservati.</div>
        </div>
      </div>
    </footer>
  )
}
