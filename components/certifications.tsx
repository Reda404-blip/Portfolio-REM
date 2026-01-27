"use client"

import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/app/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Certifications() {
  const { t } = useLanguage()
  const { ref: certRef, isVisible: certVisible } = useScrollAnimation()

  const certifications = [
    {
      title: t("certs.1.title"),
      provider: t("certs.1.provider"),
      providerShort: t("certs.1.provider.short"),
      date: t("certs.1.date"),
      logo: "/images/py.png",
      skills: [t("certs.1.skill.1"), t("certs.1.skill.2"), t("certs.1.skill.3")],
    },
    {
      title: t("certs.2.title"),
      provider: t("certs.2.provider"),
      providerShort: t("certs.2.provider.short"),
      date: t("certs.2.date"),
      logo: "/images/sec.png",
      skills: [t("certs.2.skill.1"), t("certs.2.skill.2")],
    },
    {
      title: t("certs.3.title"),
      provider: t("certs.3.provider"),
      providerShort: t("certs.3.provider.short"),
      date: t("certs.3.date"),
      logo: "/images/htm.png",
      skills: [t("certs.3.skill.1"), t("certs.3.skill.2")],
    },
    {
      title: t("certs.4.title"),
      provider: t("certs.4.provider"),
      providerShort: t("certs.4.provider.short"),
      date: t("certs.4.date"),
      logo: "/images/a.png",
      skills: [],
    },
  ]

  return (
    <section id="certifications" className="py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] items-end animate-fade-in-up">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">
              {t("certs.subtitle")}
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">{t("certs.title")}</h2>
          </div>
          <div />
        </div>

        <div ref={certRef} className={`space-y-5 ${certVisible ? "stagger-animate" : ""}`}>
          {certifications.map((cert, index) => (
            <div
              key={`${cert.title}-${index}`}
              className={`rounded-3xl border border-border bg-card/90 p-6 transition-smooth hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 ${certVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: certVisible ? `${index * 0.05}s` : "0s" }}
            >
              <div className="grid gap-4 md:grid-cols-[auto_1fr_auto] items-center">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-[11px] uppercase tracking-widest overflow-hidden">
                  <img src={cert.logo} alt={cert.provider} className="h-10 w-10 object-contain" />
                </div>
                <div>
                  <p className="text-lg font-black tracking-tight">{cert.title}</p>
                  <p className="text-sm text-muted-foreground">{cert.provider}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-semibold text-muted-foreground">{cert.date}</p>
                </div>
              </div>

              {cert.skills.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-[10px] uppercase font-semibold tracking-widest"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
