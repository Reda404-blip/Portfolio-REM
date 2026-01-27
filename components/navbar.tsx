"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/app/language-context"

export function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: "#home", label: t("nav.home") },
    { href: "#about", label: t("nav.about") },
    { href: "#experience", label: t("nav.experience") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#contact", label: t("nav.contact") },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/70 backdrop-blur-xl animate-fade-in-down">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 group">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center transition-smooth group-hover:scale-110 overflow-hidden animate-wow-drop"
            style={{ animationDelay: "0.05s" }}
          >
            <img src="/images/logo.png" alt={t("nav.name")} className="h-10 w-10 object-contain" />
          </div>
          <div className="flex flex-col">
            <span
              className="font-bold text-sm tracking-tight transition-smooth group-hover:text-primary animate-wow-drop"
              style={{ animationDelay: "0.12s" }}
            >
              {t("nav.name")}
            </span>
            <span
              className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium animate-wow-drop"
              style={{ animationDelay: "0.18s" }}
            >
              {t("nav.finance")}
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-smooth hover:tracking-[0.3em] animate-wow-drop"
              style={{ animationDelay: `${0.24 + index * 0.06}s` }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 bg-secondary/30 rounded-full p-1 border border-border">
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest transition-smooth animate-wow-drop ${
                language === "en"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              style={{ animationDelay: "0.7s" }}
            >
              {t("nav.lang.en")}
            </button>
            <button
              onClick={() => setLanguage("fr")}
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest transition-smooth animate-wow-drop ${
                language === "fr"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              style={{ animationDelay: "0.76s" }}
            >
              {t("nav.lang.fr")}
            </button>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label={t("nav.menu.open")}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="md:hidden h-10 w-10 rounded-full border border-border bg-background/80 flex items-center justify-center shadow-sm transition-smooth hover:border-primary/40 hover:shadow-md animate-wow-drop"
            style={{ animationDelay: "0.7s" }}
          >
            <Menu className="h-5 w-5 text-foreground" />
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            id="mobile-menu"
            className="absolute right-0 top-0 h-full w-72 bg-background border-l border-border shadow-2xl p-6 flex flex-col"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">
                {t("nav.menu.title")}
              </p>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label={t("nav.menu.close")}
                className="h-10 w-10 rounded-full border border-border bg-secondary/40 flex items-center justify-center"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-10 flex flex-col gap-5 text-sm font-semibold uppercase tracking-[0.2em] stagger-drop">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-auto pt-8 border-t border-border">
              <div className="flex items-center gap-2 bg-secondary/30 rounded-full p-1 border border-border w-fit">
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
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  )
}
