import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function VideoInterviewSection() {
  return (
    <section id="media" className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-sm" style={{ background: "rgba(6, 44, 77, 1)", color: "white" }}>
            Video
          </Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-balance mb-4 text-shadow-sm" style={{ color: "rgba(5, 49, 88, 1)" }}>
            Intervista
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Scopri l&apos;intervista alla Dott.ssa Monica Amati dello Studio Amati Gattei sull&apos;intervista di Story Time.
          </p>
        </div>

        <div className="flex flex-col items-center gap-10">
          <div className="w-full max-w-3xl">
            <div className="relative" style={{ paddingBottom: "56.25%", height: 0 }}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/EgcrIV1ej24?si=FlRoeBj91i0kIFZe"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                  borderRadius: "8px",
                }}
              />
            </div>
          </div>

          <div className="w-full max-w-lg text-center">
            <a
              href="https://www.story-time.it/oltre-i-numeri-lesperienza-dello-studio-amati-gattei-al-servizio-del-futuro-della-clientela/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                style={{ background: "rgba(5, 49, 88, 1)", cursor: "pointer" }}
              >
                Leggi l&apos;intervista completa
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
