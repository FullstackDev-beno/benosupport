import Image from "next/image"

import type { CaseStudyDetail } from "@/lib/case-studies-data"

export function CaseStudySolutions({
  solutions,
}: {
  solutions: CaseStudyDetail["solutions"]
}) {
  if (solutions.variant === "alternating") {
    return (
      <section className="bg-white px-6 py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="type-label section-label-light">Solution</p>
          <h2 className="mt-2 max-w-4xl text-3xl font-bold tracking-tight text-[#072448]">
            {solutions.title}
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-[#64748b]">
            {solutions.description}
          </p>

          <div className="mt-12 space-y-8">
            {solutions.items.map((solution) => {
              const imageLeft = solution.mediaSide === "left"

              return (
                <article
                  key={solution.title}
                  className="overflow-hidden rounded-3xl border border-[#e2e8f0] bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
                >
                  <div className="grid items-stretch xl:min-h-[480px] xl:grid-cols-2">
                    {solution.image ? (
                      <div
                        className={`relative aspect-[4/3] bg-[#eef2f7] xl:aspect-auto xl:min-h-full ${
                          imageLeft ? "xl:order-1" : "xl:order-2"
                        }`}
                      >
                        <Image
                          src={solution.image}
                          alt={solution.imageAlt ?? solution.title}
                          fill
                          sizes="(max-width: 1280px) 100vw, 640px"
                          className="object-cover object-center"
                        />
                      </div>
                    ) : null}

                    <div
                      className={`flex flex-col justify-center p-7 sm:p-10 ${
                        imageLeft ? "xl:order-2" : "xl:order-1"
                      }`}
                    >
                      <h3 className="text-2xl font-bold tracking-tight text-[#072448]">
                        {solution.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-[#475569]">
                        {solution.description}
                      </p>
                      <ul className="mt-4 space-y-2.5">
                        {solution.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex gap-2.5 text-sm leading-6 text-[#334155]"
                          >
                            <span
                              className="mt-2 size-1.5 shrink-0 rounded-full bg-[#0a3a73]"
                              aria-hidden
                            />
                            <span>
                              {highlight.includes(":") ? (
                                <>
                                  <strong className="font-semibold text-[#0a1628]">
                                    {highlight.split(":")[0]}:
                                  </strong>
                                  {highlight.slice(highlight.indexOf(":") + 1)}
                                </>
                              ) : (
                                highlight
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-white px-6 py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="type-label section-label-light">The Solution</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#072448]">
          {solutions.title}
        </h2>
        <p className="mt-3 max-w-4xl leading-7 text-[#64748b]">
          {solutions.description}
        </p>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {solutions.items.map((solution) => (
            <article
              key={solution.title}
              className="rounded-xl border border-[#d7dee8] bg-[#f8fafc] p-6 sm:p-8"
            >
              <h3 className="text-2xl font-medium tracking-tight text-[#072448]">
                {solution.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-[#475569]">
                {solution.description}
              </p>
              <ul className="mt-3 space-y-1.5">
                {solution.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-2 text-sm font-semibold leading-5 text-[#334155]"
                  >
                    <span className="text-[#0a3a73]" aria-hidden>
                      •
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>
              {solution.outcome ? (
                <p className="mt-4 text-sm leading-6 text-[#475569]">
                  {solution.outcome}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
