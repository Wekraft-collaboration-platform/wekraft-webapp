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



// Fixed dot positions per card — seeded so they don't shift on re-render
const DOT_SEEDS = [
  { x: 12, y: 18 }, { x: 28, y: 8 },  { x: 55, y: 14 }, { x: 78, y: 6 },
  { x: 88, y: 22 }, { x: 92, y: 45 }, { x: 85, y: 68 }, { x: 70, y: 82 },
  { x: 45, y: 90 }, { x: 20, y: 85 }, { x: 8,  y: 62 }, { x: 5,  y: 38 },
  { x: 35, y: 30 }, { x: 60, y: 50 }, { x: 72, y: 28 }, { x: 18, y: 55 },
];

const FeatureCard = ({ f, index }: { f: typeof features[0], index: number }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-white p-8 flex flex-col gap-6 hover:bg-neutral-50 transition-colors duration-300 overflow-hidden"
    >
      {/* Decorative distorted background boxes on hover */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent opacity-50 blur-xl"></div>
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/10 rotate-12 skew-x-12 scale-110 blur-[2px] transition-transform duration-700 group-hover:rotate-45 group-hover:skew-x-0" />
        <div className="absolute right-12 top-12 w-16 h-16 bg-blue-500/5 -rotate-12 skew-y-12 blur-[1px] transition-transform duration-700 group-hover:-rotate-45 group-hover:skew-y-0" />
        <div className="absolute right-0 bottom-0 w-32 h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC4yMCIvPgo8L3N2Zz4=')] opacity-30 skew-x-6 rotate-3 scale-110 mix-blend-multiply" />
      </div>

      {/* Floating dots on hover */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {DOT_SEEDS.map((dot, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: i % 3 === 0 ? 5 : i % 3 === 1 ? 3.5 : 2.5,
              height: i % 3 === 0 ? 5 : i % 3 === 1 ? 3.5 : 2.5,
              background: i % 4 === 0 ? "#3b82f6" : i % 4 === 1 ? "#93c5fd" : i % 4 === 2 ? "#6366f1" : "#bfdbfe",
            }}
            animate={
              hovered
                ? {
                    opacity: [0, 0.7 + (i % 3) * 0.1, 0],
                    y: [0, -(8 + (i % 5) * 5), -(16 + (i % 4) * 6)],
                    x: [0, ((i % 2 === 0 ? 1 : -1) * (3 + (i % 4) * 2))],
                    scale: [0.4, 1.1, 0.6],
                  }
                : { opacity: 0, y: 0, x: 0, scale: 0.4 }
            }
            transition={{
              duration: 1.4 + (i % 4) * 0.25,
              delay: i * 0.05,
              repeat: hovered ? Infinity : 0,
              repeatDelay: 0.3 + (i % 3) * 0.2,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Illustrated icon */}
      <div className="w-18 h-18 relative z-10">
        {f.icon}
      </div>

      <div className="relative z-10">
        <div className="text-[11px] text-neutral-400 font-mono mb-2 tracking-widest">{f.num}</div>
        <h3 className="text-[18px] font-semibold text-neutral-900 leading-snug mb-3 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
          {f.title}
        </h3>
        <p className="text-[14px] text-neutral-500 leading-relaxed group-hover:text-neutral-600 transition-colors duration-300">
          {f.desc}
        </p>
      </div>

      {/* Subtle hover arrow */}
      <div className="mt-auto flex items-center gap-1.5 text-[13px] font-medium text-neutral-300 group-hover:text-blue-500 transition-colors duration-300 relative z-10">
        <span>Learn more</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
      </div>
    </motion.div>
  );
};

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
      className="relative w-full bg-[#F5F7FA] z-20 py-24 md:py-32 px-6 md:px-12 lg:px-20 rounded-t-[3rem] shadow-[0_-40px_80px_rgba(0,0,0,0.12)]"
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
                Built for contributors
                <br />
                run by{" "}
                <span className="text-blue-500">code.</span>
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
              <FeatureCard key={f.num} f={f} index={i} />
            ))}
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Section3;