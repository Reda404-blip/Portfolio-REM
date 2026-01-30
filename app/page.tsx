import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { SkillsTicker } from "@/components/skills-ticker"
import { Experience } from "@/components/experience"
import { Certifications } from "@/components/certifications"
import { TerminalProjects } from "@/components/terminal-projects"
import { Footer } from "@/components/footer"
import { ScrollGuide } from "@/components/scroll-guide"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollReveal />
      <ScrollGuide />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <TerminalProjects />
      <SkillsTicker />
      <Certifications />
      <Footer />
    </main>
  )
}
