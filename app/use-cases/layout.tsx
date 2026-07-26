import type { Metadata } from "next"
import { toAbsoluteUrl } from "@/lib/site-url"
import { USE_CASES_INDEX } from "@/lib/use-cases-data"

const title = `${USE_CASES_INDEX.title} | Beno Support`
const description = USE_CASES_INDEX.description
const canonical = toAbsoluteUrl("/use-cases")

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical,
  },
  openGraph: {
    title,
    description,
    url: canonical,
    type: "website",
  },
}

export default function UseCasesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
