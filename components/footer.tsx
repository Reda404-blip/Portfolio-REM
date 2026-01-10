"use client"

import { Github, Mail, Phone, MapPin, Linkedin, ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/app/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Footer() {
  const { t } = useLanguage()
  const { ref: contactRef, isVisible: contactVisible } = useScrollAnimation()
  const { ref: socialRef, isVisible: socialVisible } = useScrollAnimation()

  return (
    <footer id="contact" className="relative border-t border-border bg-secondary/30 pt-32 pb-12 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-1/2 h-96 bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse-subtle" />

      <div className="max-w-7xl mx-auto px-6 space-y-24">
        {/* Main CTA Section */}
        <div
          ref={contactRef}
          className={`grid lg:grid-cols-2 gap-16 items-center ${contactVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className={`space-y-8 ${contactVisible ? "animate-fade-in-left" : ""}`}>
            <Badge
              variant="outline"
              className="text-primary border-primary/20 bg-primary/5 uppercase tracking-[0.2em] px-4 animate-scale-in"
            >
              {t("footer.badge")}
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-tight">{t("footer.title")}</h2>
            <p className="text-muted-foreground font-medium leading-relaxed max-w-lg">{t("footer.description")}</p>
          </div>

          <div
            className={`glass rounded-3xl border border-border p-8 space-y-6 group hover:border-primary/40 transition-smooth hover:shadow-2xl hover:shadow-primary/10 ${contactVisible ? "animate-fade-in-right" : ""}`}
          >
            <div className="flex items-center gap-4 group/item transition-smooth hover:translate-x-2">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center transition-smooth group-hover/item:bg-primary/20 group-hover/item:scale-110">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground">
                  {t("footer.email.label")}
                </p>
                <a
                  href="mailto:elmaaroufireda@ump.ac.ma"
                  className="text-foreground font-bold hover:text-primary transition-colors"
                >
                  elmaaroufireda@ump.ac.ma
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group/item transition-smooth hover:translate-x-2">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center transition-smooth group-hover/item:bg-primary/20 group-hover/item:scale-110">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground">
                  {t("footer.phone.label")}
                </p>
                <a href="tel:+212602574033" className="text-foreground font-bold hover:text-primary transition-colors">
                  +212 602 574 033
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group/item transition-smooth hover:translate-x-2">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center transition-smooth group-hover/item:bg-primary/20 group-hover/item:scale-110">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground">
                  {t("footer.location.label")}
                </p>
                <p className="text-foreground font-bold">{t("footer.location.value")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Engagement */}
        <div
          ref={socialRef}
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-border ${socialVisible ? "stagger-animate" : ""}`}
        >
          <a
            href="https://github.com/Reda404-blip"
            target="_blank"
            rel="noopener noreferrer"
            className={`group p-6 rounded-2xl border border-border hover:border-primary/40 transition-smooth bg-card hover:bg-primary/5 hover:shadow-2xl hover:shadow-primary/10 hover:scale-105 ${socialVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <div className="flex items-center justify-between mb-4">
              <Github className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            <p className="font-bold text-sm">{t("footer.github")}</p>
            <p className="text-xs text-muted-foreground font-semibold">{t("footer.github.desc")}</p>
          </a>

          <a
            href="https://www.linkedin.com/in/reda-el-maaroufi"
            target="_blank"
            rel="noopener noreferrer"
            className={`group p-6 rounded-2xl border border-border hover:border-primary/40 transition-smooth bg-card hover:bg-primary/5 hover:shadow-2xl hover:shadow-primary/10 hover:scale-105 ${socialVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: socialVisible ? "0.05s" : "0s" }}
          >
            <div className="flex items-center justify-between mb-4">
              <Linkedin className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            <p className="font-bold text-sm">{t("footer.linkedin")}</p>
            <p className="text-xs text-muted-foreground font-semibold">{t("footer.linkedin.desc")}</p>
          </a>

          <div
            className={`p-6 rounded-2xl border border-border bg-card transition-smooth hover:border-primary/40 hover:bg-primary/5 hover:scale-105 ${socialVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: socialVisible ? "0.1s" : "0s" }}
          >
            <div className="mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-smooth hover:scale-110">
                <span className="text-primary font-black text-xs">{t("footer.enactus.initials")}</span>
              </div>
            </div>
            <p className="font-bold text-sm">{t("footer.enactus")}</p>
            <p className="text-xs text-muted-foreground font-semibold">{t("footer.enactus.desc")}</p>
          </div>

          <div
            className={`p-6 rounded-2xl border border-border bg-card transition-smooth hover:border-primary/40 hover:bg-primary/5 hover:scale-105 ${socialVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: socialVisible ? "0.15s" : "0s" }}
          >
            <div className="mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-smooth hover:scale-110">
                <span className="text-primary font-black text-xs">{t("footer.ryzen.initials")}</span>
              </div>
            </div>
            <p className="font-bold text-sm">{t("footer.ryzen")}</p>
            <p className="text-xs text-muted-foreground font-semibold">{t("footer.ryzen.desc")}</p>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div
          className={`flex flex-col md:flex-row justify-between items-center pt-12 border-t border-border gap-6 ${contactVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <p className="text-xs text-muted-foreground font-semibold uppercase tracking-widest">
            {t("footer.copyright")}
          </p>
          <div />
        </div>
      </div>
    </footer>
  )
}
