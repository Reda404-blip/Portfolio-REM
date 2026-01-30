"use client"

import { useEffect } from "react"

export function ScrollReveal() {
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const baseTargets = Array.from(document.querySelectorAll<HTMLElement>("main > section, main > footer"))
    const innerTargets = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main section .stagger-animate > *, main section .grid > *, main section ul > li, main section ol > li, main [data-scroll-reveal]",
      ),
    )
    const targets = Array.from(new Set([...baseTargets, ...innerTargets]))

    if (targets.length === 0) {
      return
    }

    targets.forEach((el) => el.setAttribute("data-scroll-reveal", "true"))

    if (prefersReducedMotion) {
      targets.forEach((el) => el.classList.add("scroll-reveal--visible"))
      return
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-reveal--visible")
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return null
}
