"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Sparkles,
  CheckSquare,
  GitBranch,
  Lightbulb,
  TrendingUp,
  Zap,
  ArrowRight,
  Terminal,
  Server,
  Activity,
  Cpu,
  LucideX,
  LucideAlertCircle,
} from "lucide-react";
import { Orb } from "@/components/ui/Orb";
import { Button } from "@/components/ui/button";


const ConnectorLine = ({ d, delay = 0 }: { d: string; delay?: number }) => {
  const coords = d.match(/M\s+([\d.]+)\s+([\d.]+)/);
  const startX = coords ? coords[1] : "0";
  const startY = coords ? coords[2] : "0";

  return (
    <g>
      <motion.path
        d={d}
        fill="none"
        stroke="url(#connectorGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay, ease: "easeInOut" }}
      />
      <motion.path
        d={d}
        fill="none"
        stroke="#60a5fa"
        strokeWidth="2.5"
        strokeLinecap="round"
        filter="url(#glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: [0, 0.1, 0],
          pathOffset: [0, 0.9, 1],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: delay + 1,
          ease: "easeInOut",
        }}
      />
      <motion.circle
        cx={startX}
        cy={startY}
        r="3.5"
        fill="#60a5fa"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 1.2, type: "spring", stiffness: 200 }}
        className="drop-shadow-[0_0_8px_rgba(96,165,250,1)]"
      />
    </g>
  );
};

const FeatureCard = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={`max-w-[300px] w-full rounded-2xl bg-linear-to-br from-gray-800 to-gray-950 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] p-4 ${className}`}
  >
    {children}
  </motion.div>
);

const Section2 = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
  const BLUE_ORB: [string, string] = ["#CADCFC", "#A0B9D1"];

  return (
    <motion.div
      ref={containerRef}
      style={{ scale, opacity }}
      className="min-h-screen w-full bg-black overflow-hidden selection:bg-blue-500/30 dark relative z-0"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808016_1px,transparent_1px),linear-gradient(to_bottom,#80808016_1px,transparent_1px)] bg-size-[36px_36px]" />
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/3 w-full max-w-[520px] h-[500px] bg-blue-500/30 blur-[160px] rounded-full pointer-events-none" />
      </div>
      <div className="h-full flex flex-col lg:p-20 md:p-12 p-6 max-w-7xl mx-auto">
        <header className="w-full max-w-6xl mb-12 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
          >
            <Sparkles className="w-3 h-3" />
            <span>Autonomous Agents</span>
          </motion.div>
          <h1 className="text-4xl text-center mx-auto  font-light tracking-tight leading-tight max-w-2xl text-gray-300 font-pop">
            <span className="text-blue-500 font-sans font-semibold">
              Your AI assistant
            </span>{" "}
            for faster executions. Agents think, plan, and execute with you.
          </h1>
        </header>

        <main className="relative w-full py-16 md:py-24 mx-auto">
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1000 600"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
          >
            <defs>
              <linearGradient
                id="connectorGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.15" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <g filter="url(#glow)">
              <ConnectorLine
                d="M 240 160 H 320 Q 360 160, 360 210 V 260 Q 360 300, 420 300 H 460"
                delay={0.2}
              />
              <ConnectorLine
                d="M 240 440 H 320 Q 360 440, 360 390 V 340 Q 360 300, 420 300 H 460"
                delay={0.4}
              />
              <ConnectorLine
                d="M 760 160 H 680 Q 640 160, 640 210 V 260 Q 640 300, 580 300 H 540"
                delay={0.6}
              />
              <ConnectorLine
                d="M 760 440 H 680 Q 640 440, 640 390 V 340 Q 640 300, 580 300 H 540"
                delay={0.8}
              />
            </g>
          </svg>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-x-32 gap-y-12 items-center max-w-7xl mx-auto px-4">
            <div className="flex flex-col gap-12">
              <FeatureCard delay={0.1}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/15 flex items-center justify-center">
                    <CheckSquare className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-white tracking-wide">
                    Task Lists
                  </h3>
                </div>
                <div className="space-y-2.5 bg-white/5 border border-white/10 p-3 rounded-xl backdrop-blur-md">
                  {[
                    {
                      text: "Auth Setup",
                      done: true,
                      tag: "Done",
                    },
                    {
                      text: "Analytics report",
                      done: true,
                      tag: "Done",
                    },
                    {
                      text: "Fix Leakage",
                      done: false,
                      tag: "Assigned",
                    },
                  ].map((t, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs group/task "
                    >
                      <span className="text-gray-300 truncate flex-1 group-hover/task:text-white transition-colors">
                        {t.text}
                      </span>
                      <span
                        className={`shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold ${
                          t.done
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-red-500/10 text-red-400 border border-red-500/20"
                        }`}
                      >
                        {t.done && <CheckSquare className="w-2.5 h-2.5" />}
                        {t.tag}
                      </span>
                      <span className="text-[10px] tracking-tight text-amber-500/80">
                        {t.done ? "" : "Agent running"}
                      </span>
                    </div>
                  ))}
                </div>
              </FeatureCard>

              <FeatureCard delay={0.3}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/15 flex items-center justify-center">
                    <GitBranch className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-white tracking-wide">
                    Auto Review Events
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded bg-emerald-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-sm bg-emerald-400" />
                    </div>
                    <span className="text-xs text-gray-300 font-medium">
                      Commit SHA sh756003bB
                    </span>
                  </div>
                  <div className="flex items-center gap-2 pl-2">
                    <ArrowRight className="w-3 h-3 text-red-500" />
                    <span className="text-xs text-red-500">
                      .env Found on Line 263{" "}
                      <span className="text-white">Assigned to Rox</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <Button size="sm" variant="outline" className="text-[10px] h-7 px-3 border-white/10 hover:bg-white/5 text-white">
                      <Zap className="w-2.5 h-2.5 mr-1 text-blue-400" /> Assign to Rox
                    </Button>

                    <Button size="sm" variant="ghost" className="text-[10px] h-7 px-3 text-gray-500 hover:text-red-400">
                      Ignore <LucideX className="w-2 h-2 ml-1" />
                    </Button>
                  </div>
                </div>
              </FeatureCard>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-12 bg-blue-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
                <div className="bg-gray-800 relative h-40 w-40  rounded-full p-1.5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_2px_8px_rgba(0,0,0,0.5)]">
                  <div className="bg-black h-full w-full overflow-hidden rounded-full shadow-[inset_0_0_12px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_0_12px_rgba(0,0,0,0.3)]">
                    <Orb
                      colors={BLUE_ORB}
                      seed={1000}
                      // agentState={'idle'}
                      theme="dark"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-12">
              <FeatureCard delay={0.2}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/15 flex items-center justify-center">
                      <Server className="w-3.5 h-3.5 text-blue-400" />
                    </div>
                    <h3 className="text-sm font-semibold text-white tracking-wide">
                      Deployment Tracked
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
                      Live
                    </span>
                  </div>
                </div>

                <div className="space-y-3 bg-white/5 rounded-xl p-3 border border-white/10 font-mono text-[10px]">
                  <div className="flex items-center gap-2 text-blue-500">
                    <Terminal className="w-3 h-3" />
                    <span>wekraft ~ deploy --prod</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-gray-300">
                      <span>Optimization</span>
                      <span className="text-emerald-600">99.2%</span>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "99.2%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-emerald-500"
                      />
                    </div>
                  </div>
                  <div className="pt-1 flex flex-col gap-1 text-gray-500">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-emerald-500" />
                      <span>Deployment Tracked from Vercel...</span>
                    </div>
                  </div>
                </div>
              </FeatureCard>

              <FeatureCard delay={0.4}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/15 flex items-center justify-center">
                    <Zap className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-white tracking-wide">
                    Auto Assign Issues
                  </h3>
                </div>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-500/[0.07] border border-blue-500/10">
                    <Zap className="w-3 h-3 text-blue-400 shrink-0" />
                    <span className="text-xs text-gray-300">
                      Auto Issue Assigning
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-cyan-500" />
                      Issues Fixes
                    </span>
                    <span className="flex items-center gap-1">
                      <Zap className="w-3 h-3 text-amber-400" />
                      Skill based Matching
                    </span>
                  </div>
                </div>
              </FeatureCard>
            </div>
          </div>
        </main>
      </div>
    </motion.div>
  );
};

export default Section2;
