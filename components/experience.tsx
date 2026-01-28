"use client"

import { Building2, Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/app/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Experience() {
  const { t } = useLanguage()
  const { ref: expRef, isVisible: expVisible } = useScrollAnimation()
  const { ref: eduRef, isVisible: eduVisible } = useScrollAnimation()

  const experiences = [
    {
      period: "2025",
      type: "work",
      title: t("exp.2025.title"),
      company: t("exp.2025.company"),
      location: t("exp.2025.location"),
      logo: "/images/gha.png",
      desc: t("exp.2025.desc"),
      tags: [t("exp.2025.tag.1"), t("exp.2025.tag.2"), t("exp.2025.tag.3")],
    },
    {
      period: "2024",
      type: "work",
      title: t("exp.2024.title"),
      company: t("exp.2024.company"),
      location: t("exp.2024.location"),
      logo: "/images/dgi.png",
      desc: t("exp.2024.desc"),
      tags: [t("exp.2024.tag.1"), t("exp.2024.tag.2"), t("exp.2024.tag.3")],
    },
    {
      period: "2023",
      type: "work",
      title: t("exp.2023.title"),
      company: t("exp.2023.company"),
      location: t("exp.2023.location"),
      logo: "/images/tgr.png",
      desc: t("exp.2023.desc"),
      tags: [t("exp.2023.tag.1"), t("exp.2023.tag.2"), t("exp.2023.tag.3")],
    },
  ]

  const education = [
    {
      period: t("exp.edu1.period"),
      type: "edu",
      title: t("exp.edu1.title"),
      institution: t("exp.edu1.institution"),
      logo: "/images/ENCGO.png",
      desc: t("exp.edu1.desc"),
    },
    {
      period: t("exp.edu2.period"),
      type: "edu",
      title: t("exp.edu2.title"),
      institution: t("exp.edu2.institution"),
      logo: "/images/ibn.png",
      desc: t("exp.edu2.desc"),
    },
  ]
  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16 lg:space-y-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 animate-fade-in-up">
          <div className="space-y-4">
            <Badge
              variant="outline"
              className="text-primary border-primary/20 bg-primary/5 uppercase tracking-[0.2em] px-4 animate-scale-in"
            >
              {t("exp.badge")}
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
              {t("exp.title").split(".")[0]}{" "}
              <span className="text-primary">{t("exp.title").split(".")[1]}</span>
            </h2>
          </div>
          <div />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
          <div ref={expRef} className={expVisible ? "space-y-12" : "space-y-12 opacity-0"}>
            <div className="flex items-center gap-4 mb-8 animate-fade-in-left">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center transition-smooth hover:bg-primary/20 hover:scale-110">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">{t("exp.work")}</h3>
            </div>

            <div className="relative space-y-8 pl-6 sm:pl-8 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-primary before:to-transparent stagger-animate">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className={`group relative transition-smooth hover:translate-x-2 ${expVisible ? "animate-fade-in-left" : "opacity-0"}`}
                  style={{ animationDelay: expVisible ? `${i * 0.1}s` : "0s" }}
                >
                  <div className="absolute -left-[29px] sm:-left-[37px] top-1.5 w-4 h-4 rounded-full border-4 border-background bg-primary shadow-[0_0_0_4px_rgba(212,175,55,0.1)] transition-transform group-hover:scale-125 group-hover:shadow-[0_0_0_8px_rgba(212,175,55,0.2)]" />

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-primary font-bold text-xs uppercase tracking-widest">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </div>
                    <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{exp.title}</h4>
                    <div className="flex flex-wrap items-center gap-3 text-muted-foreground text-xs sm:text-sm font-semibold">
                      <span className="flex flex-wrap items-center gap-2 min-w-0">
                        <span className="h-12 w-12 rounded-xl border border-border/70 bg-background p-2 shadow-sm">
                          <img src={exp.logo} alt={exp.company} className="h-full w-full object-contain" />
                        </span>
                        <span className="flex flex-wrap items-center gap-1.5 min-w-0">
                          <Building2 className="w-4 h-4" /> {exp.company}
                        </span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" /> {exp.location}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed font-medium">{exp.desc}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-[10px] uppercase font-bold px-2 py-0 bg-secondary/50 transition-smooth hover:bg-primary/10 hover:border-primary/40"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div ref={eduRef} className={eduVisible ? "space-y-12" : "space-y-12 opacity-0"}>
            <div className="flex items-center gap-4 mb-8 animate-fade-in-right">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center transition-smooth hover:bg-primary/20 hover:scale-110">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">{t("exp.education")}</h3>
            </div>

            <div className="relative space-y-8 pl-6 sm:pl-8 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-primary before:to-transparent stagger-animate">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className={`group relative transition-smooth hover:translate-x-2 ${eduVisible ? "animate-fade-in-right" : "opacity-0"}`}
                  style={{ animationDelay: eduVisible ? `${(experiences.length + i) * 0.1}s` : "0s" }}
                >
                  <div className="absolute -left-[29px] sm:-left-[37px] top-1.5 w-4 h-4 rounded-full border-4 border-background bg-primary shadow-[0_0_0_4px_rgba(212,175,55,0.1)] transition-transform group-hover:scale-125 group-hover:shadow-[0_0_0_8px_rgba(212,175,55,0.2)]" />

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-primary font-bold text-xs uppercase tracking-widest">
                      <Calendar className="w-3 h-3" />
                      {edu.period}
                    </div>
                    <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{edu.title}</h4>
                    <div className="flex flex-wrap items-center gap-3 text-muted-foreground text-xs sm:text-sm font-semibold">
                      <span className="flex flex-wrap items-center gap-2 min-w-0">
                        <span className="h-12 w-12 rounded-xl border border-border/70 bg-background p-2 shadow-sm">
                          <img src={edu.logo} alt={edu.institution} className="h-full w-full object-contain" />
                        </span>
                        <span className="flex flex-wrap items-center gap-1.5 min-w-0">
                          <Building2 className="w-4 h-4" /> {edu.institution}
                        </span>
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed font-medium">{edu.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
