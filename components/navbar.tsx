"use client"

import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useLanguage } from "@/app/language-context"
import { PdfPreview } from "@/components/pdf-preview"

export function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const cvPdfUrl = "/Curriculum%20Vitae%20Reda%20El%20Maaroufi.pdf"

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/60 backdrop-blur-xl animate-fade-in-down">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-smooth group-hover:scale-110 overflow-hidden">
            <img src="/images/logo.png" alt={t("nav.name")} className="h-10 w-10 object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight transition-smooth group-hover:text-primary">
              {t("nav.name")}
            </span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">
              {t("nav.finance")}
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground stagger-animate">
          <Link href="#about" className="hover:text-primary transition-smooth hover:tracking-[0.3em]">
            {t("nav.about")}
          </Link>
          <Link href="#experience" className="hover:text-primary transition-smooth hover:tracking-[0.3em]">
            {t("nav.experience")}
          </Link>
          <Link href="#projects" className="hover:text-primary transition-smooth hover:tracking-[0.3em]">
            {t("nav.projects")}
          </Link>
          <Link href="#contact" className="hover:text-primary transition-smooth hover:tracking-[0.3em]">
            {t("nav.contact")}
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-secondary/30 rounded-full p-1 border border-border">
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest transition-smooth ${
                language === "en"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("nav.lang.en")}
            </button>
            <button
              onClick={() => setLanguage("fr")}
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest transition-smooth ${
                language === "fr"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("nav.lang.fr")}
            </button>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="default"
                size="sm"
                className="rounded-full px-6 font-semibold shadow-xl shadow-primary/20 transition-smooth hover:scale-105 hover:shadow-primary/40"
              >
                {t("nav.resume")}
              </Button>
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
        </div>
      </div>
    </nav>
  )
}
