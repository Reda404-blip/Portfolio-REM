"use client"

import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/app/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { LineChart, FileSpreadsheet, Scale, Gauge, Cpu, Code2, Users } from "lucide-react"

export function SkillsTicker() {
  const { t } = useLanguage()
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation()

  const academicItems = [
    { icon: LineChart, title: t("projects.academic.1.title"), desc: t("projects.academic.1.desc") },
    { icon: FileSpreadsheet, title: t("projects.academic.2.title"), desc: t("projects.academic.2.desc") },
    { icon: Scale, title: t("projects.academic.3.title"), desc: t("projects.academic.3.desc") },
    { icon: Gauge, title: t("projects.academic.4.title"), desc: t("projects.academic.4.desc") },
    { icon: Cpu, title: t("projects.academic.5.title"), desc: t("projects.academic.5.desc") },
  ]

  const skillCategories = [
    {
      icon: LineChart,
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
      icon: Code2,
      category: t("skills.technical"),
      skills: [
        t("skills.technical.1"),
        t("skills.technical.2"),
        t("skills.technical.3"),
        t("skills.technical.4"),
      ],
    },
    {
      icon: Users,
      category: t("skills.leadership"),
      skills: [
        t("skills.leadership.1"),
        t("skills.leadership.2"),
        t("skills.leadership.3"),
      ],
    },
  ]

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-secondary/30" />
      <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 animate-fade-in-up">
          <div className="space-y-3">
            <Badge
              variant="outline"
              className="text-primary border-primary/20 bg-primary/5 uppercase tracking-[0.2em] px-4 animate-scale-in"
            >
              {t("skills.badge")}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              {t("skills.title").split(".")[0]}{" "}
              <span className="text-primary">{t("skills.title").split(".")[1]}</span>
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl">
              {t("projects.academic.subtitle")}
            </p>
          </div>
          <div className="h-[2px] w-24 bg-primary/50" />
        </div>

        <div
          ref={skillsRef}
          className={`grid lg:grid-cols-[1.3fr_1fr] gap-8 ${skillsVisible ? "stagger-animate" : ""}`}
        >
          <div className="relative overflow-hidden rounded-[32px] border border-border/60 bg-gradient-to-br from-background via-background/80 to-primary/10 p-6 md:p-8">
            <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
            <div className="relative space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl border border-primary/30 bg-primary/10 text-primary flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.25)]">
                  <LineChart className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">
                    {t("projects.academic.title")}
                  </p>
                  <p className="text-sm font-semibold text-foreground/90">
                    {t("projects.academic.subtitle")}
                  </p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {academicItems.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.title}
                      className="group rounded-2xl border border-border/60 bg-card/90 p-4 transition-smooth hover:border-primary/50 hover:shadow-[0_18px_50px_-30px_rgba(212,175,55,0.35)]"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-xl border border-primary/30 bg-primary/10 text-primary flex items-center justify-center">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground/90">{item.title}</p>
                          <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            {skillCategories.map((cat, index) => {
              const Icon = cat.icon
              return (
                <div
                  key={cat.category}
                  className="rounded-3xl border border-border/60 bg-card/90 p-6 transition-smooth hover:border-primary/50 hover:shadow-[0_18px_50px_-30px_rgba(212,175,55,0.35)]"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl border border-primary/30 bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm font-black uppercase tracking-widest text-muted-foreground">
                      {cat.category}
                    </h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-background border border-border font-semibold text-xs px-3 py-1.5 transition-smooth hover:border-primary/40 hover:bg-primary/5 hover:scale-105"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}


