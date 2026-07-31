import Image from "next/image"
import Link from "next/link"

import { PageBreadcrumb } from "@/components/page-breadcrumb"
import { withHome } from "@/lib/breadcrumbs"
import type { CaseStudyDetail } from "@/lib/case-studies-data"

export function CaseStudyHero({ detail }: { detail: CaseStudyDetail }) {
  if (detail.layout === "bleed") {
    return (
      <section className="relative isolate flex min-h-screen overflow-hidden bg-[#f8fafc]">
        <Image
          src={detail.hero.image}
          alt={detail.hero.imageAlt}
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 items-center px-4 pb-16 pt-28 sm:px-6 lg:px-10 lg:pt-32">
          <div className="max-w-xl lg:max-w-2xl">
            <PageBreadcrumb
              items={withHome([
                { label: "Case Studies", href: "/case-studies" },
                { label: detail.overview.client },
              ])}
              className="mb-6"
            />
            <span className="inline-flex rounded-full bg-[#072448] px-3.5 py-1.5 text-xs font-semibold text-white">
              {detail.hero.eyebrow}
            </span>
            <h1 className="mt-5 text-balance text-3xl font-bold leading-tight tracking-[-0.02em] text-[#0a1628] sm:text-4xl lg:text-[2.75rem]">
              {detail.hero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#64748b]">
              {detail.hero.description}
            </p>
            {detail.hero.primaryCta || detail.hero.secondaryCta ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {detail.hero.primaryCta ? (
                  <Link
                    href={detail.hero.primaryCta.href}
                    className="inline-flex items-center justify-center rounded-xl bg-[#072448] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#0a3a73]"
                  >
                    {detail.hero.primaryCta.label}
                  </Link>
                ) : null}
                {detail.hero.secondaryCta ? (
                  <Link
                    href={detail.hero.secondaryCta.href}
                    className="inline-flex items-center justify-center rounded-xl border border-[#cbd5e1] bg-white/90 px-6 py-3.5 text-sm font-bold text-[#0a1628] backdrop-blur-sm transition-colors hover:bg-white"
                  >
                    {detail.hero.secondaryCta.label}
                  </Link>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </section>
    )
  }

  if (detail.layout === "split") {
    return (
      <section className="flex min-h-screen items-center bg-[#f1f4f8] px-4 py-28 sm:px-6 lg:px-10 lg:py-32">
        <div className="mx-auto grid w-full max-w-[1400px] items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <PageBreadcrumb
              items={withHome([
                { label: "Case Studies", href: "/case-studies" },
                { label: detail.overview.client },
              ])}
              className="mb-6"
            />
            <span className="inline-flex rounded-full bg-[#072448] px-3.5 py-1.5 text-xs font-semibold text-white">
              {detail.hero.eyebrow}
            </span>
            <h1 className="mt-5 text-balance text-3xl font-bold leading-tight tracking-[-0.02em] text-[#0a1628] sm:text-4xl lg:text-[2.75rem]">
              {detail.hero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#64748b]">
              {detail.hero.description}
            </p>
            {detail.hero.primaryCta || detail.hero.secondaryCta ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {detail.hero.primaryCta ? (
                  <Link
                    href={detail.hero.primaryCta.href}
                    className="inline-flex items-center justify-center rounded-xl bg-[#072448] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#0a3a73]"
                  >
                    {detail.hero.primaryCta.label}
                  </Link>
                ) : null}
                {detail.hero.secondaryCta ? (
                  <Link
                    href={detail.hero.secondaryCta.href}
                    className="inline-flex items-center justify-center rounded-xl border border-[#cbd5e1] bg-white px-6 py-3.5 text-sm font-bold text-[#0a1628] transition-colors hover:bg-[#f1f5f9]"
                  >
                    {detail.hero.secondaryCta.label}
                  </Link>
                ) : null}
              </div>
            ) : null}
          </div>

          <div className="w-full max-w-[400px] justify-self-center sm:max-w-[440px]">
            <div className="relative aspect-[527/547] overflow-hidden rounded-2xl bg-[#e8edf3] ring-1 ring-[#0f172a]/5 shadow-[0_0_28px_-4px_rgba(7,36,72,0.16),0_16px_44px_-12px_rgba(7,36,72,0.3),0_4px_12px_-4px_rgba(7,36,72,0.12)]">
              <Image
                src={detail.hero.image}
                alt={detail.hero.imageAlt}
                fill
                priority
                sizes="(max-width: 640px) 100vw, 440px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative isolate overflow-hidden bg-[#071426] text-white">
      <Image
        src={detail.hero.image}
        alt={detail.hero.imageAlt}
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/15" />
      <div className="relative mx-auto grid min-h-screen w-full max-w-[1400px] items-center gap-10 px-4 pb-16 pt-24 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-10">
        {detail.hero.logo ? (
          <div className="flex justify-center lg:justify-start lg:self-start">
            <Image
              src={detail.hero.logo}
              alt={detail.hero.logoAlt ?? ""}
              width={150}
              height={210}
              className="h-auto w-20 drop-shadow-lg sm:w-[100px]"
            />
          </div>
        ) : (
          <div />
        )}
        <div className="max-w-3xl">
          <PageBreadcrumb
            items={withHome([
              { label: "Case Studies", href: "/case-studies" },
              { label: detail.overview.client },
            ])}
            variant="dark"
            className="mb-6"
          />
          <span className="inline-flex rounded-md bg-white px-3 py-1.5 text-xs font-bold text-[#072448]">
            {detail.hero.eyebrow}
          </span>
          <h1 className="mt-5 text-balance text-4xl font-medium leading-tight tracking-[-0.02em] sm:text-5xl lg:text-[3.5rem]">
            {detail.hero.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/80">
            {detail.hero.description}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4 text-sm font-semibold">
            {detail.hero.duration ? (
              <span className="rounded-full bg-white px-4 py-2 text-[#072448]">
                {detail.hero.duration}
              </span>
            ) : null}
            {detail.hero.stackSummary ? (
              <span className="text-white/90">{detail.hero.stackSummary}</span>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
