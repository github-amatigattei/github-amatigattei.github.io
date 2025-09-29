import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ExpertiseSection } from "@/components/expertise-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BlogPreviewSection } from "@/components/blog-preview-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ExpertiseSection />
        <ServicesSection />
        {/* <BlogPreviewSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
