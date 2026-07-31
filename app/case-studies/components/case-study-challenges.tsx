import {
  Database,
  MessageSquare,
  Search,
  Settings2,
  Shield,
  Smartphone,
  type LucideIcon,
} from "lucide-react"

import type { CaseStudyDetail } from "@/lib/case-studies-data"

const CHALLENGE_ICONS: Record<
  NonNullable<CaseStudyDetail["challenges"]["items"][number]["icon"]>,
  LucideIcon
> = {
  database: Database,
  uptime: Settings2,
  mobile: Smartphone,
  comms: MessageSquare,
  search: Search,
  shield: Shield,
}

export function CaseStudyChallenges({
  challenges,
}: {
  challenges: CaseStudyDetail["challenges"]
}) {
  if (challenges.variant === "cards") {
    return (
      <section className="bg-[#f8fafc] px-6 py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="type-label section-label-light">Challenges</p>
          <h2 className="mt-2 max-w-3xl text-3xl font-bold tracking-tight text-[#072448]">
            {challenges.title}
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-[#64748b]">
            {challenges.description}
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {challenges.items.map((item) => {
              const Icon = item.icon
                ? CHALLENGE_ICONS[item.icon]
                : Database

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:p-7"
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-[#072448] text-white">
                    <Icon className="size-5" strokeWidth={1.7} aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-[#0a1628]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#64748b]">
                    {item.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-[#072448] px-6 py-16 text-white lg:px-12 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="type-label text-white/60">Challenges</p>
        <h2 className="mt-2 text-3xl font-medium tracking-tight">
          {challenges.title}
        </h2>
        <p className="mt-3 max-w-4xl leading-7 text-white/70">
          {challenges.description}
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-0">
          {challenges.items.map((item, index) => (
            <article
              key={item.title}
              className="border-white/25 lg:border-l lg:px-5 first:lg:border-l-0 first:lg:pl-0"
            >
              <span className="text-xs font-bold text-white/30">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-lg font-bold">{item.title}</h3>
              <p className="mt-4 text-sm leading-6 text-white/65">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
