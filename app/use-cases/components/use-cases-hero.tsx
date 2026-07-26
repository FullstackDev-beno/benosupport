"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

import { PageBreadcrumb } from "@/components/page-breadcrumb"
import { withHome } from "@/lib/breadcrumbs"
import { prepareHeadingWordAnimation } from "@/lib/prepare-heading-word-animation"
import type { UseCaseHero } from "@/lib/use-cases-data"

export default function UseCasesHero({ hero }: { hero: UseCaseHero }) {
  const heroRef = useRef<HTMLElement>(null)
  const tagRef = useRef<HTMLSpanElement>(null)
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([])
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (tagRef.current) {
        gsap.fromTo(
          tagRef.current,
          { opacity: 0, y: 16, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.8)",
            delay: 0.1,
          }
        )
      }

      lineRefs.current.forEach((lineEl, index) => {
        if (!lineEl) return
        const wordEls = prepareHeadingWordAnimation(lineEl)
        if (!wordEls.length) return
        gsap.fromTo(
          wordEls,
          { y: "110%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 0.9,
            ease: "expo.out",
            stagger: 0.06,
            delay: 0.2 + index * 0.18,
          }
        )
      })

      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { opacity: 0, filter: "blur(8px)", y: 16 },
          {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.7,
          }
        )
      }

      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, x: 60, scale: 0.97 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.0,
            ease: "expo.out",
            delay: 0.3,
          }
        )
      }
    }, heroRef)

    return () => ctx.revert()
  }, [hero.title])

  return (
    <section
      ref={heroRef}
      className="relative flex h-dvh min-h-[640px] overflow-hidden bg-[#072448]"
    >
      <div className="relative z-10 flex h-full w-full flex-col justify-center px-8 pb-10 pt-28 lg:w-[58%] lg:px-16 lg:pb-12 lg:pt-32 xl:pl-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,103,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(59,103,255,0.6) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative max-w-[640px] xl:max-w-[700px]">
          <PageBreadcrumb
            items={withHome([
              { label: "Use Cases", href: "/use-cases" },
              { label: hero.breadcrumbLabel },
            ])}
            variant="dark"
            className="mb-4"
          />

          <span
            ref={tagRef}
            className="mb-4 inline-flex rounded-md bg-white px-3 py-1 text-[13px] font-semibold text-[#0a1628]"
          >
            {hero.tag}
          </span>

          <h1 className="mb-5 text-[2.25rem] font-extrabold leading-[1.16] tracking-[-0.02em] text-white sm:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.5rem]">
            {hero.titleLines.map((line, index) => (
              <span
                key={line}
                ref={(el) => {
                  lineRefs.current[index] = el
                }}
                data-split-text={line}
                className="block text-balance"
              >
                {line}
              </span>
            ))}
          </h1>

          <p
            ref={subtitleRef}
            className="max-w-[560px] text-base leading-7 text-white/85 sm:text-[17px] sm:leading-8"
          >
            {hero.subtitle}
          </p>
        </div>
      </div>

      <div
        ref={imageRef}
        className="absolute right-0 top-0 hidden h-full w-[48%] lg:block"
        style={{
          clipPath: "polygon(8% 0%,100% 0%,100% 100%,0% 100%)",
        }}
      >
        <div
          className="absolute inset-0 z-10 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(59,103,255,0.8) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        <img
          src={hero.image}
          alt={hero.imageAlt}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>
    </section>
  )
}
