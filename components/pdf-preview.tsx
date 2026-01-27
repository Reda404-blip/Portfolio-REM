"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/app/language-context"

interface PdfPreviewProps {
  url: string
  className?: string
}

export function PdfPreview({ url, className }: PdfPreviewProps) {
  const { t } = useLanguage()
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let isMounted = true

    const renderPdf = async () => {
      try {
        const pdfjs = await import("pdfjs-dist")
        pdfjs.GlobalWorkerOptions.workerSrc =
          "https://cdn.jsdelivr.net/npm/pdfjs-dist@5.4.530/build/pdf.worker.min.mjs"

        const loadingTask = pdfjs.getDocument(url)
        const pdf = await loadingTask.promise
        const page = await pdf.getPage(1)

        const viewport = page.getViewport({ scale: 1.4 })
        const canvas = canvasRef.current
        if (!canvas) return
        const context = canvas.getContext("2d")
        if (!context) return

        const outputScale = window.devicePixelRatio || 1
        canvas.width = Math.floor(viewport.width * outputScale)
        canvas.height = Math.floor(viewport.height * outputScale)
        canvas.style.width = `${viewport.width}px`
        canvas.style.height = `${viewport.height}px`

        const renderContext = {
          canvasContext: context,
          transform: outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : undefined,
          viewport,
        }

        await page.render(renderContext).promise
      } catch (error) {
        if (isMounted) {
          setFailed(true)
        }
      }
    }

    renderPdf()

    return () => {
      isMounted = false
    }
  }, [url])

  return (
    <div className={className}>
      <div className="relative w-full h-full flex items-center justify-center bg-background/70">
        {failed ? (
          <a
            href={url}
            className="text-sm font-semibold underline underline-offset-4"
            target="_blank"
            rel="noreferrer"
          >
            {t("hero.cta.cv")}
          </a>
        ) : (
          <>
            <canvas ref={canvasRef} className="max-h-full max-w-full" />
            <div className="absolute bottom-4 right-4 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-bold text-primary">
              {t("hero.cta.cv")}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
