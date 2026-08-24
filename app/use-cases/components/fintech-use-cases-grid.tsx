"use client"

import Link from "next/link"
import { useState } from "react"
import {
  Activity,
  BarChart3,
  ChevronDown,
  ChevronUp,
  ClipboardCheck,
  Database,
  DollarSign,
  FileCheck,
  FileSearch,
  FileText,
  MessageSquare,
  Scale,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  UserPlus,
  type LucideIcon,
} from "lucide-react"

import {
  USE_CASES_INITIAL_VISIBLE,
  type UseCaseCard,
  type UseCaseCardIcon,
} from "@/lib/use-cases-data"
import { TALK_TO_EXPERT_HREF } from "@/lib/proposal-cta"

const USE_CASE_ICONS: Record<UseCaseCardIcon, LucideIcon> = {
  "shield-alert": ShieldAlert,
  "shield-check": ShieldCheck,
  shield: Shield,
  "file-check": FileCheck,
  "file-search": FileSearch,
  "file-text": FileText,
  scale: Scale,
  "clipboard-check": ClipboardCheck,
  activity: Activity,
  "message-square": MessageSquare,
  smartphone: Smartphone,
  "dollar-sign": DollarSign,
  "user-plus": UserPlus,
  "bar-chart": BarChart3,
  database: Database,
}

function UseCaseCardItem({ useCase }: { useCase: UseCaseCard }) {
  const benefitsLabel = useCase.benefitsTitle ?? "Business Benefits"
  const Icon = USE_CASE_ICONS[useCase.icon]

  return (
    <article className="flex h-full flex-col rounded-2xl bg-white p-6 sm:p-7">
      <div className="flex size-10 items-center justify-center rounded-lg bg-[#072448] text-white">
        <Icon className="size-5" strokeWidth={1.8} aria-hidden />
      </div>

      <h3 className="mt-5 text-lg font-bold leading-snug text-[#072448]">
        {useCase.title}
      </h3>

      {useCase.subtitle ? (
        <p className="mt-2 text-[14px] font-semibold leading-6 text-[#475569]">
          {useCase.subtitle}
        </p>
      ) : null}

      <p className="mt-3 text-[14px] leading-7 text-[#64748b]">
        {useCase.description}
      </p>

      <div className="mt-5">
        <h4 className="text-[15px] font-bold text-[#072448]">{benefitsLabel}</h4>
        <ul className="mt-3 space-y-2">
          {useCase.benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex gap-2.5 text-[14px] leading-6 text-[#64748b]"
            >
              <span
                className="mt-2 size-1.5 shrink-0 rounded-full bg-[#072448]"
                aria-hidden
              />
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-6">
        <Link
          href={TALK_TO_EXPERT_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#0f62fe] transition-colors hover:text-[#072448]"
        >
          Talk To Our Experts
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  )
}

export default function UseCasesGrid({
  title,
  cards,
}: {
  title: string
  cards: UseCaseCard[]
}) {
  const [expanded, setExpanded] = useState(false)

  const visibleCases = cards.slice(0, USE_CASES_INITIAL_VISIBLE)
  const hasMore = cards.length > USE_CASES_INITIAL_VISIBLE
  const shownCases = expanded ? cards : visibleCases

  return (
    <section className="bg-[#072448] py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <h2 className="text-center text-balance text-[1.65rem] font-bold tracking-[-0.02em] text-white sm:text-[2rem]">
          {title}
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {shownCases.map((useCase) => (
            <UseCaseCardItem key={useCase.title} useCase={useCase} />
          ))}
        </div>

        {hasMore ? (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
              aria-expanded={expanded}
            >
              {expanded ? (
                <>
                  Show Less
                  <ChevronUp className="size-4" aria-hidden />
                </>
              ) : (
                <>
                  Explore More
                  <ChevronDown className="size-4" aria-hidden />
                </>
              )}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  )
}
