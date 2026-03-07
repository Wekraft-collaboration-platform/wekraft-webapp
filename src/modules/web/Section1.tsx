"use client";
import React from "react";
import { motion } from "framer-motion";
import { Globe } from "@/components/ui/globe";
import {
  Users,
  Zap,
  Code,
  ShieldCheck,
  MousePointer2,
  Layers,
  Sparkles,
  Command as CommandIcon,
  Activity,
  Cpu,
  Check,
  Lock as LockIcon,
  GitBranch,
  Terminal,
  BarChart3,
  ArrowRight,
  Timer,
  TrendingUp,
} from "lucide-react";

export const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
} as const;

const Section1 = () => {
  return (
    <section className="relative w-full bg-black overflow-hidden selection:bg-blue-500/30">
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-32 md:py-40">
        <div className="max-w-3xl mb-24">
          <motion.div
            {...fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/15 text-[13px] text-neutral-400 font-medium mb-6 backdrop-blur-sm"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Purpose-built for engineering teams
          </motion.div>

          <motion.h2
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="text-5xl leading-[1.1] font-semibold tracking-[-0.03em] text-white mb-6"
          >
            Build with clarity.
            <br />
            <span className="bg-linear-to-r from-neutral-400 to-neutral-600 bg-clip-text text-transparent">
              Ship with confidence.
            </span>
          </motion.h2>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="text-lg text-neutral-500 leading-relaxed max-w-xl"
          >
            WeKraft combines intelligent PM, real-time collaboration,
            and deep Analysis into one unified developer platform.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4 group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-linear-to-b from-white/10 to-neutral-950 p-8 md:p-10 min-h-[420px] flex flex-col"
          >
            <div className="relative z-10 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <Users className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest">
                  Collaboration
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-3 leading-tight">
                Real-time sync across <br className="hidden md:block" />
                your entire team
              </h3>
              <p className="text-neutral-500 text-[15px] leading-relaxed max-w-md mb-8">
                Every code change, every review, every deployment — synced
                instantly across all members, all timezones.
              </p>

              <div className="mt-auto relative flex-1 min-h-[200px]">
                <div className="absolute inset-0 rounded-xl border border-white/[0.06] bg-gray-900 backdrop-blur-sm overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.04]">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                      </div>
                      <span className="text-[11px] text-neutral-600 ml-3 font-mono">
                        app/dashboard/page.tsx
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-1.5">
                        {["#3b82f6", "#ec4899", "#10b981"].map((c, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: 0.5 + i * 0.15,
                              type: "spring",
                            }}
                            className="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center"
                            style={{ backgroundColor: c }}
                          >
                            <span className="text-[7px] font-bold text-white">
                              {["A", "S", "R"][i]}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                      <span className="text-[10px] text-neutral-600">
                        3 active
                      </span>
                    </div>
                  </div>

                  <div className="px-4 py-3 font-mono text-[11px] space-y-1.5">
                    {[
                      {
                        num: "1",
                        code: "export default function Dashboard() {",
                        color: "text-blue-400",
                      },
                      {
                        num: "2",
                        code: "  const metrics = useMetrics();",
                        color: "text-neutral-400",
                      },
                      {
                        num: "3",
                        code: "  const team = useTeamSync();",
                        color: "text-neutral-400",
                        highlight: true,
                      },
                      { num: "4", code: "", color: "" },
                      {
                        num: "5",
                        code: "  return (",
                        color: "text-neutral-400",
                      },
                      {
                        num: "6",
                        code: '    <Layout title="Overview">',
                        color: "text-emerald-400/80",
                      },
                    ].map((line, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-3 ${line.highlight ? "bg-blue-500/[0.06] -mx-4 px-4 py-0.5 border-l-2 border-blue-500/40" : ""}`}
                      >
                        <span className="text-neutral-700 w-4 text-right select-none">
                          {line.num}
                        </span>
                        <span className={line.color}>{line.code}</span>
                      </div>
                    ))}
                  </div>

                  <motion.div
                    className="absolute pointer-events-none z-20"
                    initial={{ opacity: 0 }}
                    animate={{
                      top: ["45%", "35%", "55%", "45%"],
                      left: ["60%", "70%", "55%", "60%"],
                      opacity: 1,
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <MousePointer2 className="w-3.5 h-3.5 text-pink-400 fill-pink-400" />
                    <div className="px-1.5 py-0.5 rounded text-[8px] font-bold text-white bg-pink-500 mt-0.5 whitespace-nowrap shadow-lg">
                      Sarah
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-linear-to-b from-white/10 to-neutral-950 p-8 min-h-[420px] flex flex-col"
          >
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <Zap className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest">
                  Automation
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white tracking-tight mb-3 leading-tight">
                Accelerate every pipeline
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed mb-8">
                Offload repetitive tasks to our AI-first infrastructure. Ship 3x
                faster.
              </p>

              {/* Element to display              {/* Element to display */}
              <div className="mt-auto">
                {/* Stats Header */}
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="text-2xl font-bold text-white mb-1"
                    >
                      +42%
                    </motion.div>
                    <div className="text-[11px] text-neutral-500 capitalize tracking-wider">
                      Deployment Velocity
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] text-emerald-400 font-medium">Live</span>
                  </div>
                </div>

                {/* Bar Chart */}
                <div className="relative h-28 flex items-end justify-between gap-3 px-2">
                  {/* Grid lines */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-full h-px bg-white/[0.03]" />
                    ))}
                  </div>

                  {[
                    { month: "Jan", height: 48, label: "12/wk" },
                    { month: "Feb", height: 72, label: "18/wk" },
                    { month: "Mar", height: 96, label: "28/wk" },
                    { month: "Apr", height: 116, label: "34/wk" },
                    { month: "May", height: 128, label: "42/wk" },
                  ].map((bar, i) => (
                    <div key={bar.month} className="group flex-1 flex flex-col items-center gap-2 relative z-10 h-full justify-end cursor-pointer">
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        whileInView={{ height: bar.height, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                        className="w-full max-w-[40px] rounded-t-xl bg-gradient-to-t from-blue-600 to-blue-400 relative"
                      >
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 rounded-t-xl bg-blue-400 opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-sm" />
                        <div className="absolute inset-0 rounded-t-xl ring-1 ring-blue-400/0 group-hover:ring-blue-400/60 transition-all duration-300" />
                      </motion.div>
                      <span className="text-[10px] text-neutral-500 group-hover:text-blue-400 transition-colors duration-300 font-medium">{bar.month}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom insight */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 }}
                  className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-[11px] text-neutral-400">3.5x faster than industry avg</span>
                  </div>
                  <span className="text-[10px] text-neutral-600">Last 5 months</span>
                </motion.div>
              </div>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-2 group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-linear-to-b from-white/10 to-neutral-950 p-8 min-h-[380px] flex flex-col"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <Users className="w-4 h-4 text-blue-500" />
                </div>
                <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest">
                  Team Across Globe
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white tracking-tight mb-2">
                Find & Team Up Globally
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Team up with like minded people from all over the world and
                craft faster
              </p>
            </div>

            <div className="absolute inset-0 w-full h-full flex items-end justify-center top-[45%] scale-105 opacity-80">

              <Globe />
              {[
                { top: "0%", left: "15%", tag: "Rox", img: "https://i.pravatar.cc/100?img=11", delay: 0 },
                { top: "10%", right: "20%", tag: "Bhanu", img: "https://i.pravatar.cc/100?img=12", delay: 2.5 },
                { top: "-5%", left: "28%", tag: "Ritesh", img: "https://i.pravatar.cc/100?img=13", delay: 5 },
                { top: "5%", right: "32%", tag: "Mia", img: "https://i.pravatar.cc/100?img=14", delay: 7.5 },
              ].map((avatar, i) => (
                <motion.div
                  key={i}
                  className="absolute z-20 flex flex-col items-center pointer-events-none"
                  style={{ top: avatar.top, left: avatar.left, right: avatar.right }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    y: [10, 0, 0, -10],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: avatar.delay,
                  }}
                >
                  <div className="relative group flex flex-col items-center">
                    <div className="w-9 h-9 rounded-full border border-white/20 bg-black/60 p-0.5 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.15)] overflow-hidden z-10">
                      <img src={avatar.img} alt={avatar.tag} className="w-full h-full rounded-full object-cover opacity-90" />
                    </div>
                    <div className="absolute -bottom-6 px-2 py-0.5 bg-black/80 border border-white/10 rounded-md text-[9px] font-medium text-white/90 backdrop-blur-md whitespace-nowrap tracking-wide z-20">
                      {avatar.tag}
                    </div>
                  </div>
                  {/* Line connecting to globe */}
                  <motion.div
                    className="w-px bg-gradient-to-b from-white/40 to-transparent mt-8"
                    initial={{ height: 0 }}
                    animate={{ height: ["0px", "50px", "50px", "0px"] }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: avatar.delay,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-linear-to-b from-white/10 to-neutral-950 p-8 min-h-[380px] flex flex-col"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <BarChart3 className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest">
                  Integration
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white tracking-tight mb-2">
                Integrate with your favorite platforms.
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed mb-8">
                Easy integration with your favorite platforms. Sync all with MCP servers.
              </p>

              {/* Tools */}
              <div className="mt-auto">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { src: "/github.png", name: "GitHub" },
                    { src: "/notion.png", name: "Notion", size: "w-16 h-16" },
                    { src: "/slack.png", name: "Slack" },
                    { src: "/calender.png", name: "Calendar" },
                    { src: "/drive.png", name: "Drive" },
                    { src: "/docs.png", name: "Docs" },
                  ].map((tool, i) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.07, ease: "easeOut" }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="group flex flex-col items-center gap-2 cursor-pointer"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center group-hover:border-white/[0.15] group-hover:bg-white/[0.07] transition-all duration-300">
                        <img
                          src={tool.src}
                          alt={tool.name}
                          className={`${tool.size ?? 'w-8 h-8'} object-contain`}
                        />
                      </div>
                      <span className="text-[10px] text-neutral-600 group-hover:text-neutral-400 transition-colors font-medium">{tool.name}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="mt-5 flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    <motion.span
                      animate={{ color: ["#737373", "#60a5fa", "#3b82f6", "#60a5fa", "#737373"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="text-[11px] font-medium"
                    >
                      + more integrations via MCP servers
                    </motion.span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="md:col-span-2 group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/10 to-neutral-950 p-8 min-h-[380px] flex flex-col"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <Timer className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest">
                  Always on time
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white tracking-tight mb-2">
                Never Miss your deadlines
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed mb-8">
                Never let any features to be left behind. wekraft help teams
                track progress & adjust work before they fall behind.
              </p>

              <div className="mt-auto space-y-3">
                {[
                  {
                    task: "Landing page animations",
                    user: "https://i.pravatar.cc/40?img=12",
                    deadline: "Due today",
                    status: "At Risk",
                    color: "text-amber-400",
                  },
                  {
                    task: "API integration",
                    user: "https://i.pravatar.cc/40?img=5",
                    deadline: "Due tomorrow",
                    status: "In Progress",
                    color: "text-blue-400",
                  },
                  {
                    task: "Auth bug fix",
                    user: "https://i.pravatar.cc/40?img=8",
                    deadline: "Completed",
                    status: "Done",
                    color: "text-emerald-400",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg border border-white/[0.04] bg-white/[0.02] hover:border-blue-500/25 hover:bg-blue-500/[0.05] transition-all duration-300 cursor-pointer"
                  >
                    {/* Avatar */}
                    <img
                      src={item.user}
                      className="w-8 h-8 rounded-full border border-white/10"
                    />

                    {/* Task */}
                    <div className="flex-1">
                      <span className="text-xs text-neutral-200 font-medium block">
                        {item.task}
                      </span>
                      <span className="text-[10px] text-neutral-500">
                        {item.deadline}
                      </span>
                    </div>

                    {/* Status */}
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-wider ${item.color}`}
                    >
                      {item.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
