"use client"

import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/app/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function SkillsTicker() {
  const { t } = useLanguage()
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation()

  const skillCategories = [
    {
      category: t("skills.finance"),
      skills: [
        t("skills.finance.1"),
        t("skills.finance.2"),
        t("skills.finance.3"),
        t("skills.finance.4"),
        t("skills.finance.5"),
        t("skills.finance.6"),
      ],
    },
    {
      category: t("skills.technical"),
      skills: [
        t("skills.technical.1"),
        t("skills.technical.2"),
        t("skills.technical.3"),
        t("skills.technical.4"),
      ],
    },
    {
      category: t("skills.leadership"),
      skills: [
        t("skills.leadership.1"),
        t("skills.leadership.2"),
        t("skills.leadership.3"),
      ],
    },
  ]

  return (
    <section className="py-16 border-y border-border bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12 animate-fade-in-up">
          <div className="space-y-2">
            <Badge
              variant="outline"
              className="text-primary border-primary/20 bg-primary/5 uppercase tracking-[0.2em] px-4 animate-scale-in"
            >
              {t("skills.badge")}
            </Badge>
            <h2 className="text-4xl font-black tracking-tight">
              {t("skills.title").split(".")[0]} <span className="text-primary">{t("skills.title").split(".")[1]}</span>
            </h2>
          </div>
          <div />
        </div>

        <div ref={skillsRef} className={`grid md:grid-cols-3 gap-8 ${skillsVisible ? "stagger-animate" : ""}`}>
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className={`space-y-4 transition-smooth hover:translate-y-[-4px] ${skillsVisible ? "animate-fade-in-up" : "opacity-0"}`}
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <h3 className="text-sm font-black uppercase tracking-widest text-muted-foreground">{cat.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, idx) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-card border border-border font-semibold text-xs px-3 py-1.5 transition-smooth hover:border-primary/40 hover:bg-primary/5 hover:scale-105"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


