import {
  PageCTAPrimaryButton,
  PageCTASection,
} from "@/components/page-cta"
import { TALK_TO_EXPERT_HREF } from "@/lib/proposal-cta"

export default function UseCasesCta({
  title,
  description,
  buttonLabel,
}: {
  title: string
  description: string
  buttonLabel: string
}) {
  return (
    <PageCTASection className="bg-[#f4f6f9]">
      <h2 className="text-balance text-[clamp(1rem,2.6vw,2rem)] font-bold tracking-[-0.02em] text-white">
        {title}
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-white/80">
        {description}
      </p>
      <div className="mt-8 flex justify-center">
        <PageCTAPrimaryButton href={TALK_TO_EXPERT_HREF} target="_blank" rel="noopener noreferrer">
          Talk To Our Experts
        </PageCTAPrimaryButton>
      </div>
    </PageCTASection>
  )
}
