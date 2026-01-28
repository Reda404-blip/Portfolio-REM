"use client"

import { useLanguage } from "@/app/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ProjectCard } from "@/components/project-card"

export function TerminalProjects() {
  const { t } = useLanguage()
  const { ref: projectRef, isVisible: projectVisible } = useScrollAnimation()

  const projects = [
    {
      title: t("projects.list.1.title"),
      description: t("projects.list.1.description"),
      role: t("projects.list.1.role"),
      result: t("projects.list.1.result"),
      stack: [t("projects.list.1.tags.1"), t("projects.list.1.tags.2"), t("projects.list.1.tags.3")],
      image: "/LR.png",
      imageFit: "contain",
      link: "https://github.com/Reda404-blip/LumiRoster",
    },
    {
      title: t("projects.list.2.title"),
      description: t("projects.list.2.description"),
      role: t("projects.list.2.role"),
      result: t("projects.list.2.result"),
      stack: [t("projects.list.2.tags.1"), t("projects.list.2.tags.2"), t("projects.list.2.tags.3")],
      image: "/FI.jpg",
      imageFit: "contain",
      link: "https://github.com/Reda404-blip/FINOPS-INTELLIGENCE",
    },
    {
      title: t("projects.list.3.title"),
      description: t("projects.list.3.description"),
      role: t("projects.list.3.role"),
      result: t("projects.list.3.result"),
      stack: [t("projects.list.3.tags.1"), t("projects.list.3.tags.2"), t("projects.list.3.tags.3")],
      image: "/DM.png",
      imageFit: "cover",
      link: "https://github.com/Reda404-blip/DebtMate",
    },
  ]

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12">
        <div className="space-y-4 animate-fade-in-up">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">
            {t("projects.badge")}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">{t("projects.title")}</h2>
          <p className="text-muted-foreground text-sm font-medium leading-relaxed max-w-2xl">
            {t("projects.description")}
          </p>
        </div>

        <div
          ref={projectRef}
          className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch ${projectVisible ? "stagger-animate" : ""}`}
        >
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`${projectVisible ? "animate-fade-in-up" : "opacity-0"} h-full`}
              style={{ animationDelay: projectVisible ? `${index * 0.05}s` : "0s" }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                imageFit={project.imageFit}
                imageAspect={project.imageAspect}
                link={project.link}
                roleLabel={t("projects.card.role")}
                roleValue={project.role}
                resultLabel={t("projects.card.result")}
                resultValue={project.result}
                stackLabel={t("projects.card.stack")}
                stack={project.stack}
                ctaLabel={t("projects.viewRepo")}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
