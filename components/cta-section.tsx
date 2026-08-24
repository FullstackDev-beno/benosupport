"use client"

import {
  PageCTAOutlineButton,
  PageCTAPrimaryButton,
  PageCTASection,
} from "@/components/page-cta"
import { useProposalModal } from "@/hooks/use-proposal-modal"
import { TALK_TO_EXPERT_HREF } from "@/lib/proposal-cta"

export function CtaSection() {
  const { openProposalModal } = useProposalModal()

  return (
    <PageCTASection>
      <h2 className="type-heading mx-auto max-w-3xl text-balance font-bold text-white">
        Ready to Accelerate Digital Innovation?
      </h2>
      <p className="type-body mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-[#b8c9e0]">
        Join the ranks of global leaders who trust Beno Support for
        engineering excellence and strategic growth.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <PageCTAPrimaryButton onClick={openProposalModal}>
          Request a Proposal
        </PageCTAPrimaryButton>
        <PageCTAOutlineButton href={TALK_TO_EXPERT_HREF} target="_blank" rel="noopener noreferrer">
          Talk To Our Experts
        </PageCTAOutlineButton>
      </div>
    </PageCTASection>
  )
}