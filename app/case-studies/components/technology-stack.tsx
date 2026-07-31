"use client"

import { useState } from "react"

import type { TechnologyGroup } from "@/lib/case-studies-data"

import { TechIcon } from "./tech-icon"

export function TechnologyStack({
  groups,
  title = "Technology Stack",
}: {
  groups: TechnologyGroup[]
  title?: string
}) {
  const [activeGroup, setActiveGroup] = useState(groups[0]?.label ?? "")
  const active =
    groups.find((group) => group.label === activeGroup) ?? groups[0]

  if (!active) return null

  return (
    <section className="bg-white px-6 py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="type-label section-label-light">Technology Stack</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#072448]">
          {title}
        </h2>

        <div
          className="mt-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Technology categories"
        >
          {groups.map((group) => {
            const isActive = group.label === active.label

            return (
              <button
                key={group.label}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveGroup(group.label)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-[#0a3a73] text-white"
                    : "bg-[#e5e7eb] text-[#565558] hover:bg-[#d7dde5]"
                }`}
              >
                {group.label}
              </button>
            )
          })}
        </div>

        <div
          role="tabpanel"
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
        >
          {active.technologies.map((technology) => (
            <div
              key={technology}
              className="flex min-h-32 flex-col items-center justify-center rounded-xl border border-[#dce3ec] bg-[#f8fafc] px-4 py-6 text-center shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
            >
              <span className="flex size-11 items-center justify-center rounded-lg border border-[#e2e8f0] bg-white">
                <TechIcon technology={technology} />
              </span>
              <p className="mt-4 text-sm font-semibold leading-5 text-[#0a1628]">
                {technology}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
