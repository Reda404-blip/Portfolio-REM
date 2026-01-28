"use client"

import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/app/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { LineChart, Code2, Users, CheckCircle2 } from "lucide-react"

export function SkillsTicker() {
  const { t } = useLanguage()
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation()

  const skillCategories = [
    {
      icon: LineChart,
      category: t("skills.finance.title"),
      skills: [
        t("skills.finance.1"),
        t("skills.finance.2"),
        t("skills.finance.3"),
        t("skills.finance.4"),
        t("skills.finance.5"),
      ],
    },
    {
      icon: Code2,
      category: t("skills.technical.title"),
      skills: [
        t("skills.technical.1"),
        t("skills.technical.2"),
        t("skills.technical.3"),
        t("skills.technical.4"),
      ],
    },
    {
      icon: Users,
      category: t("skills.leadership.title"),
      skills: [
        t("skills.leadership.1"),
        t("skills.leadership.2"),
        t("skills.leadership.3"),
      ],
    },
  ]

  return (
    <section id="skills" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-secondary/30" />
      <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 animate-fade-in-up">
          <div className="space-y-3">
            <Badge
              variant="outline"
              className="text-primary border-primary/20 bg-primary/5 uppercase tracking-[0.2em] px-4 animate-scale-in"
            >
              {t("skills.badge")}
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">{t("skills.title")}</h2>
            <p className="text-sm text-muted-foreground max-w-xl">{t("skills.description")}</p>
          </div>
          <div className="h-[2px] w-16 sm:w-24 bg-primary/50" />
        </div>

        <div ref={skillsRef} className={`grid gap-5 sm:gap-6 md:grid-cols-3 ${skillsVisible ? "stagger-animate" : ""}`}>
          {skillCategories.map((cat, index) => {
            const Icon = cat.icon
            return (
              <div
                key={cat.category}
                className={`rounded-3xl border border-border/60 bg-card/90 p-6 transition-smooth hover:border-primary/50 hover:shadow-[0_18px_50px_-30px_rgba(212,175,55,0.35)] ${skillsVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: skillsVisible ? `${index * 0.05}s` : "0s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl border border-primary/30 bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-muted-foreground">
                    {cat.category}
                  </h3>
                </div>
                <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
