"use client"

import { Code2, Shield, Users, ArrowUpRight, LineChart, FileSpreadsheet, Scale, Gauge, Cpu } from "lucide-react"
import { useLanguage } from "@/app/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function TerminalProjects() {
  const { t } = useLanguage()
  const { ref: projectRef, isVisible: projectVisible } = useScrollAnimation()

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="relative overflow-hidden rounded-[40px] border border-border/60 bg-gradient-to-br from-background via-background/80 to-primary/15 p-6 md:p-12">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(212,175,55,0.08),transparent_40%)]" />
          <div className="relative grid gap-10 md:grid-cols-[1fr_1.4fr] items-start">
            <div className="space-y-5 animate-fade-in-up">
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground font-semibold">
                {t("projects.academic.title")}
              </p>
              <h3 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                {t("projects.academic.subtitle")}
              </h3>
              <div className="h-[3px] w-20 rounded-full bg-primary/70" />
              <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-semibold text-primary">
                <span className="h-[1px] w-10 bg-primary/60" />
                Academic Focus
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                LineChart,
                FileSpreadsheet,
                Scale,
                Gauge,
                Cpu,
              ].map((Icon, index) => (
                <div
                  key={index}
                  className="group relative rounded-3xl border border-border/60 bg-card/90 p-5 transition-smooth hover:border-primary/50 hover:shadow-[0_20px_60px_-30px_rgba(212,175,55,0.35)] hover:-translate-y-1"
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative flex items-start gap-4">
                    <div className="h-11 w-11 rounded-2xl border border-primary/30 bg-primary/10 text-primary flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.25)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground/90">
                        {t(`projects.academic.${index + 1}.title`)}
                      </p>
                      <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                        {t(`projects.academic.${index + 1}.desc`)}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-primary/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4 animate-fade-in-up">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">
            {t("projects.badge")}
          </p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight">
            {t("projects.title").split(".")[0]}{" "}
            <span className="text-primary">{t("projects.title").split(".")[1]}</span>
          </h2>
          <p className="text-muted-foreground text-sm font-medium leading-relaxed max-w-2xl">
            {t("projects.description")}
          </p>
        </div>

        <div
          ref={projectRef}
          className={`grid gap-6 md:grid-cols-3 ${projectVisible ? "stagger-animate" : ""}`}
        >
          <div
            className={`glass rounded-3xl border border-border p-8 space-y-4 transition-smooth hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 ${projectVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
              <Code2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-black tracking-tight">{t("projects.automation")}</h3>
            <p className="text-sm text-muted-foreground font-medium leading-relaxed">
              {t("projects.automation.desc")}
            </p>
          </div>

          <div
            className={`glass rounded-3xl border border-border p-8 space-y-4 transition-smooth hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 ${projectVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: projectVisible ? "0.05s" : "0s" }}
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-black tracking-tight">{t("projects.compliance")}</h3>
            <p className="text-sm text-muted-foreground font-medium leading-relaxed">
              {t("projects.compliance.desc")}
            </p>
          </div>

          <div
            className={`rounded-3xl border border-primary/20 bg-primary p-8 space-y-4 text-primary-foreground shadow-2xl shadow-primary/20 transition-smooth hover:shadow-primary/40 ${projectVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: projectVisible ? "0.1s" : "0s" }}
          >
            <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center border border-white/20">
              <Users className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-black tracking-tight">{t("projects.president")}</h3>
            <p className="text-sm text-primary-foreground/80 font-medium leading-relaxed">
              {t("projects.president.desc")}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-black tracking-tight">{t("projects.opensource.title")}</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "LumiRoster",
                url: "https://github.com/Reda404-blip/LumiRoster",
                description: t("projects.opensource.lumiroster.desc"),
              },
              {
                name: "FINOPS-INTELLIGENCE",
                url: "https://github.com/Reda404-blip/FINOPS-INTELLIGENCE",
                description: t("projects.opensource.finops.desc"),
              },
              {
                name: "DebtMate",
                url: "https://github.com/Reda404-blip/DebtMate",
                description: t("projects.opensource.debtmate.desc"),
              },
            ].map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group rounded-3xl border border-border bg-card/80 p-7 transition-smooth hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-lg font-black tracking-tight group-hover:text-primary transition-colors">
                      {project.name}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{t("projects.opensource.host")}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
