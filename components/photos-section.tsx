import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function PhotosSection() {
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

  return (
    <section id="photos" className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-sm" style={{ background: "rgba(6, 44, 77, 1)", color: "white" }}>
            Il nostro team
          </Badge>
        </div>

        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4">
          {portraits.map((photo, i) => (
            <div
              key={i}
              className="snap-center shrink-0 w-[75vw] md:w-[40vw] lg:w-[28vw]"
            >
              <div className="p-1.5 bg-white rounded-xl shadow-lg border border-gray-100">
                <div
                  className="relative overflow-hidden rounded-lg"
                  style={{ aspectRatio: "2/3" }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.name}
                    fill
                    className="object-cover"
                  />
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

          <div className="snap-center shrink-0 w-[75vw] md:w-[40vw] lg:w-[28vw]">
            <div className="p-1.5 bg-white rounded-xl shadow-lg border border-gray-100 h-full">
              <div
                className="relative overflow-hidden rounded-lg flex flex-col"
                style={{ aspectRatio: "2/3" }}
              >
                {landscapes.map((photo, i) => (
                  <div key={i} className="relative flex-1 overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={photo.name}
                      fill
                      className="object-cover"
                    />
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
    </section>
  )
}
