import type { Metadata } from "next"

import { toAbsoluteUrl } from "@/lib/site-url"

export const metadata: Metadata = {
  title: "Case Studies | Beno Support",
  description:
    "Explore how Beno Support delivers measurable business outcomes through digital engineering, cloud platforms, AI, and experience transformation.",
  alternates: {
    canonical: toAbsoluteUrl("/case-studies"),
  },
}

export default function CaseStudiesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children
}
