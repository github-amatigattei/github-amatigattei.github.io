"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, TrendingUp, Shield } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Modal from "@/components/modal"

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
          Iscritti all'Albo Professionale <br />
          <br /> <strong>
          Clicca QUI per vedere il team</strong>
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
      photo: "2.jpg",
      description: "Consulenza societaria e fiscale, crisi d'impresa, procedure concorsuali e di sovraindebitamento.",
    },
    {
      name: "Dott. Davide Gattei",
      photo: "1.jpg",
      description: "Consulenza societaria e fiscale, crisi d'impresa, procedure concorsuali.",
    },
    {
      name: "Dott. Matteo Lombardini",
      photo: "3.jpg",
      description: "Consulenza societaria, fiscale e revisione legale.",
    },
    {
      name: "Rag. Laura Semprini",
      photo: "4.jpg",
      description: "Contabilità e consulenza in bilancio e fisco.",
    },
  ]

  const [open, setOpen] = useState(false)

  function handleCardClick(index: number) {
    if (stats[index].modal) setOpen(true)
  }

  return (
    <section
      id="expertise"
      className="relative py-12 px-10 bg-muted/30 rounded-lg my-5 overflow-hidden mx-auto px-4 sm:px-6 lg:px-8"
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
          <Badge variant="outline" className="mb-4 text-sm" style={{ color: "rgba(255,255,255,0.9)", background: "rgba(5, 49, 88, 1)" }}>
            La nostra esperienza
          </Badge>
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
      </div>
      { open && (
      <Modal isOpen={open} onClose={() => setOpen(false)} title="Il nostro team">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-semibold" style={{ color: "rgba(5, 49, 88, 1)" }}>{member.name}</h3>
              <p className="text-sm text-muted-foreground" style={{ color: "rgba(33, 33, 33, 0.8)" }}>{member.description}</p>
            </div>
          ))}
        </div>
      </Modal>)
    }  
    </section>
    
  )
}

