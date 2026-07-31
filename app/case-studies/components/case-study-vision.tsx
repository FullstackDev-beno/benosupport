import Image from "next/image"

import type { CaseStudyDetail } from "@/lib/case-studies-data"

export function CaseStudyVision({
  vision,
}: {
  vision: CaseStudyDetail["vision"]
}) {
  const isDark = vision.theme === "dark"

  return (
    <section
      className={`px-6 py-16 lg:px-12 lg:py-20 ${
        isDark ? "bg-[#072448] text-white" : "bg-white"
      }`}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p
            className={`type-label ${
              isDark ? "text-white/60" : "section-label-light"
            }`}
          >
            Vision
          </p>
          <h2
            className={`mt-2 text-3xl font-bold tracking-tight ${
              isDark ? "text-white" : "text-[#072448]"
            }`}
          >
            {vision.title}
          </h2>
          <div
            className={`mt-5 space-y-5 text-[15px] leading-7 ${
              isDark ? "text-white/75" : "text-[#475569]"
            }`}
          >
            {vision.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={vision.image}
              alt={vision.imageAlt}
              width={620}
              height={620}
              className="h-auto w-full object-cover"
            />
          </div>
          {vision.badge ? (
            <div className="absolute bottom-3 left-3 max-w-[11.5rem] rounded-lg bg-white px-3 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.16)] sm:bottom-4 sm:left-4 sm:max-w-[13rem] sm:px-3.5 sm:py-3">
              <p className="font-serif text-xl text-[#072448] sm:text-2xl">
                {vision.badge.value}
              </p>
              <p className="mt-0.5 text-[10px] font-bold tracking-[0.08em] text-[#072448]">
                {vision.badge.label}
              </p>
              <p className="mt-1.5 text-[10px] leading-4 text-[#64748b] sm:text-[11px] sm:leading-[1.35]">
                {vision.badge.description}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
