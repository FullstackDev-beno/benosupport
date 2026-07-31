"use client"

import { useEffect, useRef } from "react"

import { gsap } from "@/lib/gsap"
import type { CaseStudyMetric } from "@/lib/case-studies-data"

type ParsedMetric = {
  prefix: string
  amount: number
  suffix: string
  decimals: number
}

/** Splits "+50%" / "10K+" / "99.9%" / "90,000+" into prefix, number, and suffix. */
function parseMetric(value: string): ParsedMetric | null {
  const match = value.match(/^(\D*?)(\d[\d,]*(?:\.\d+)?)(.*)$/)

  if (!match) return null

  const rawNumber = match[2]
  const decimals = rawNumber.includes(".")
    ? (rawNumber.split(".")[1]?.length ?? 0)
    : 0

  return {
    prefix: match[1],
    amount: Number(rawNumber.replace(/,/g, "")),
    suffix: match[3],
    decimals,
  }
}

function formatAmount(amount: number, decimals: number) {
  if (decimals > 0) return amount.toFixed(decimals)

  return Math.round(amount).toLocaleString("en-US")
}

export function ImpactResults({
  metrics,
  intro,
  title = "Impact & Results",
  variant = "cards",
}: {
  metrics: CaseStudyMetric[]
  intro?: string
  title?: string
  variant?: "cards" | "table"
}) {
  const sectionRef = useRef<HTMLElement>(null)
  const valueRefs = useRef<(HTMLSpanElement | null)[]>([])
  const columns = metrics.length <= 6 ? 3 : 4
  const hasDescriptions = metrics.some((metric) => metric.description)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const grid = section.querySelector("[data-metric-grid]")

    const counters =
      variant === "table"
        ? []
        : metrics
            .map((metric, index) => {
              const parsed = parseMetric(metric.value)
              const el = valueRefs.current[index]

              return parsed && el ? { parsed, el } : null
            })
            .filter(
              (
                entry
              ): entry is { parsed: ParsedMetric; el: HTMLSpanElement } =>
                Boolean(entry)
            )

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll("[data-fade]"),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.13,
          scrollTrigger: { trigger: section, start: "top 78%" },
        }
      )

      gsap.fromTo(
        section.querySelectorAll("[data-metric]"),
        { opacity: 0, y: 28, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: grid, start: "top 85%" },
        }
      )

      if (!counters.length) return

      counters.forEach(({ parsed, el }) => {
        el.textContent = `${parsed.prefix}${formatAmount(0, parsed.decimals)}${parsed.suffix}`
      })

      const counterTimeline = gsap.timeline({
        scrollTrigger: { trigger: grid, start: "top 85%", once: true },
      })

      counters.forEach(({ parsed, el }) => {
        const counter = { value: 0 }

        counterTimeline.to(
          counter,
          {
            value: parsed.amount,
            duration: 1.6,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = `${parsed.prefix}${formatAmount(counter.value, parsed.decimals)}${parsed.suffix}`
            },
          },
          0
        )
      })
    }, section)

    return () => ctx.revert()
  }, [metrics, variant])

  return (
    <section
      ref={sectionRef}
      className="bg-[#072448] px-6 py-16 text-white lg:px-12 lg:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <h2 data-fade className="text-3xl font-medium tracking-tight">
          {title}
        </h2>
        {intro ? (
          <p data-fade className="mt-3 max-w-3xl leading-7 text-white/70">
            {intro}
          </p>
        ) : variant === "cards" ? (
          <p data-fade className="mt-3 max-w-2xl leading-7 text-white/70">
            The transformation delivered measurable improvements across
            acquisition, engagement, and conversion metrics.
          </p>
        ) : null}

        {variant === "table" ? (
          <div
            data-metric-grid
            className="mt-10 overflow-hidden rounded-xl border border-white/15"
          >
            <div className="hidden border-b border-white/15 sm:grid sm:grid-cols-[minmax(12rem,0.35fr)_1fr]">
              <p className="px-6 py-4 text-sm font-semibold text-white/55">
                Category
              </p>
              <p className="px-6 py-4 text-sm font-semibold text-white/55">
                Outcome
              </p>
            </div>
            {metrics.map((metric) => (
              <article
                key={metric.label}
                data-metric
                className="grid border-b border-white/15 last:border-b-0 sm:grid-cols-[minmax(12rem,0.35fr)_1fr]"
              >
                <p className="border-b border-white/10 px-6 py-5 text-base font-semibold text-white sm:border-b-0 sm:border-r sm:border-white/15">
                  {metric.label}
                </p>
                <p className="px-6 py-5 text-sm leading-7 text-white/75 sm:text-base">
                  {metric.description ?? metric.value}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <div
            data-metric-grid
            className={`mt-10 grid overflow-hidden rounded-xl border border-white/10 sm:grid-cols-2 ${
              columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
            }`}
          >
            {metrics.map((metric, index) => (
              <article
                key={metric.label}
                data-metric
                className={`border-b border-r border-white/10 p-7 transition-colors duration-300 hover:bg-white/[0.04] ${
                  hasDescriptions ? "min-h-52" : "min-h-44"
                }`}
              >
                <p className="font-serif text-4xl text-[#6fd3f5]">
                  <span
                    ref={(node) => {
                      valueRefs.current[index] = node
                    }}
                  >
                    {metric.value}
                  </span>
                </p>
                <p
                  className={`mt-6 font-semibold leading-6 text-white ${
                    hasDescriptions ? "" : "max-w-40 text-white/75"
                  }`}
                >
                  {metric.label}
                </p>
                {metric.description ? (
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    {metric.description}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
