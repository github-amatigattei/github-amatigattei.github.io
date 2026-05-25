"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, TrendingUp, Shield } from "lucide-react"
import { useState } from "react"
import Modal from "@/components/modal"
import Image from "next/image"

export function ExpertiseSection() {
  const stats = [
    {
      icon: Calendar,
      number: "30",
      label: "Anni di Esperienza",
      description: "A servizio dei clienti dal 1995",
    },
    {
      icon: Users,
      number: "3+",
      label: "Dottori Commercialisti",
      description: (
        <>
          Iscritti all'Albo Professionale dei Dottori Commercialisti ed Esperti Contabili
        </>
      ),
      modal: true, // flag to open modal on click
    },
    {
      icon: Shield,
      number: "500+",
      label: "Clienti Serviti",
      description: "Aziende e Privati",
    },
  ]

  const team = [
    {
      name: "Dott.ssa Monica Amati",
      description: "Consulenza societaria e fiscale, crisi d'impresa, procedure concorsuali e di sovraindebitamento.",
    },
    {
      name: "Dott. Davide Gattei",
      description: "Consulenza societaria e fiscale, crisi d'impresa, procedure concorsuali.",
    },
    {
      name: "Dott. Matteo Lombardini",
      description: "Consulenza societaria, fiscale e revisione legale.",
    },
    {
      name: "Rag. Laura Semprini",
      description: "Contabilità e consulenza in bilancio e fisco.",
    },
  ]

  const portraits = [
    {
      src: "/team-davide-gattei.jpg",
      name: "Dr. Davide Gattei",
      role: "Consulenza societaria e fiscale, crisi d'impresa, procedure concorsuali.",
    },
    {
      src: "/team-monica-amati-2.jpg",
      name: "Dr.ssa Monica Amati",
      role: "Consulenza societaria e fiscale, crisi d'impresa, procedure concorsuali e di sovraindebitamento.",
    },
  ]

  const landscapes = [
    {
      src: "/team-monica-e-davide.jpg",
      name: "Dr.ssa Monica Amati e Dr. Davide Gattei",
      role: "Lo Studio Amati Gattei.",
    },
    {
      src: "/team-studio.jpg",
      name: "Il team dello Studio Amati Gattei",
      role: "Il nostro team di professionisti.",
    },
  ]

  const [open, setOpen] = useState(false)

  function handleCardClick(index: number) {
    if (stats[index].modal) setOpen(true)
  }

  return (
    <section
      id="expertise"
      className="relative py-12 px-10 bg-muted/30 rounded-lg my-5 mx-auto px-4 sm:px-6 lg:px-8"
      style={{
      backgroundImage: 'url("/office.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      }}
    >
      <div
        className="absolute inset-0 z-0 pointer-events-none backdrop-blur supports-[backdrop-filter]:bg-background/60"
        style={{
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
      ></div>
      <div className="relative z-10 container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-balance mb-4 text-shadow-sm" style={{ color: "rgba(5, 49, 88, 1)" }}>
            Chi siamo e cosa possiamo fare per te
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card
              onClick={() => handleCardClick(index)}
              key={index}
              className="text-center shadow-sm hover:shadow-[0_8px_32px_0_rgba(6,44,77,1)] transition-all hover:-translate-y-1 border-0"
              style={{ background: "rgba(5, 49, 88, 0.8)" }}
            >
              <CardContent className="pt-8 pb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4" style={{ background: "rgba(243, 246, 248, 1)" }}>
            <stat.icon className="h-6 w-6 text-primary" color="#053158"/>
          </div>
          <div className="text-3xl font-serif font-bold mb-2" style={{ color: "rgba(246, 130, 31, 1)" }}>{stat.number}</div>
          <div className="font-semibold mb-1" style={{ color: "rgba(246, 130, 31, 1)" }}>{stat.label}</div>
          <div className="text-sm" style={{ color: "rgba(255, 255, 255, 0.9)" }}>{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Inverted: Services inside cards, preserving background and text colors */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-4 gap-6">
          <Card className="text-center shadow-sm bg-background/50 shadow-sm hover:shadow-[0_8px_32px_0_rgba(6,44,77,1)] transition-all hover:-translate-y-1 border-0" style={{ background: "rgba(238, 242, 246, 0.8)" }}>
            <CardContent className="pt-8 pb-6">
              <h3 className="text-xl font-serif font-semibold mb-3" style={{ color: "rgba(5, 49, 88, 1)" }}>Consulenza alla Gestione dell'Impresa</h3>
              <p className="text-muted-foreground" style={{ color: "rgba(2, 2, 2, 0.8)" }}>
          Assistenza alla gestione dell'impresa sulla base dei dati di bilancio per ottimizzare la performance aziendale e la crescita sostenibile.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-sm bg-background/50 shadow-sm hover:shadow-[0_8px_32px_0_rgba(6,44,77,1)] transition-all hover:-translate-y-1 border-0" style={{ background: "rgba(238, 242, 246, 0.8)" }}>
            <CardContent className="pt-8 pb-6">
              <h3 className="text-xl font-serif font-semibold mb-3" style={{ color: "rgba(5, 49, 88, 1)" }}>Consulenza giuridico-economica</h3>
              <p className="text-muted-foreground" style={{ color: "rgba(33, 33, 33, 0.8)" }}>
          Assistenza sulle normative di bilancio e societarie.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-sm bg-background/50 shadow-sm hover:shadow-[0_8px_32px_0_rgba(6,44,77,1)] transition-all hover:-translate-y-1 border-0" style={{ background: "rgba(238, 242, 246, 0.8)" }}>
            <CardContent className="pt-8 pb-6">
              <h3 className="text-xl font-serif font-semibold mb-3" style={{ color: "rgba(5, 49, 88, 1)" }}>Assistenza Fiscale e Finanziaria</h3>
              <p className="text-muted-foreground" style={{ color: "rgba(33, 33, 33, 0.8)" }}>
          Consulenza finanziaria e pianificazione fiscale strategica commisurata alle esigenze del cliente.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-sm bg-background/50 shadow-sm hover:shadow-[0_8px_32px_0_rgba(6,44,77,1)] transition-all hover:-translate-y-1 border-0" style={{ background: "rgba(238, 242, 246, 0.8)" }}>
            <CardContent className="pt-8 pb-6">
              <h3 className="text-xl font-serif font-semibold mb-3" style={{ color: "rgba(5, 49, 88, 1)" }}>Dichiarazioni fiscali</h3>
              <p className="text-muted-foreground" style={{ color: "rgba(33, 33, 33, 0.8)" }}>
          Adempimenti fiscali per aziende e privati, dichiarazioni dei redditi, IVA, IMU e altre imposte.
              </p>
            </CardContent>
          </Card>
       
        </div>

        {/* Photos sub-section */}
        <div className="mt-16 bg-white rounded-xl p-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-sm" style={{ background: "rgba(6, 44, 77, 1)", color: "white" }}>
              Il nostro team
            </Badge>
          </div>

          <div className="flex flex-nowrap gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:mx-0 md:px-0 md:pb-0">
            {portraits.map((photo, i) => (
              <div key={i} className="snap-center shrink-0 w-[80%] md:w-auto">
                <div className="p-1.5 bg-white rounded-xl shadow-lg border border-gray-100">
                  <div className="relative overflow-hidden rounded-lg" style={{ aspectRatio: "2/3" }}>
                    <Image src={photo.src} alt={photo.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-white font-semibold text-lg">{photo.name}</p>
                      <p className="text-white/80 text-sm mt-1 leading-snug">{photo.role}</p>
                    </div>
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-lg pointer-events-none" />
                  </div>
                </div>
              </div>
            ))}

            <div className="snap-center shrink-0 w-[80%] md:w-auto">
              <div className="p-1.5 bg-white rounded-xl shadow-lg border border-gray-100 h-full">
                <div className="relative overflow-hidden rounded-lg flex flex-col" style={{ aspectRatio: "2/3" }}>
                  {landscapes.map((photo, i) => (
                    <div key={i} className="relative flex-1 overflow-hidden">
                      <Image src={photo.src} alt={photo.name} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <p className="text-white font-semibold text-lg">{photo.name}</p>
                        <p className="text-white/80 text-sm mt-1 leading-snug">{photo.role}</p>
                      </div>
                    </div>
                  ))}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-lg pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </section>
    
  )
}

