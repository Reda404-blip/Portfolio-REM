"use client"

import { ArrowUpRight, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useLanguage } from "@/app/language-context"
import { PdfPreview } from "@/components/pdf-preview"

export function Hero() {
  const { t } = useLanguage()
  const cvPdfUrl = "/Curriculum%20Vitae%20Reda%20El%20Maaroufi.pdf"

  return (
    <section className="relative pt-44 pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10 animate-pulse-subtle" />
      <div
        className="absolute top-40 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse-subtle"
        style={{ animationDelay: "0.3s" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(212,175,55,0.08),transparent_40%)] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4 animate-fade-in-up">
              <Badge
                variant="secondary"
                className="px-4 py-1.5 rounded-full border-primary/20 text-primary bg-primary/5 text-[10px] uppercase tracking-[0.2em] font-bold animate-scale-in"
              >
                {t("hero.badge")}
              </Badge>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95] text-foreground">
                <span className="relative inline-block">
                  <span className="absolute -inset-x-6 -inset-y-3 rounded-full bg-primary/10 blur-2xl" />
                  <span className="relative bg-gradient-to-r from-primary via-foreground to-foreground bg-clip-text text-transparent">
                    {t("hero.title")}
                  </span>
                </span>
              </h1>
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.35em] font-semibold text-muted-foreground">
                <span>{t("hero.title.subtitle")}</span>
                <span className="h-1 w-1 rounded-full bg-primary/70" />
                <span className="text-primary">
                  {t("hero.year.value")} {t("hero.year.label")}
                </span>
              </div>
            </div>

            <div
              className="group max-w-2xl rounded-[44px] border border-border/60 bg-gradient-to-br from-background via-background/90 to-primary/15 p-8 md:p-10 text-sm text-muted-foreground leading-relaxed shadow-[0_50px_140px_-90px_rgba(0,0,0,0.5)] backdrop-blur-sm animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="absolute -top-24 -right-20 h-64 w-64 rounded-full bg-primary/14 blur-3xl" />
              <div className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(212,175,55,0.1),transparent_45%)]" />
              <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-primary/70 via-transparent to-transparent" />
              <div className="relative space-y-8">
                <div className="flex flex-wrap items-center gap-4">
                  <p className="text-[11px] uppercase tracking-[0.45em] text-muted-foreground font-semibold">
                    {t("hero.about.title")}
                  </p>
                  <span className="h-px w-12 bg-primary/70" />
                  <div className="rounded-full border border-primary/35 bg-primary/15 px-3 py-1 text-[10px] uppercase tracking-[0.35em] text-primary font-semibold">
                    {t("hero.about.badge")}
                  </div>
                </div>
                <div className="grid gap-10 md:grid-cols-[1.45fr_0.55fr]">
                  <div className="space-y-9">
                    <div className="border-l-2 border-primary/60 pl-5 space-y-3">
                      <p className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground font-semibold">
                        {t("hero.about.section.profile")}
                      </p>
                      <p className="text-2xl md:text-4xl font-semibold text-foreground/95 leading-[1.15]">
                        {t("hero.about.profile.lead")}
                      </p>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {t("hero.about.profile.detail")}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <p className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground font-semibold">
                        {t("hero.about.section.expertise")}
                      </p>
                      <div className="space-y-3 text-sm md:text-base text-muted-foreground">
                        {[1, 2, 3].map((index) => (
                          <div key={index} className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-primary/70" />
                            <span>{t(`hero.about.expertise.${index}`)}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {[t("hero.about.tag.1"), t("hero.about.tag.2"), t("hero.about.tag.3")].map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-primary/30 bg-primary/12 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-primary font-semibold transition-smooth hover:border-primary/50 hover:bg-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-3xl border border-border/60 bg-background/70 p-6 shadow-[0_24px_70px_-55px_rgba(0,0,0,0.45)]">
                      <p className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground font-semibold">
                        {t("hero.about.section.objective")}
                      </p>
                      <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                        {t("hero.about.objective.body")}
                      </p>
                    </div>
                  </div>
                  <div className="rounded-3xl border border-border/60 bg-background/70 p-6 shadow-[0_24px_70px_-55px_rgba(0,0,0,0.45)]">
                    <p className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground font-semibold">
                      {t("hero.about.section.highlights")}
                    </p>
                    <div className="mt-5 space-y-4">
                      {[1, 2, 3].map((index) => (
                        <div
                          key={index}
                          className="rounded-2xl border border-border/60 bg-gradient-to-br from-background/90 via-background/70 to-primary/10 p-4 transition-smooth hover:border-primary/50 hover:shadow-[0_18px_50px_-35px_rgba(212,175,55,0.45)]"
                        >
                          <div className="flex items-center gap-3">
                            <span className="h-2 w-2 rounded-full bg-primary/80 shadow-[0_0_12px_rgba(212,175,55,0.55)]" />
                            <p className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground font-semibold">
                              {t(`hero.about.meta.${index}.label`)}
                            </p>
                          </div>
                          <p className="mt-3 text-base md:text-lg font-semibold text-foreground leading-snug">
                            {t(`hero.about.meta.${index}.value`)}
                          </p>
                          <div className="mt-3 h-px w-12 bg-gradient-to-r from-primary/70 to-transparent" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 relative animate-fade-in-right" style={{ animationDelay: "0.2s" }}>
            <Dialog>
              <DialogTrigger asChild>
                <button
                  type="button"
                  aria-label={t("hero.cv.aria.open")}
                  className="relative z-10 aspect-[4/5] w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10 border border-border group transition-smooth cursor-zoom-in"
                >
                  <div className="w-full h-full">
                    <iframe
                      src={cvPdfUrl}
                      title={t("hero.cv.aria.label")}
                      className="hidden md:block w-full h-full scale-105 transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                    />
                    <PdfPreview url={cvPdfUrl} className="md:hidden w-full h-full" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                  <div className="absolute top-6 right-6 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold bg-primary/15 text-primary border border-primary/30 backdrop-blur-sm">
                    {t("hero.cv.open")}
                  </div>

                  <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-2xl border border-white/10 shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 animate-fade-in-up">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-lg">{t("hero.name")}</h3>
                        <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
                          {t("hero.title.subtitle")}
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 transition-smooth group-hover:bg-primary/40 group-hover:scale-110">
                        <ArrowUpRight className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  </div>
                </button>
              </DialogTrigger>

              <DialogContent
                showCloseButton={false}
                className="p-0 border-none max-w-none w-screen h-[100dvh] rounded-none bg-transparent data-[state=open]:slide-in-from-bottom-4 data-[state=closed]:slide-out-to-bottom-4"
              >
                <DialogTitle className="sr-only">{t("hero.cv.title")}</DialogTitle>
                <div className="relative w-full h-full bg-[#f3ede4]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f8f2ea,transparent_55%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,0,0,0.06),transparent_40%,rgba(0,0,0,0.08))]" />
                  <div className="absolute top-6 left-6 right-6 z-10 flex items-center justify-between">
                    <div className="text-[12px] uppercase tracking-[0.35em] text-black/60 font-semibold">
                      {t("hero.cv.title")}
                    </div>
                    <DialogClose asChild>
                      <Button
                        type="button"
                        variant="secondary"
                        size="icon"
                        className="rounded-full bg-black/10 text-black hover:bg-black/20 border border-black/20"
                      >
                        <X />
                      </Button>
                    </DialogClose>
                  </div>
                  <div className="relative z-0 w-full h-full flex items-center justify-center px-4 pt-16 pb-6 md:px-8 md:pt-20 md:pb-10">
                    <div className="w-full max-w-[1280px] h-[88vh] rounded-[32px] border border-black/10 bg-[#fbf7f0] shadow-[0_60px_160px_-60px_rgba(0,0,0,0.45)] overflow-hidden">
                      <iframe
                        src={cvPdfUrl}
                        title={t("hero.cv.aria.label")}
                        className="hidden md:block w-full h-full"
                      />
                      <PdfPreview url={cvPdfUrl} className="md:hidden w-full h-full" />
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <div className="absolute -top-6 -right-6 w-32 h-32 glass rounded-3xl border border-white/10 flex items-center justify-center animate-bounce-light z-20">
              <div className="text-center">
                <p className="text-2xl font-black text-primary">{t("hero.year.value")}</p>
                <p className="text-[10px] uppercase tracking-tighter font-bold text-muted-foreground">
                  {t("hero.year.label")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
