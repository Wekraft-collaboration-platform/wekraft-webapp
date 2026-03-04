"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  SearchCheck,
  Zap,
  Code2,
  BrainCircuit,
  Activity,
  ArrowRight,
  CheckCircle2,
  GitPullRequest,
  AlertTriangle,
  Target,
  Clock,
  Sparkles,
  Flag,
} from "lucide-react";
import { cn } from "@/lib/utils";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
} as const;

const SkillMatchingUI = () => (
  <div className="w-full h-full flex items-center justify-center p-6">
    <div className="w-full max-w-sm space-y-3">
      <div className="flex items-center gap-2 mb-4">
        <GitPullRequest className="w-3.5 h-3.5 text-blue-400" />
        <span className="text-[11px] text-neutral-400 font-mono">PR #847 — Refactor auth module</span>
      </div>

      {[
        { name: "Alex Chen", skill: "Auth / Security", match: 97, selected: true },
        { name: "Sarah Kim", skill: "React / Frontend", match: 82, selected: false },
        { name: "Ryan Patel", skill: "Node.js / Backend", match: 71, selected: false },
      ].map((dev, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.1 }}
          className={cn(
            "flex items-center gap-3 px-3.5 py-3 rounded-xl border transition-all",
            dev.selected
              ? "border-blue-500/30 bg-blue-500/[0.06]"
              : "border-white/[0.04] bg-white/[0.02]"
          )}
        >
          <div className={cn(
            "w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-bold",
            dev.selected ? "bg-blue-500/20 text-blue-400" : "bg-white/[0.05] text-neutral-500"
          )}>
            {dev.name.split(" ").map(n => n[0]).join("")}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs text-white font-medium">{dev.name}</div>
            <div className="text-[10px] text-neutral-500">{dev.skill}</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-12 h-1 bg-white/[0.04] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${dev.match}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                className={cn(
                  "h-full rounded-full",
                  dev.selected ? "bg-blue-500" : "bg-neutral-600"
                )}
              />
            </div>
            <span className={cn(
              "text-[10px] font-bold tabular-nums",
              dev.selected ? "text-blue-400" : "text-neutral-600"
            )}>
              {dev.match}%
            </span>
          </div>
          {dev.selected && (
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
          )}
        </motion.div>
      ))}

      <div className="flex items-center gap-2 pt-1">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
        <span className="text-[10px] text-neutral-500">Auto-assigned based on expertise graph</span>
      </div>
    </div>
  </div>
);

const TimelineTrackingUI = () => {
  const milestones = [
    { id: 1, name: "API Design", status: "completed", week: 1, width: 2 },
    { id: 2, name: "Core Implementation", status: "completed", week: 2, width: 3 },
    { id: 3, name: "Code Review", status: "in-progress", week: 4, width: 2 },
    { id: 4, name: "Testing Phase", status: "pending", week: 5, width: 3 },
    { id: 5, name: "Deploy", status: "pending", week: 7, width: 1 },
  ];

  const weeks = ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"];

  return (
    <div className="w-full h-full flex items-center justify-center mt-10 ">
      <div className="w-full max-w-4xl mt-10 bg-white/5 px-10 py-6 rounded-3xl ">
        {/* Header Stats */}
        <div className="flex items-center gap-10 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <div className="text-[10px] text-neutral-500 uppercase tracking-wider">Completed</div>
              <div className="text-sm font-semibold text-white">2 of 5</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
              <Clock className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <div className="text-[10px] text-neutral-500 uppercase tracking-wider">On Track</div>
              <div className="text-sm font-semibold text-white">Ship by Mar 15</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-indigo-400" />
            </div>
            <div>
              <div className="text-[10px] text-neutral-500 uppercase tracking-wider">AI Confidence</div>
              <div className="text-sm font-semibold text-white">94%</div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Week labels */}
          <div className="flex mb-3">
            {weeks.map((week, i) => (
              <div key={week} className="flex-1 text-center">
                <span className="text-[10px] text-neutral-600 font-mono">{week}</span>
              </div>
            ))}
          </div>

          {/* Grid lines */}
          <div className="absolute inset-0 flex pt-6">
            {weeks.map((_, i) => (
              <div key={i} className="flex-1 border-l border-white/[0.03] first:border-l-0" />
            ))}
          </div>

          {/* Milestones */}
          <div className="space-y-3 relative">
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-28 shrink-0">
                  <span className="text-[11px] text-neutral-400 font-medium">{milestone.name}</span>
                </div>
                <div className="flex-1 h-8 relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(milestone.width / weeks.length) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                    style={{ marginLeft: `${((milestone.week - 1) / weeks.length) * 100}%` }}
                    className={cn(
                      "h-full rounded-md flex items-center px-2.5 gap-1.5",
                      milestone.status === "completed" && "bg-emerald-500/15 border border-emerald-500/20",
                      milestone.status === "in-progress" && "bg-amber-500/15 border border-amber-500/20",
                      milestone.status === "pending" && "bg-white/[0.04] border border-white/[0.06]"
                    )}
                  >
                    {milestone.status === "completed" && (
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    )}
                    {milestone.status === "in-progress" && (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        <Clock className="w-3 h-3 text-amber-400 shrink-0" />
                      </motion.div>
                    )}
                    {milestone.status === "pending" && (
                      <div className="w-3 h-3 rounded-full border border-neutral-600 shrink-0" />
                    )}
                    <span className={cn(
                      "text-[10px] font-medium truncate",
                      milestone.status === "completed" && "text-emerald-400",
                      milestone.status === "in-progress" && "text-amber-400",
                      milestone.status === "pending" && "text-neutral-500"
                    )}>
                      {milestone.status === "completed" ? "Done" : milestone.status === "in-progress" ? "Active" : "Queued"}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Current time indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="absolute top-6 bottom-0 w-px bg-gradient-to-b from-violet-500 to-transparent"
            style={{ left: "45%" }}
          >
            <div className="absolute -top-1 -translate-x-1/2">
              <div className="w-2 h-2 rounded-full bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
            </div>
            <div className="absolute -top-6 -translate-x-1/2 whitespace-nowrap">
              <span className="text-[9px] text-violet-400 font-medium">Today</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom insight */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="mt-6 flex items-center gap-2 px-3 py-2 rounded-lg bg-violet-500/[0.04] border border-violet-500/10"
        >
          <Target className="w-3.5 h-3.5 text-violet-400 shrink-0" />
          <span className="text-[11px] text-neutral-400">
            <span className="text-violet-400 font-medium">WeKraft Agent:</span> On track to ship 2 days early. No blockers detected.
          </span>
        </motion.div>
      </div>
    </div>
  );
};

const AgenticDefenseUI = () => (
  <div className="w-full h-full flex items-center justify-center p-4">
    <div className="w-full max-w-md rounded-xl border border-white/[0.06] bg-gray-900 backdrop-blur-sm overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.04] bg-white/[0.02]">
        <Code2 className="w-3 h-3 text-neutral-600" />
        <span className="text-[11px] text-neutral-500 font-mono">auth/session.ts</span>
        <div className="ml-auto flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          <span className="text-[9px] text-amber-400/80 font-medium">1 issue</span>
        </div>
      </div>

      <div className="p-3 font-mono text-[10px] leading-relaxed space-y-0.5">
        <div className="flex items-center gap-2">
          <span className="text-neutral-700 w-5 text-right select-none">14</span>
          <span className="text-purple-400">export const</span>
          <span className="text-blue-300"> validateSession</span>
          <span className="text-neutral-500"> = () =&gt; {"{"}</span>
        </div>
        <div className="flex items-center gap-2 bg-red-500/[0.06] -mx-3 px-3 py-1 border-l-2 border-red-500/40">
          <span className="text-neutral-700 w-5 text-right select-none">15</span>
          <span className="text-neutral-400">  if (!user) return</span>
          <span className="text-red-400"> null</span>
          <span className="text-neutral-500">;</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-neutral-700 w-5 text-right select-none">16</span>
          <span className="text-orange-300">  return </span>
          <span className="text-neutral-400">await getProfile();</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-neutral-700 w-5 text-right select-none">17</span>
          <span className="text-neutral-500">{"}"}</span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mx-3 mb-3 p-3 rounded-lg bg-emerald-500/[0.06] border border-emerald-500/20"
      >
        <div className="flex items-center gap-2 mb-1.5">
          <SearchCheck className="w-3 h-3 text-emerald-400" />
          <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-wider">Agent suggestion</span>
        </div>
        <p className="text-[10px] text-neutral-400 leading-relaxed">
          Possible null reference at line 15. Consider adding a guard clause with proper error propagation.
        </p>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-[10px] text-emerald-400 font-medium cursor-pointer hover:text-emerald-300 transition-colors">Apply fix →</span>
          <span className="text-[10px] text-neutral-600 cursor-pointer hover:text-neutral-500 transition-colors">Dismiss</span>
        </div>
      </motion.div>
    </div>
  </div>
);


const NewSection4 = () => {
  return (
    <section className="relative w-full bg-black py-32 md:py-40 overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="mb-20 md:mb-28 max-w-3xl">
          <motion.div
            {...fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-[13px] text-neutral-400 font-medium mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Why teams choose WeKraft
          </motion.div>

          <motion.h2
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="text-[2.5rem] md:text-[3.25rem] font-semibold tracking-[-0.03em] text-white leading-[1.1] mb-5"
          >
            Built for developers who
            <br />
            <span className="bg-gradient-to-r from-neutral-400 to-neutral-600 bg-clip-text text-transparent">
              demand excellence
            </span>
          </motion.h2>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="text-lg text-neutral-500 leading-relaxed max-w-xl"
          >
            Three pillars that make WeKraft the platform of choice for
            high-performance engineering teams.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-linear-to-b from-white/10 to-neutral-950"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10 p-8 pb-0">
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-500/70 mb-4 block">Skill Matching</span>
              <h3 className="text-2xl font-semibold text-white tracking-tight mb-3 leading-tight">
                Right person, right task, every time
              </h3>
              <p className="text-neutral-500 text-[15px] leading-relaxed max-w-md">
                Our expertise graph analyzes developer strengths and project requirements to optimize every assignment.
              </p>
            </div>
            <div className="h-[320px]">
              <SkillMatchingUI />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-linear-to-b from-white/10 to-neutral-950"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10 p-8 pb-0">
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-500/70 mb-4 block">Agentic Defense</span>
              <h3 className="text-2xl font-semibold text-white tracking-tight mb-3 leading-tight">
                Issues don&apos;t survive in your codebase
              </h3>
              <p className="text-neutral-500 text-[15px] leading-relaxed max-w-md">
                Autonomous agents detect patterns that lead to tech debt — from architecture anti-patterns to subtle bugs.
              </p>
            </div>
            <div className="h-[320px]">
              <AgenticDefenseUI />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-2 group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-linear-to-b from-white/10 to-neutral-950"
          >
            <div className="absolute inset-0 bg-linear-to-br from-violet-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10 p-8 md:p-10 pb-0">
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-500/70 mb-4 block">Intelligent Tracking</span>
              <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-3 leading-tight">
                Intelligent layers that remove cognitive overhead
              </h3>
              <p className="text-neutral-500 text-[15px] leading-relaxed max-w-2xl">
                From code push to production — WeKraft orchestrates every step. Every task / Issues / Features are tracked and assured that the project dont slips the deadline
              </p>
            </div>
            <div className="h-[280px] overflow-hidden ">
              <TimelineTrackingUI />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewSection4;
