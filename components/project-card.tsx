"use client"

import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { XIcon } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  imageFit?: "cover" | "contain"
  imagePosition?: string
  imageAspect?: string
  roleLabel: string
  roleValue: string
  resultLabel: string
  resultValue: string
  stackLabel: string
  stack: string[]
  ctaLabel: string
}

export function ProjectCard({
  title,
  description,
  image,
  link,
  imageFit = "cover",
  imagePosition = "object-center",
  imageAspect = "aspect-[16/10]",
  roleLabel,
  roleValue,
  resultLabel,
  resultValue,
  stackLabel,
  stack,
  ctaLabel,
}: ProjectCardProps) {
  const imageFitClass = imageFit === "contain" ? "object-contain" : "object-cover"
  const imageBgClass = imageFit === "contain" ? "bg-muted/10" : ""

  return (
    <div className="group flex h-full flex-col rounded-3xl border border-border bg-card/90 overflow-hidden transition-smooth hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10">
      <Dialog>
        <DialogTrigger asChild>
          <button
            type="button"
            className={`relative ${imageAspect} w-full shrink-0 overflow-hidden text-left ${imageBgClass}`}
            aria-label={`Open ${title} image`}
          >
            <img
              src={image}
              alt={title}
              className={`h-full w-full ${imageFitClass} ${imagePosition} transition-transform duration-700 group-hover:scale-105`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </button>
        </DialogTrigger>
        <DialogContent
          showCloseButton={false}
          className="fixed inset-0 h-screen w-screen max-w-none sm:max-w-none max-h-none sm:max-h-none translate-x-0 translate-y-0 p-0 border-0 shadow-none rounded-none bg-transparent"
        >
          <DialogTitle className="sr-only">{title}</DialogTitle>
          <div className="relative h-full w-full overflow-hidden bg-black/80">
            <div
              className="absolute inset-0 bg-cover bg-center blur-2xl opacity-30 scale-110"
              style={{ backgroundImage: `url(${image})` }}
              aria-hidden="true"
            />
            <DialogClose
              className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white shadow-lg transition hover:bg-black/85 focus:outline-none focus:ring-2 focus:ring-white/70"
              aria-label="Close full screen"
            >
              <XIcon className="h-5 w-5" />
            </DialogClose>
            <div className="relative z-10 flex h-full w-full items-center justify-center p-4 sm:p-8">
              <img
                src={image}
                alt={title}
                className="max-h-full max-w-full object-contain rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-black tracking-tight group-hover:text-primary transition-colors">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-semibold">
              {roleLabel}
            </p>
            <p className="mt-2 text-sm text-foreground/90 font-medium">{roleValue}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-semibold">
              {resultLabel}
            </p>
            <p className="mt-2 text-sm text-foreground/90 font-medium">{resultValue}</p>
          </div>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-semibold">
            {stackLabel}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
          {stack.map((item) => (
            <Badge key={item} variant="secondary" className="text-[10px] uppercase tracking-widest font-semibold">
              {item}
            </Badge>
          ))}
          </div>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
        >
          {ctaLabel} <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}
