import type React from "react"
import type { Metadata } from "next"
import { Lato, Roboto_Mono } from "next/font/google"
import "./globals.css"
import { CookieConsentManager } from "@/components/cookie-consent-manager"

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
})

const latoSerif = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato-serif",
  display: "swap",
})

const geistMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "AG.CED srl",
  description:
    "Consulenza esperta finanziaria e legale per privati e aziende.",
    generator: ''
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${lato.variable} ${latoSerif.variable} ${geistMono.variable} antialiased`}>
      <body style={{ minHeight: '100vh' }}>
        <div style={{ width: '100%', maxWidth: 1300, margin: '0 auto', paddingLeft: 30, paddingRight: 30}}>
          {children}
        </div>
        <CookieConsentManager />
      </body>
    </html>
  )
}


