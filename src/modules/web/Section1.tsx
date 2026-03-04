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
          <motion.div {...fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/15 text-[13px] text-neutral-400 font-medium mb-6 backdrop-blur-sm">
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
            WeKraft combines intelligent automation, real-time collaboration, and deep
            code understanding into one unified developer platform.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          
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
                <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest">Collaboration</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-3 leading-tight">
                Real-time sync across <br className="hidden md:block" />your entire team
              </h3>
              <p className="text-neutral-500 text-[15px] leading-relaxed max-w-md mb-8">
                Every code change, every review, every deployment — synced instantly across all members, all timezones.
              </p>

              <div className="mt-auto relative flex-1 min-h-[200px]">
                <div className="absolute inset-0 rounded-xl border border-white/[0.06] bg-gray-900 backdrop-blur-sm overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.04]">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      </div>
                      <span className="text-[11px] text-neutral-600 ml-3 font-mono">app/dashboard/page.tsx</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-1.5">
                        {["#3b82f6", "#ec4899", "#10b981"].map((c, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + i * 0.15, type: "spring" }}
                            className="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center"
                            style={{ backgroundColor: c }}
                          >
                            <span className="text-[7px] font-bold text-white">{["A", "S", "R"][i]}</span>
                          </motion.div>
                        ))}
                      </div>
                      <span className="text-[10px] text-neutral-600">3 active</span>
                    </div>
                  </div>

                  <div className="px-4 py-3 font-mono text-[11px] space-y-1.5">
                    {[
                      { num: "1", code: "export default function Dashboard() {", color: "text-blue-400" },
                      { num: "2", code: "  const metrics = useMetrics();", color: "text-neutral-400" },
                      { num: "3", code: "  const team = useTeamSync();", color: "text-neutral-400", highlight: true },
                      { num: "4", code: "", color: "" },
                      { num: "5", code: "  return (", color: "text-neutral-400" },
                      { num: "6", code: '    <Layout title="Overview">', color: "text-emerald-400/80" },
                    ].map((line, i) => (
                      <div key={i} className={`flex items-center gap-3 ${line.highlight ? "bg-blue-500/[0.06] -mx-4 px-4 py-0.5 border-l-2 border-blue-500/40" : ""}`}>
                        <span className="text-neutral-700 w-4 text-right select-none">{line.num}</span>
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
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
                <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest">Automation</span>
              </div>

              <h3 className="text-xl font-semibold text-white tracking-tight mb-3 leading-tight">
                Accelerate every pipeline
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed mb-8">
                Offload repetitive tasks to our AI-first infrastructure. Ship 3x faster.
              </p>

              <div className="mt-auto space-y-3 bg-neutral-200 py-8 px-3 rounded-lg">
                {[
                  { label: "AI Code Review", status: "Done", statusColor: "text-white", bgColor: "bg-emerald-500", dotColor: "bg-white" },
                  { label: "Auto Testing", status: "Running", statusColor: "text-white", bgColor: "bg-blue-500", dotColor: "bg-white" },
                  { label: "Deploy Prod", status: "Queued", statusColor: "text-black", bgColor: "bg-white", dotColor: "bg-black" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.12 }}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg border border-white/[0.04] ${item.bgColor}`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${item.dotColor} ${item.status === "Running" ? "animate-pulse" : ""}`} />
                      <span className={`text-xs font-medium ${item.statusColor}`}>{item.label}</span>
                    </div>
                    <span className={`text-[10px] font-semibold uppercase tracking-wider  ${item.statusColor}`}>
                      {item.status}
                    </span>
                  </motion.div>
                ))}
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
                <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest">Team Across Globe</span>
              </div>
              <h3 className="text-xl font-semibold text-white tracking-tight mb-2">
                Find & Team Up Globally
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Team up with like minded people from all over the world and craft faster
              </p>
            </div>
            <div className="absolute inset-0 w-full h-full flex items-end justify-center top-1/2 opacity-70">
              <Globe />
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
                <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest">Analytics</span>
              </div>

              <h3 className="text-xl font-semibold text-white tracking-tight mb-2">
                Deep team insights
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed mb-8">
                Understand velocity, throughput, and bottlenecks at a glance.
              </p>

              <div className="mt-auto space-y-4">
                {[
                  { label: "Sprint velocity", value: "92%", width: "92%", color: "bg-emerald-500" },
                  { label: "Code quality", value: "88%", width: "88%", color: "bg-blue-500" },
                  { label: "Deploy frequency", value: "76%", width: "76%", color: "bg-violet-500" },
                ].map((stat, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-neutral-500 font-medium">{stat.label}</span>
                      <span className="text-[11px] text-neutral-400 font-semibold tabular-nums">{stat.value}</span>
                    </div>
                    <div className="h-1 w-full bg-white/[0.04] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: stat.width }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease: "easeOut" }}
                        className={`h-full rounded-full ${stat.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="md:col-span-2 group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-neutral-900/80 to-neutral-950 p-8 min-h-[380px] flex flex-col"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                </div>
                <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest">Security</span>
              </div>

              <h3 className="text-xl font-semibold text-white tracking-tight mb-2">
                Enterprise-grade security
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed mb-8">
                SOC 2 compliant. End-to-end encryption. Zero-trust architecture.
              </p>

              <div className="mt-auto space-y-3">
                {[
                  { icon: LockIcon, label: "E2E Encryption", sub: "AES-256" },
                  { icon: ShieldCheck, label: "SOC 2 Type II", sub: "Certified" },
                  { icon: Check, label: "GDPR Compliant", sub: "EU Ready" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg border border-white/[0.04] bg-white/[0.02]"
                  >
                    <div className="w-7 h-7 rounded-md bg-white/[0.04] flex items-center justify-center">
                      <item.icon className="w-3.5 h-3.5 text-neutral-400" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs text-neutral-300 font-medium block">{item.label}</span>
                    </div>
                    <span className="text-[10px] text-emerald-400/80 font-semibold uppercase tracking-wider">{item.sub}</span>
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
