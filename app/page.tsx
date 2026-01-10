import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { SkillsTicker } from "@/components/skills-ticker"
import { Experience } from "@/components/experience"
import { Certifications } from "@/components/certifications"
import { TerminalProjects } from "@/components/terminal-projects"
import { Footer } from "@/components/footer"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto px-6">
        <Experience />
        <TerminalProjects />
        <Certifications />
      </div>
      <SkillsTicker />
      <Footer />
    </main>
  )
}
