"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
} as const;

/* ── Illustrated 3D-style icons built with layered divs ── */
const AgentIcon = () => (
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
    <rect x="18" y="28" width="36" height="28" rx="4" fill="#bfdbfe" />
    <rect x="22" y="24" width="36" height="28" rx="4" fill="#93c5fd" />
    <rect x="26" y="20" width="36" height="28" rx="4" fill="#3b82f6" />
    <circle cx="44" cy="34" r="5" fill="white" fillOpacity="0.6" />
    <rect x="32" y="40" width="16" height="2" rx="1" fill="white" fillOpacity="0.5" />
  </svg>
);

const TrackIcon = () => (
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
    <rect x="14" y="32" width="44" height="8" rx="4" fill="#bfdbfe" />
    <rect x="14" y="22" width="28" height="8" rx="4" fill="#93c5fd" />
    <rect x="14" y="42" width="36" height="8" rx="4" fill="#3b82f6" />
    <circle cx="58" cy="26" r="5" fill="#1d4ed8" />
    <circle cx="50" cy="46" r="5" fill="#60a5fa" />
  </svg>
);

const ColabIcon = () => (
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
    <circle cx="26" cy="36" r="14" fill="#bfdbfe" />
    <circle cx="46" cy="36" r="14" fill="#3b82f6" fillOpacity="0.7" />
    <ellipse cx="36" cy="36" rx="8" ry="14" fill="#93c5fd" fillOpacity="0.8" />
    <circle cx="36" cy="28" r="3" fill="white" fillOpacity="0.7" />
  </svg>
);

const ShipIcon = () => (
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
    <rect x="20" y="38" width="32" height="16" rx="3" fill="#bfdbfe" />
    <rect x="24" y="30" width="24" height="10" rx="2" fill="#93c5fd" />
    <rect x="30" y="20" width="12" height="12" rx="2" fill="#3b82f6" />
    <rect x="8" y="52" width="56" height="3" rx="1.5" fill="#60a5fa" fillOpacity="0.4" />
    <circle cx="28" cy="54" r="3" fill="#1d4ed8" />
    <circle cx="44" cy="54" r="3" fill="#1d4ed8" />
  </svg>
);

const features = [
  {
    num: "1",
    icon: <AgentIcon />,
    title: "Autonomous Agent Workflows",
    desc: "WeKraft agents plan sprints, assign tasks, and detect blockers — all without manual intervention.",
  },
  {
    num: "2",
    icon: <TrackIcon />,
    title: "Deadline Intelligence",
    desc: "AI monitors every task in real-time and nudges the right person before a deadline is ever missed.",
  },
  {
    num: "3",
    icon: <ColabIcon />,
    title: "Real-time Collaboration",
    desc: "Your entire team — code reviews, PRs, comments, and deployments — synced on one living canvas.",
  },
  {
    num: "4",
    icon: <ShipIcon />,
    title: "Ship Without Friction",
    desc: "From first commit to production deploy, WeKraft removes every bottleneck that slows teams down.",
  },
];

const Section3 = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yShift = useTransform(scrollYProgress, [0, 0.4], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <motion.section
      ref={containerRef}
      style={{ y: yShift, opacity }}
      className="relative w-full bg-white z-20 py-24 md:py-32 px-6 md:px-12 lg:px-20 rounded-t-[3rem] shadow-[0_-40px_80px_rgba(0,0,0,0.12)]"
    >
      {/* Subtle dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:28px_28px] opacity-60 rounded-t-[3rem]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* LEFT — sticky headline */}
          <div className="lg:sticky lg:top-32 lg:w-[38%] shrink-0">
            <motion.div
              {...fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 bg-white text-[12px] text-neutral-500 font-medium mb-6 shadow-sm"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              How WeKraft works
            </motion.div>

            <motion.h2
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="text-[2.4rem] md:text-[3rem] font-semibold tracking-[-0.03em] text-neutral-900 leading-[1.1] mb-6"
            >
              Built for teams
              <br />
              who ship{" "}
              <span className="text-blue-500">fast.</span>
            </motion.h2>

            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className="text-[15px] text-neutral-500 leading-relaxed mb-10 max-w-sm"
            >
              From autonomous agents to real-time collaboration — WeKraft
              handles the overhead so your team can focus on what matters: building.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.3 }}
            >
              <Link
                href="/web/reach-us"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 transition-colors duration-200"
              >
                Get early access
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT — 2×2 feature grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-px bg-neutral-200 rounded-2xl overflow-hidden border border-neutral-200">
            {features.map((f, i) => (
              <motion.div
                key={f.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="group bg-white p-8 flex flex-col gap-6 hover:bg-neutral-50 transition-colors duration-300"
              >
                {/* Illustrated icon */}
                <motion.div
                  whileHover={{ y: -4, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-18 h-18"
                >
                  {f.icon}
                </motion.div>

                <div>
                  <div className="text-[11px] text-neutral-400 font-mono mb-2 tracking-widest">{f.num}</div>
                  <h3 className="text-[18px] font-semibold text-neutral-900 leading-snug mb-3 tracking-tight">
                    {f.title}
                  </h3>
                  <p className="text-[14px] text-neutral-500 leading-relaxed">
                    {f.desc}
                  </p>
                </div>

                {/* Subtle hover arrow */}
                <div className="mt-auto flex items-center gap-1.5 text-[13px] font-medium text-neutral-300 group-hover:text-blue-500 transition-colors duration-300">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Section3;
