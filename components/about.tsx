"use client"

import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/app/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { CheckCircle } from "lucide-react"

export function About() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()

  const values = [t("about.values.1"), t("about.values.2"), t("about.values.3")]

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          ref={ref}
          className={`grid lg:grid-cols-[1.2fr_0.8fr] gap-8 sm:gap-10 lg:gap-12 items-start ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="space-y-6">
            <Badge
              variant="outline"
              className="text-primary border-primary/20 bg-primary/5 uppercase tracking-[0.2em] px-4 animate-scale-in"
            >
              {t("about.badge")}
            </Badge>
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">{t("about.title")}</h2>
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-semibold">
                {t("about.subtitle")}
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
            </div>
          </div>

          <div className="rounded-[32px] border border-border/60 bg-card/90 p-5 sm:p-6 shadow-[0_24px_70px_-55px_rgba(0,0,0,0.45)]">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">
              {t("about.values.title")}
            </p>
            <ul className="mt-6 space-y-4">
              {values.map((value) => (
                <li key={value} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm font-semibold text-foreground">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
