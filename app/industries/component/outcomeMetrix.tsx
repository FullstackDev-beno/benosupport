"use client";

import Image from "next/image";
import { Check } from "lucide-react";

const outcomes = [
  "Reduce Manual Effort by Up to 60%",
  "Accelerate Process Efficiency",
  "Improve Customer Experience",
  "Increase Operational Visibility",
  "Enhance Security Posture",
  "Reduce Infrastructure Costs",
  "Improve Business Agility",
  "Accelerate Time-to-Market",
];

export default function BusinessOutcomes() {
  return (
    <section className="max-w-7xl m-auto bg-white py-24 px-6">
      <div className="max-w-screen-2xl mx-auto">

        {/* FULL-WIDTH HEADER */}
        <div className="mb-12">
          <span className="label-chip text-xs font-semibold uppercase tracking-wider text-[#072448]">Business outcomes</span>

          <h2
            className="text-5xl font-bold leading-tight mb-5"
            style={{ color: "#0B2B5B" }}
          >
            Measurable Business Impact
          </h2>

          <p className="text-base text-gray-500 leading-relaxed">
            Our solutions are designed to deliver measurable results that directly
            support business growth and operational excellence.
          </p>
        </div>

        {/* TWO-COLUMN: metrics left, image right — desktop */}
        {/* On mobile: metrics first, image below */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* LEFT: Outcome Metrics */}
          <div className="w-full lg:w-[45%] flex flex-col flex-shrink-0">
            <h3
              className="text-3xl font-bold mb-8"
              style={{ color: "#0B2B5B" }}
            >
              Outcome Metrics
            </h3>

            <div className="flex flex-col">
              {outcomes.map((outcome, index) => {
                const isLast = index === outcomes.length - 1;
                return (
                  <div key={outcome} className="flex items-start gap-5">
                    {/* Icon + connector */}
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div
                        className="rounded-full flex items-center justify-center flex-shrink-0 ring-2 ring-white shadow-md"
                        style={{
                          width: "40px",
                          height: "40px",
                          backgroundColor: "#0B2B5B",
                        }}
                      >
                        <Check color="white" size={18} strokeWidth={2.5} />
                      </div>

                      {!isLast && (
                        <div
                          className="w-px bg-gray-300"
                          style={{ height: "28px" }}
                        />
                      )}
                    </div>

                    {/* Text */}
                    <p
                      className="text-xl font-bold leading-tight"
                      style={{
                        color: "#0B2B5B",
                        paddingTop: "8px",
                        paddingBottom: isLast ? "0" : "28px",
                      }}
                    >
                      {outcome}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Image — desktop side, mobile bottom */}
          <div className="w-full lg:w-[55%]">
            <div
              className="relative w-full overflow-hidden shadow-2xl"
              style={{
                borderRadius: "16px",
                minHeight: "550px",
              }}
            >
              <Image
                src="/assets/IndBI.svg"
                alt="AI precision targeting visualization"
                fill
                className="object-cover"
                priority
              />
              <div
                className="absolute inset-0"
                style={{ backgroundColor: "rgba(0,0,0,0.05)" }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}