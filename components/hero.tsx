"use client"

import { ArrowUpRight, CheckCircle2, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useLanguage } from "@/app/language-context"
import { PdfPreview } from "@/components/pdf-preview"

export function Hero() {
  const { t } = useLanguage()
  const cvPdfUrl = "/Curriculum%20Vitae%20Reda%20El%20Maaroufi.pdf"
  const titleParts = t("hero.title").split(" | ")

  return (
    <section className="relative pt-44 pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10 animate-pulse-subtle" />
      <div
        className="absolute top-40 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse-subtle"
        style={{ animationDelay: "0.3s" }}
      />

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
              <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] text-foreground">
                {titleParts.length >= 3 ? (
                  <>
                    <span className="block text-5xl md:text-7xl text-foreground">
                      <span className="relative inline-flex items-center">
                        <span className="absolute -inset-x-2 -inset-y-1 rounded-full bg-primary/10 blur-md" />
                        <span className="relative bg-gradient-to-r from-primary via-foreground to-foreground bg-clip-text text-transparent">
                          {titleParts[0]}
                        </span>
                      </span>
                    </span>
                    <span className="mt-4 inline-flex items-center gap-3 text-sm uppercase tracking-[0.35em] font-semibold">
                      <span className="h-[1px] w-8 bg-primary/60" />
                      <span className="text-muted-foreground/80">{titleParts[1]}</span>
                      <span className="text-primary">{titleParts[2]}</span>
                    </span>
                  </>
                ) : (
                  <span className="block">{t("hero.title")}</span>
                )}
              </h1>
            </div>

            <div
              className="max-w-2xl rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background/80 to-primary/10 p-7 text-sm text-muted-foreground leading-relaxed shadow-[0_40px_100px_-60px_rgba(0,0,0,0.4)] backdrop-blur-sm animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="absolute -top-10 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-2xl" />
              <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-primary/40 via-transparent to-transparent" />
              <div className="flex items-center justify-between gap-4 mb-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground font-semibold">
                    {t("hero.about.title")}
                  </p>
                  <p className="text-base font-semibold text-foreground mt-2">
                    {t("hero.title.subtitle")}
                  </p>
                </div>
                <div className="h-11 w-11 rounded-2xl bg-primary/15 border border-primary/20 flex items-center justify-center text-primary text-[11px] font-bold tracking-widest">
                  {t("hero.about.badge")}
                </div>
              </div>
              <p className="text-foreground/70">{t("hero.about.text")}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {[t("hero.about.tag.1"), t("hero.about.tag.2"), t("hero.about.tag.3")].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 stagger-animate" style={{ animationDelay: "0.3s" }}>
              <div className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-muted-foreground font-semibold">
                <span className="h-[1px] w-10 bg-primary/40" />
                {t("hero.competencies.label")}
              </div>
              <div className="mt-4 rounded-2xl border border-border/60 bg-background/60 p-5 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.35)] backdrop-blur-sm">
                <ul className="space-y-3 text-sm md:text-base text-foreground stagger-animate">
                  {[1, 2, 3, 4].map((index) => (
                    <li
                      key={index}
                      className="competency-card group relative rounded-xl border border-border/60 bg-gradient-to-r from-primary/5 via-transparent to-transparent p-3 pl-10 transition-smooth hover:border-primary/40 hover:translate-x-1 hover:shadow-lg hover:shadow-primary/10"
                    >
                      <span className="absolute left-4 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-primary animate-pulse-subtle" />
                      <span className="absolute left-2 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-primary/10 blur-md opacity-0 transition-opacity group-hover:opacity-100" />
                      <CheckCircle2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary transition-transform group-hover:scale-110" />
                      <span className="font-medium">{t(`hero.competencies.${index}`)}</span>
                    </li>
                  ))}
                </ul>
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
