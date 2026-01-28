"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/app/language-context"

export function Hero() {
  const { t } = useLanguage()
  const cvPdfUrl = "/assets/cv-reda-el-maaroufi.pdf"
  const description = t("hero.description")
  const descriptionLines = description
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
  const bulletLines = descriptionLines.filter((line) => line.startsWith("- "))
  const nonBulletLines = descriptionLines.filter((line) => !line.startsWith("- "))
  const headerLine = nonBulletLines[0]
  const closingLine = nonBulletLines.length > 1 ? nonBulletLines[nonBulletLines.length - 1] : undefined
  const hasBullets = bulletLines.length > 0

  return (
    <section id="home" className="relative pt-20 pb-12 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10 animate-pulse-subtle" />
      <div
        className="absolute top-40 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse-subtle"
        style={{ animationDelay: "0.3s" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(212,175,55,0.08),transparent_40%)] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 lg:col-span-7 space-y-5 sm:space-y-8 text-center lg:text-left">
            <Badge
              variant="secondary"
              className="px-4 py-1.5 rounded-full border-primary/20 text-primary bg-primary/5 text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.2em] font-bold animate-scale-in mx-auto lg:mx-0 w-fit"
            >
              {t("hero.badge")}
            </Badge>

            <div className="space-y-4 animate-fade-in-up">
              <h1 className="text-[22px] sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-foreground">
                <span className="relative inline-block">
                  <span className="absolute -inset-x-6 -inset-y-3 rounded-full bg-primary/10 blur-2xl" />
                  <span className="relative bg-gradient-to-r from-primary via-foreground to-foreground bg-clip-text text-transparent">
                    {t("hero.title")}
                  </span>
                </span>
              </h1>
              <p className="text-sm sm:text-lg text-muted-foreground font-medium max-w-[28rem] mx-auto lg:mx-0">
                {t("hero.subtitle")}
              </p>
            </div>

            {hasBullets ? (
              <div className="max-w-2xl rounded-2xl border border-border/60 bg-card/70 p-4 sm:p-5 shadow-[0_18px_60px_-48px_rgba(0,0,0,0.5)] mx-auto lg:mx-0 text-left">
                {headerLine ? (
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                    {headerLine.replace(/:\s*$/, "")}
                  </p>
                ) : null}
                <ul className="mt-4 space-y-3">
                  {bulletLines.map((line) => {
                    const text = line.replace(/^-+\s*/, "")
                    return (
                      <li key={line} className="flex gap-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary/70 shadow-[0_0_12px_rgba(212,175,55,0.45)]" />
                        <span>{text}</span>
                      </li>
                    )
                  })}
                </ul>
                {closingLine ? (
                  <p className="mt-4 border-t border-border/50 pt-4 text-sm sm:text-base text-foreground/90 leading-relaxed">
                    {closingLine}
                  </p>
                ) : null}
              </div>
            ) : (
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl whitespace-pre-line">
                {description}
              </p>
            )}

            <div className="flex justify-center lg:justify-start">
              <Button asChild size="lg" className="rounded-full px-6 sm:px-7 font-semibold shadow-xl shadow-primary/20">
                <a href={cvPdfUrl} download>
                  {t("hero.cta.cv")}
                </a>
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-5 relative animate-fade-in-right" style={{ animationDelay: "0.2s" }}>
            <div className="relative mx-auto max-w-[160px] sm:max-w-[220px] lg:mx-auto lg:max-w-[280px] rounded-[28px] sm:rounded-[32px] border border-border/70 bg-card/80 p-3 sm:p-4 shadow-[0_40px_120px_-90px_rgba(0,0,0,0.5)]">
              <div className="absolute -top-10 -right-12 h-40 w-40 rounded-full bg-primary/15 blur-3xl" />
              <div className="relative overflow-hidden rounded-[22px] sm:rounded-[24px]">
                <img src="/placeholder-user.jpg" alt={t("hero.photo.alt")} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
