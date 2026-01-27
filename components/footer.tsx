"use client"

import type React from "react"
import { useState } from "react"
import { Github, Mail, Phone, MapPin, Linkedin, ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/app/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Footer() {
  const { t } = useLanguage()
  const { ref: contactRef, isVisible: contactVisible } = useScrollAnimation()
  const { ref: linksRef, isVisible: linksVisible } = useScrollAnimation()
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({})
  const [status, setStatus] = useState<"idle" | "error" | "success" | "loading">("idle")
  const [statusMessage, setStatusMessage] = useState<string | null>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    const nextErrors: { name?: string; email?: string; message?: string } = {}
    if (!formData.name.trim()) {
      nextErrors.name = t("contact.form.validation.name")
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = t("contact.form.validation.email")
    }
    if (formData.message.trim().length < 10) {
      nextErrors.message = t("contact.form.validation.message")
    }
    return nextErrors
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const validationErrors = validateForm()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) {
      setStatus("error")
      setStatusMessage(t("contact.form.error"))
      return
    }
    setStatus("loading")
    setStatusMessage(t("contact.form.sending"))
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (!response.ok) {
        throw new Error("Request failed")
      }
      setFormData({ name: "", email: "", message: "" })
      setErrors({})
      setStatus("success")
      setStatusMessage(t("contact.form.success"))
    } catch {
      setStatus("error")
      setStatusMessage(t("contact.form.errorSend"))
    }
  }

  return (
    <footer id="contact" className="relative border-t border-border bg-secondary/30 pt-32 pb-12 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-1/2 h-96 bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse-subtle" />

      <div className="max-w-7xl mx-auto px-6 space-y-20">
        <div
          ref={contactRef}
          className={`grid lg:grid-cols-2 gap-12 items-start ${contactVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="space-y-6">
            <Badge
              variant="outline"
              className="text-primary border-primary/20 bg-primary/5 uppercase tracking-[0.2em] px-4 animate-scale-in"
            >
              {t("contact.badge")}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">{t("contact.title")}</h2>
            <p className="text-muted-foreground font-medium leading-relaxed max-w-lg">
              {t("contact.description")}
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground">
                    {t("contact.info.email.label")}
                  </p>
                  <a
                    href="mailto:contact@elmaaroufireda.org"
                    className="text-foreground font-semibold hover:text-primary transition-colors"
                  >
                    contact@elmaaroufireda.org
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground">
                    {t("contact.info.phone.label")}
                  </p>
                  <a href="tel:+212602574033" className="text-foreground font-semibold hover:text-primary">
                    +212 602 574 033
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground">
                    {t("contact.info.location.label")}
                  </p>
                  <p className="text-foreground font-semibold">{t("contact.info.location.value")}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://github.com/Reda404-blip"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-smooth hover:border-primary/40 hover:text-primary"
              >
                <Github className="h-4 w-4" /> {t("contact.links.github")}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/reda-el-maaroufi"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-smooth hover:border-primary/40 hover:text-primary"
              >
                <Linkedin className="h-4 w-4" /> {t("contact.links.linkedin")}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className={`rounded-3xl border border-border bg-card/90 p-8 space-y-5 transition-smooth ${contactVisible ? "animate-fade-in-right" : ""}`}
            noValidate
          >
            <h3 className="text-xl font-bold">{t("contact.form.title")}</h3>

            <div className="space-y-2">
              <Label htmlFor="name">{t("contact.form.name.label")}</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("contact.form.name.placeholder")}
                aria-invalid={Boolean(errors.name)}
                disabled={status === "loading"}
                required
              />
              {errors.name ? <p className="text-xs text-destructive">{errors.name}</p> : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{t("contact.form.email.label")}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("contact.form.email.placeholder")}
                aria-invalid={Boolean(errors.email)}
                disabled={status === "loading"}
                required
              />
              {errors.email ? <p className="text-xs text-destructive">{errors.email}</p> : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">{t("contact.form.message.label")}</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("contact.form.message.placeholder")}
                aria-invalid={Boolean(errors.message)}
                disabled={status === "loading"}
                required
                rows={5}
              />
              {errors.message ? <p className="text-xs text-destructive">{errors.message}</p> : null}
            </div>

            <div className="flex items-center justify-between gap-4 flex-wrap">
              <Button
                type="submit"
                className={`rounded-full px-6 send-button ${status === "loading" ? "is-sending" : ""} ${
                  status === "success" ? "is-success" : ""
                }`}
                disabled={status === "loading"}
              >
                <span className="relative z-10">
                  {status === "loading" ? t("contact.form.sending") : t("contact.form.submit")}
                </span>
              </Button>
              <span className="text-xs text-muted-foreground">{t("contact.form.response")}</span>
            </div>

            {status !== "idle" ? (
              <p
                className={`text-xs ${
                  status === "success" ? "text-primary" : status === "loading" ? "text-muted-foreground" : "text-destructive"
                }`}
                role="status"
                aria-live="polite"
              >
                {statusMessage ||
                  (status === "success"
                    ? t("contact.form.success")
                    : status === "loading"
                      ? t("contact.form.sending")
                      : t("contact.form.error"))}
              </p>
            ) : null}
          </form>
        </div>

        <div
          ref={linksRef}
          className={`flex flex-col md:flex-row justify-between items-center pt-12 border-t border-border gap-6 ${linksVisible ? "animate-fade-in-up" : "opacity-0"}`}
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
