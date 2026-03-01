"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Users,
  SearchCheck,
  Zap,
  Code2,
  BrainCircuit,
  Activity,
} from "lucide-react";
import { cn } from "@/lib/utils";

const FeatureCard = ({
  tag,
  title,
  description,
  icon: Icon,
  className,
  delay = 0,
  isLarge = false,
}: {
  tag: string;
  title: string;
  description: string;
  icon: any;
  className?: string;
  delay?: number;
  isLarge?: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-950 p-8 transition-colors hover:border-sky-500/30",
        className,
      )}
    >
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-500/5 blur-[80px] transition-all group-hover:bg-sky-500/10" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-4 flex items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400/80">
            {tag}
          </span>
        </div>

        <h3
          className={cn(
            "mb-4 font-medium tracking-tight text-white",
            isLarge ? "text-3xl" : "text-2xl",
          )}
        >
          {title}
        </h3>

        <p className="mb-8 text-neutral-400 leading-relaxed md:max-w-[80%]">
          {description}
        </p>

        <div className="mt-auto relative">
          <div
            className={cn(
              "flex items-center justify-center rounded-2xl border-white/3 bg-white/2 p-8 border",
              isLarge ? "h-64" : "h-48",
            )}
          >
            <div className="absolute bottom-4 right-4 flex gap-2">
              <div className="h-1 w-8 rounded-full bg-white/5" />
              <div className="h-1 w-4 rounded-full bg-sky-500/20" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const NewSection4 = () => {
  return (
    <section className="relative w-full bg-black py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.15] mask-[radial-gradient(ellipse_at_center,black_70%,transparent_100%)]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <header className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/5 px-4 py-1.5 text-xs font-medium text-sky-400"
          >
            <Sparkles className="h-3 w-3" />
            <span>Why Teams Believe in Wekraft</span>
          </motion.div>

          <h2 className="mx-auto max-w-3xl text-4xl md:text-5xl font-light tracking-tight text-white">
            Built for developers who <br />
            <span className="bg-linear-to-r from-sky-400 to-blue-500 bg-clip-text font-medium text-transparent">
              demand excellence
            </span>
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Box 1 */}
          <FeatureCard
            tag="Skill Matching"
            title="Right skill matching for real collaboration"
            description="Our platform analyzes project requirements and aligns them with individual developer strengths, ensuring that every contribution is impactful and every pair is powerful."
            icon={Users}
            delay={0.1}
          />

          {/* Box 2 */}
          <FeatureCard
            tag="Agentic Defense"
            title="Issues don't stay permanent in your codebase"
            description="Autonomous agents detect patterns that lead to technical debt. From architectural inconsistencies to subtle bugs, our guardrails ensure your code quality stays elite."
            icon={SearchCheck}
            delay={0.2}
          />

          {/* Box 3 - Large full width */}
          <FeatureCard
            tag="Productivity Layer"
            title="Intelligent layers over productivity to allow teams to work better"
            description="We've built an orchestration layer that removes cognitive overhead. Developers focus on logic while Wekraft handles the context synchronization, task prioritization, and workflow automation."
            icon={BrainCircuit}
            className="md:col-span-2"
            isLarge={true}
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default NewSection4;
