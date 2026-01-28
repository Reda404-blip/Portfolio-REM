"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Award, Briefcase, FolderKanban, Home, Mail, UserRound, Wrench } from "lucide-react"
import { useLanguage } from "@/app/language-context"

export function ScrollGuide() {
  const { t } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isHidden, setIsHidden] = useState(false)
  const entryMap = useRef<Map<string, IntersectionObserverEntry>>(new Map())

  const sections = useMemo(
    () => [
      { id: "home", label: t("nav.home"), icon: Home },
      { id: "about", label: t("nav.about"), icon: UserRound },
      { id: "experience", label: t("nav.experience"), icon: Briefcase },
      { id: "projects", label: t("nav.projects"), icon: FolderKanban },
      { id: "skills", label: t("nav.skills"), icon: Wrench },
      { id: "certifications", label: t("nav.certifications"), icon: Award },
      { id: "contact", label: t("nav.contact"), icon: Mail },
    ],
    [t],
  )

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (elements.length === 0) {
      entryMap.current.clear()
      return
    }

    entryMap.current.clear()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entryMap.current.set(entry.target.id, entry)
        })
        const visible = Array.from(entryMap.current.values())
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top > b.boundingClientRect.top ? 1 : -1))
        if (visible.length > 0) {
          const id = visible[0].target.id
          const nextIndex = sections.findIndex((section) => section.id === id)
          if (nextIndex >= 0) {
            setActiveIndex(nextIndex)
          }
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.1, 0.5, 0.9] },
    )

    elements.forEach((el) => observer.observe(el))
    return () => {
      observer.disconnect()
      entryMap.current.clear()
    }
  }, [sections])

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      const nextProgress = max > 0 ? Math.min(1, Math.max(0, doc.scrollTop / max)) : 0
      setProgress(nextProgress)

      if (sections.length === 0) {
        return
      }

      if (doc.scrollTop <= 2) {
        setActiveIndex(0)
        setIsHidden(false)
        return
      }

      const reachedEnd = doc.scrollTop + doc.clientHeight >= doc.scrollHeight - 16
      setIsHidden(reachedEnd)
      if (reachedEnd) {
        setActiveIndex(sections.length - 1)
      }
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [sections.length])

  const current = sections[activeIndex] ?? sections[0]
  const next = sections.length > 0 ? sections[(activeIndex + 1) % sections.length] : undefined
  const isLast = Boolean(current && sections.length > 0 && current.id === sections[sections.length - 1].id)
  const shouldHide = isHidden || isLast
  const Icon = !isLast ? next?.icon : undefined
  const nextLabel = !isLast ? next?.label : ""

  return (
    <div className={`scroll-guide ${shouldHide ? "scroll-guide--hidden" : ""}`}>
      <div className="scroll-guide__track" aria-hidden="true">
        <div className="scroll-guide__fill" style={{ height: `${progress * 100}%` }} />
      </div>
      {shouldHide ? null : (
        <a
          href={`#${next?.id ?? "home"}`}
          className={`scroll-guide__pill ${isLast ? "scroll-guide__pill--end" : ""}`}
          aria-label={isLast ? "Back to top" : `Scroll to ${next?.label ?? ""}`}
        >
          <span className="scroll-guide__icon-wrap" aria-hidden="true">
            {Icon ? <Icon className="scroll-guide__icon" /> : null}
          </span>
          <span className="scroll-guide__text">
            <span className="scroll-guide__eyebrow">Next</span>
            <span className="scroll-guide__label">{nextLabel}</span>
          </span>
          <span className="scroll-guide__arrow" aria-hidden="true" />
        </a>
      )}
    </div>
  )
}
