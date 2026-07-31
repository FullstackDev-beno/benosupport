import type { CaseStudyDetail } from "@/lib/case-studies-data"

export function CaseStudyOutcome({
  paragraphs,
  testimonial,
  theme = "light",
}: {
  paragraphs: CaseStudyDetail["businessOutcome"]
  testimonial?: string
  theme?: "light" | "dark"
}) {
  if (testimonial) {
    return (
      <section className="bg-[#072448] px-6 py-16 text-white lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <h2 className="text-3xl font-medium tracking-tight">
              Business Outcome
            </h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-white/80">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <blockquote className="relative rounded-3xl bg-white p-8 text-[#0a1628] shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:p-10">
            <span
              className="absolute left-6 top-4 font-serif text-7xl leading-none text-[#cbd5e1]"
              aria-hidden
            >
              “
            </span>
            <p className="relative mt-8 text-lg font-medium italic leading-8 text-[#334155]">
              {testimonial}
            </p>
          </blockquote>
        </div>
      </section>
    )
  }

  if (theme === "dark") {
    return (
      <section className="bg-[#072448] px-6 py-16 text-white lg:px-12 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-medium tracking-tight">
            Business Outcome
          </h2>
          <div className="mt-6 max-w-5xl space-y-4 text-base leading-8 text-white/80">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="border-t border-[#e2e8f0] bg-white px-6 py-14 text-center lg:px-12 lg:py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-medium text-[#072448]">
          Business Outcome
        </h2>
        <div className="mt-6 space-y-4 text-base leading-8 text-[#334155]">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
