"use client"

import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/app/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Quote } from "lucide-react"

export function Testimonials() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()

  const testimonials = [
    {
      quote: t("testimonials.items.1.quote"),
      name: t("testimonials.items.1.name"),
      role: t("testimonials.items.1.role"),
    },
    {
      quote: t("testimonials.items.2.quote"),
      name: t("testimonials.items.2.name"),
      role: t("testimonials.items.2.role"),
    },
    {
      quote: t("testimonials.items.3.quote"),
      name: t("testimonials.items.3.name"),
      role: t("testimonials.items.3.role"),
    },
  ]

  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="space-y-4 animate-fade-in-up">
          <Badge
            variant="outline"
            className="text-primary border-primary/20 bg-primary/5 uppercase tracking-[0.2em] px-4 animate-scale-in"
          >
            {t("testimonials.badge")}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">{t("testimonials.title")}</h2>
          <p className="text-sm text-muted-foreground max-w-2xl">{t("testimonials.description")}</p>
        </div>

        <div ref={ref} className={`grid gap-6 md:grid-cols-3 ${isVisible ? "stagger-animate" : ""}`}>
          {testimonials.map((item, index) => (
            <div
              key={item.name}
              className={`rounded-3xl border border-border bg-card/90 p-6 space-y-4 transition-smooth hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: isVisible ? `${index * 0.05}s` : "0s" }}
            >
              <div className="h-10 w-10 rounded-2xl border border-primary/30 bg-primary/10 text-primary flex items-center justify-center">
                <Quote className="h-5 w-5" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.quote}</p>
              <div>
                <p className="text-sm font-semibold text-foreground">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
