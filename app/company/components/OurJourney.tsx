"use client";

import { Rocket, Monitor, Cloud, Shield, Brain, Globe, LucideIcon } from "lucide-react";

interface Milestone {
  year: string;
  title: string;
  icon: LucideIcon;
  position: "top" | "bottom";
}

const milestones: Milestone[] = [
  {
    year: "2008",
    title: "Company Founded",
    icon: Rocket,
    position: "top",
  },
  {
    year: "2012",
    title: "Expanded into Enterprise Software Development",
    icon: Monitor,
    position: "bottom",
  },
  {
    year: "2016",
    title: "Entered Cloud & Digital Transformation Services",
    icon: Cloud,
    position: "top",
  },
  {
    year: "2020",
    title: "Enhanced Engineering, DevOps & Cybersecurity Expertise",
    icon: Shield,
    position: "bottom",
  },
  {
    year: "2023",
    title: "Launched AI Automation & Intelligent Solutions",
    icon: Brain,
    position: "top",
  },
  {
    year: "Present",
    title: "Delivering Global AI, Cloud & Engineering Excellence",
    icon: Globe,
    position: "bottom",
  },
];

const blockColors: string[] = [
  "#0B2345",
  "#143D73",
  "#1F5A99",
  "#2D73BD",
  "#4288D5",
  "#72AFE8",
];

const iconBgColors: string[] = [
  "#0B2345",
  "#143D73",
  "#1F5A99",
  "#2D73BD",
  "#4288D5",
  "#5A9BD4",
];

export default function JourneyTimeline() {
  return (
    <section className="w-full py-20 px-6" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#3b67ff" }}
          >
            OUR JOURNEY TIMELINE
          </p>
          <h2
            className="text-4xl font-extrabold"
            style={{ color: "#0B2345" }}
          >
            Our Journey
          </h2>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          {/* Top row: icons + descriptions for "top" milestones */}
          <div className="flex items-end" style={{ minHeight: "180px" }}>
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <div
                  key={milestone.year}
                  className="flex-1 flex flex-col items-center justify-end"
                >
                  {milestone.position === "top" ? (
                    <div className="flex flex-col items-center gap-3 pb-0">
                      {/* Description above icon */}
                      <p
                        className="text-center text-sm font-semibold leading-snug"
                        style={{
                          maxWidth: "160px",
                          color: index >= 3 ? "#2D73BD" : "#0B2345",
                        }}
                      >
                        {milestone.title}
                      </p>

                      {/* Icon Circle */}
                      <div
                        className="rounded-full flex items-center justify-center"
                        style={{
                          width: "80px",
                          height: "80px",
                          backgroundColor: iconBgColors[index],
                          flexShrink: 0,
                        }}
                      >
                        <Icon color="white" size={34} strokeWidth={1.5} />
                      </div>

                      {/* Connector Line */}
                      <div
                        className="w-px"
                        style={{
                          height: "32px",
                          backgroundColor: iconBgColors[index],
                        }}
                      />
                    </div>
                  ) : (
                    /* Empty spacer for bottom milestones */
                    <div style={{ height: "80px" }} />
                  )}
                </div>
              );
            })}
          </div>

          {/* Timeline Bar */}
          <div className="flex" style={{ borderRadius: "4px", overflow: "hidden" }}>
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="flex-1 flex items-center justify-center py-5"
                style={{ backgroundColor: blockColors[index] }}
              >
                <span
                  className="font-extrabold text-white"
                  style={{ fontSize: "clamp(1.1rem, 2vw, 1.75rem)", letterSpacing: "-0.01em" }}
                >
                  {milestone.year}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom row: icons + descriptions for "bottom" milestones */}
          <div className="flex items-start" style={{ minHeight: "180px" }}>
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <div
                  key={milestone.year}
                  className="flex-1 flex flex-col items-center justify-start"
                >
                  {milestone.position === "bottom" ? (
                    <div className="flex flex-col items-center gap-3 pt-0">
                      {/* Connector Line */}
                      <div
                        className="w-px"
                        style={{
                          height: "32px",
                          backgroundColor: iconBgColors[index],
                        }}
                      />

                      {/* Icon Circle */}
                      <div
                        className="rounded-full flex items-center justify-center"
                        style={{
                          width: "80px",
                          height: "80px",
                          backgroundColor: iconBgColors[index],
                          flexShrink: 0,
                        }}
                      >
                        <Icon color="white" size={34} strokeWidth={1.5} />
                      </div>

                      {/* Description below icon */}
                      <p
                        className="text-center text-sm font-semibold leading-snug"
                        style={{
                          maxWidth: "160px",
                          color: index >= 3 ? "#2D73BD" : "#0B2345",
                        }}
                      >
                        {milestone.title}
                      </p>
                    </div>
                  ) : (
                    /* Empty spacer for top milestones */
                    <div style={{ height: "80px" }} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="flex flex-col gap-0 md:hidden">
          <div className="relative pl-12">
            {/* Vertical line */}
            <div
              className="absolute left-5 top-0 bottom-0 w-px"
              style={{ backgroundColor: "#4288D5" }}
            />

            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <div key={milestone.year} className="relative flex items-start mb-8 last:mb-0">
                  {/* Icon Circle on the line */}
                  <div
                    className="absolute -left-7 rounded-full flex items-center justify-center z-10 flex-shrink-0"
                    style={{
                      width: "48px",
                      height: "48px",
                      backgroundColor: iconBgColors[index],
                      top: "0px",
                    }}
                  >
                    <Icon color="white" size={22} strokeWidth={1.5} />
                  </div>

                  {/* Card content */}
                  <div className="ml-6 pt-1">
                    <span
                      className="block text-lg font-extrabold mb-1"
                      style={{ color: blockColors[index] }}
                    >
                      {milestone.year}
                    </span>
                    <p
                      className="text-sm font-medium leading-snug"
                      style={{ color: "#334155" }}
                    >
                      {milestone.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}