import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Space_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "./language-context"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
})
const spaceMono = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-code",
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Reda El Maaroufi | Gestion Financière & Automatisation",
  description:
    "Portfolio de Reda El Maaroufi, étudiant en 5e année à l’ENCG, spécialisé en gestion financière, comptabilité, fiscalité et automatisation Python.",
  keywords: [
    "gestion financière",
    "comptabilité",
    "fiscalité",
    "automatisation",
    "Python",
    "ENCG",
    "stage PFE 2026",
    "finance",
    "analyse financière",
  ],
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${montserrat.variable} ${spaceMono.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
