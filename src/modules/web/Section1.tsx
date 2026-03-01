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
  Star,
  Globe as GlobeIcon,
  LucideActivity,
  LucideAlertOctagon,
} from "lucide-react";

const avatars = [
  "https://i.pravatar.cc/40?img=1",
  "https://i.pravatar.cc/40?img=5",
  "https://i.pravatar.cc/40?img=8",
  "https://i.pravatar.cc/40?img=12",
  "https://i.pravatar.cc/40?img=16",
  "https://i.pravatar.cc/40?img=20",
];

const Cursor = ({
  name,
  color,
  x,
  y,
  delay,
}: {
  name: string;
  color: string;
  x: string;
  y: string;
  delay: number;
}) => (
  <motion.div
    className="absolute z-30 pointer-events-none flex flex-col items-start"
    initial={{ opacity: 0 }}
    animate={{
      top: [y, `${parseInt(y) - 5}%`, `${parseInt(y) + 5}%`, y],
      left: [x, `${parseInt(x) + 10}%`, `${parseInt(x) - 5}%`, x],
      opacity: 1,
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
      delay,
    }}
  >
    <MousePointer2 className="w-4 h-4" style={{ color, fill: color }} />
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      className="px-1.5 py-0.5 rounded text-[9px] font-bold text-white whitespace-nowrap shadow-lg"
      style={{ backgroundColor: color }}
    >
      {name}
    </motion.div>
  </motion.div>
);

const Section1 = () => {
  return (
    <div className="min-h-screen bg-black overflow-hidden selection:bg-blue-500/30">
      <div className="h-full flex flex-col lg:p-20 md:p-12 p-6 max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="w-full max-w-6xl mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
          >
            <Sparkles className="w-3 h-3" />
            <span>The New Standard of Productivity</span>
          </motion.div>
          <h1 className="text-4xl  font-light tracking-tight leading-tight max-w-2xl text-gray-300 font-pop">
            Collaborate smarter
            <br />
            execute faster, and
            <br />
            <span className=" bg-linear-to-r from-sky-400 to-blue-700 font-semibold font-sans text-5xl whitespace-nowrap bg-clip-text text-transparent">
              {" "}
              Build what actually matters.
            </span>
          </h1>
        </header>

        {/* Bento Grid Container */}
        <main className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Collaboration Sub-system (Span 2) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 relative overflow-hidden rounded-[2.5rem] bg-linear-to-br from-sky-400 via-blue-500 to-blue-700 h-105 pt-8 px-8 flex flex-col items-center text-center group"
          >
            <div className="relative z-10">
              <h2 className="text-2xl font-medium tracking-tight text-white mb-3">
                Real-time Sync & Synergy
              </h2>
              <p className="text-blue-100/80 max-w-lg text-lg">
                Unite your team in a shared digital workspace where every pixel
                and line of code updates instantly across all timezones.
              </p>
            </div>

            {/* Collaborative Canvas Mockup */}
            <div className="absolute -bottom-10 w-[85%] h-[60%] bg-white backdrop-blur-xl rounded-t-4xl border-t-4 border-x-4 border-black/20 shadow-2xl overflow-hidden transition-all group-hover:-translate-y-6">
              <div className="flex items-center gap-2 p-4 border-b border-black/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
              </div>

              <div className="p-6 grid grid-cols-2 gap-4 h-full relative">
                {/* Simulated Content Blocks */}
                <div className="space-y-3">
                  <motion.div
                    animate={{ width: ["100%", "90%", "100%"] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="h-4 w-full bg-black/10 rounded-full"
                  />
                  <div className="h-4 w-3/4 bg-black/5 rounded-full" />
                  <div className="h-24 w-full bg-black/5 rounded-xl border border-black/10 p-3">
                    <div className="h-2 w-full bg-black/10 rounded mb-2" />
                    <div className="h-2 w-2/3 bg-black/10 rounded mb-2" />
                    <div className="h-2 w-1/2 bg-black/10 rounded" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-32 w-full bg-gray-200 rounded-xl border border-black/10 flex items-center justify-center relative overflow-hidden">
                    <h1 className="text-muted-foreground/50 text-sm font-medium">
                      <LucideAlertOctagon
                        className="text-black/40 w-5 h-5 inline"
                        strokeWidth={1}
                      />
                      {" "}
                      Issues hav been detected in file <br />{" "}
                      <span className="text-rose-500">
                        index.tsx. Resolve it.
                      </span>
                    </h1>
                    <motion.div
                      animate={{
                        left: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute top-0 w-20 h-full bg-white/10 skew-x-12 blur-xl"
                    />
                  </div>
                </div>

                {/* Animated Cursors */}
                <Cursor
                  name="Alex (Design)"
                  color="#3b82f6"
                  x="20%"
                  y="30%"
                  delay={0}
                />
                <Cursor
                  name="Sarah (Frontend)"
                  color="#ec4899"
                  x="65%"
                  y="45%"
                  delay={1}
                />
                <Cursor
                  name="Ryan (DevOps)"
                  color="#10b981"
                  x="10%"
                  y="10%"
                  delay={2.5}
                />
              </div>
            </div>
          </motion.div>

          {/* Card 2: AI Execution (Span 1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 relative overflow-hidden rounded-[2.5rem] bg-linear-to-b from-gray-800 to-gray-950 h-105 p-8 flex flex-col items-center justify-end text-center group"
          >
            <div className="absolute top-12 w-full flex justify-center perspective-[1000px]">
              <div className="w-68 bg-white border border-white/10 rounded-2xl p-3.5 shadow-2xl transition-all duration-500 group-hover:rotate-0 rotate-3">
                <div className="flex items-center gap-2 mb-6 text-gray-400">
                  <Cpu className="w-4 h-4" />
                  <span className="text-[10px] text-muted-foreground tracking-widest font-bold">
                    AUTOMATION CORE
                  </span>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      label: "AI Translation",
                      status: "Active",
                      color: "bg-blue-500",
                    },
                    {
                      label: "Cloud Deployment",
                      status: "Queued",
                      color: "bg-gray-600",
                    },
                    {
                      label: "Unit Testing",
                      status: "Done",
                      color: "bg-emerald-500",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-gray-800 border border-white/5"
                    >
                      <div className="flex items-center gap-3">
                        {/* Stacked Avatars */}
                        <div className="flex -space-x-2">
                          {avatars
                            .slice(
                              i === 0 ? 0 : i === 1 ? 2 : 5,
                              i === 0 ? 2 : i === 1 ? 5 : 6,
                            )
                            .map((avatar, index) => (
                              <img
                                key={index}
                                src={avatar}
                                alt="user"
                                className="w-7 h-7 rounded-full border-2 border-gray-900"
                              />
                            ))}
                        </div>

                        <span className="text-xs text-gray-300">
                          {item.label}
                        </span>
                      </div>
                      <div
                        className={`px-2 py-0.5 rounded ${item.color} text-[8px] font-bold text-white uppercase`}
                      >
                        {item.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-auto relative z-10 pt-8">
              {/* <Zap className="w-8 h-8 text-yellow-400 mb-4 mx-auto drop-shadow-[0_0_15px_rgba(250,204,21,0.5)] animate-pulse" /> */}
              <h2 className="text-xl font-semibold text-white mb-2 leading-tight">
                Accelerate Execution
              </h2>
              <p className="text-sm text-gray-400">
                Offload repetitive tasks to our AI-first infrastructure and ship
                faster.
              </p>
            </div>
          </motion.div>

          {/* Card 3: WORLD MAP */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 relative overflow-hidden rounded-[2.5rem]  border border-white/5 bg-linear-to-b from-gray-800 to-gray-950 h-95 flex flex-col items-center p-8 text-center group"
          >
            <div>
              <h1 className="text-2xl font-semibold text-white mb-2 leading-tight">
                Work Across Globe
              </h1>
              <p className="text-sm text-gray-400">
                Collaborate with our global team and access resources from
                anywhere.
              </p>
            </div>
            <div className="absolute inset-0 w-full h-full top-40">
              <Globe />
            </div>
          </motion.div>

          {/* Card 4: Health & Velocity (Span 1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-1 relative overflow-hidden rounded-[2.5rem]  bg-linear-to-b from-gray-800 to-gray-950 h-95 p-8 flex flex-col items-center text-center group"
          >
            <div className="z-10 mb-8">
              <h2 className="text-xl font-semibold text-white mb-2 leading-tight">
                Growth Insights
              </h2>
              <p className="text-sm text-gray-400">
                Data-driven decisions at the click of a button.
              </p>
            </div>

            <div className="relative w-full h-40 flex justify-center items-center -mt-4">
              <div className="absolute bg-white backdrop-blur rounded-2xl p-3 border border-white/10 flex items-center gap-4 w-52 -rotate-6 -translate-x-6 -translate-y-4 shadow-2xl transition-all group-hover:-rotate-3">
                <div className="flex flex-col items-start">
                  <div className="w-8 h-8 rounded-md bg-sky-500/30 text-sky-400 flex items-center justify-center mb-1">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div className="text-[10px] font-bold text-black uppercase">
                    Efficiency
                  </div>
                </div>
                <div className="relative w-12 h-12 ml-auto">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      className="text-white/5"
                    />
                    <motion.circle
                      initial={{ strokeDasharray: "0, 100" }}
                      whileInView={{ strokeDasharray: "92, 100" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      className="text-sky-500"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-black">
                    92%
                  </div>
                </div>
              </div>

              <div className="absolute bg-white backdrop-blur rounded-2xl p-3 border border-white/40 flex items-center gap-4 w-52 rotate-6 translate-x-8 translate-y-12 shadow-2xl transition-all group-hover:rotate-2">
                <div className="flex flex-col items-start">
                  <div className="w-8 h-8 rounded-md bg-indigo-500/40 text-indigo-600 flex items-center justify-center mb-1">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div className="text-[10px] font-bold text-black uppercase">
                    Production
                  </div>
                </div>
                <div className="relative w-12 h-12 ml-auto">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      className="text-white/5"
                    />
                    <motion.circle
                      initial={{ strokeDasharray: "0, 100" }}
                      whileInView={{ strokeDasharray: "76, 100" }}
                      transition={{
                        duration: 1.5,
                        ease: "easeOut",
                        delay: 0.2,
                      }}
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      className="text-indigo-500"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-black">
                    76%
                  </div>
                </div>
              </div>

              <div className="absolute bg-white/10 backdrop-blur rounded-2xl p-3 border border-white/10 flex items-center gap-4 w-52 -rotate-6 -translate-x-6 translate-y-28 shadow-2xl transition-all group-hover:-rotate-3">
                <div className="flex flex-col items-start">
                  <div className="w-8 h-8 rounded-md bg-blue-500/30 text-blue-500 flex items-center justify-center mb-1">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div className="text-[10px] font-bold text-white uppercase">
                    Efficiency
                  </div>
                </div>
                <div className="relative w-12 h-12 ml-auto">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      className="text-white/5"
                    />
                    <motion.circle
                      initial={{ strokeDasharray: "0, 100" }}
                      whileInView={{ strokeDasharray: "92, 100" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      className="text-blue-500"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white">
                    92%
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 5: Security & Infrastructure (Span 1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-1 relative overflow-hidden rounded-[2.5rem] bg-linear-to-b from-gray-800 to-gray-950 h-95 p-8 flex flex-col items-center justify-end text-center group"
          >
            <div className="absolute inset-0 flex items-center justify-center -translate-y-10 group-hover:-translate-y-12 transition-transform duration-700">
              <div className="relative w-40 h-40">
                <div className="absolute inset-0 bg-blue-600/10 blur-[80px] rounded-full animate-pulse" />
                <div className="absolute inset-4 bg-white/5 backdrop-blur-xl rounded-[2.5rem] rotate-12 border border-white/10 flex items-center justify-center group-hover:rotate-6 transition-transform duration-700">
                  <ShieldCheck className="w-16 h-16 text-indigo-400 drop-shadow-[0_0_15px_rgba(129,140,248,0.5)]" />
                </div>
                <div className="absolute -right-2 -bottom-2 w-16 h-16 bg-linear-to-br from-gray-800 to-black rounded-full p-0.5 border border-white/10 shadow-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-500">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <LockIcon className="w-6 h-6 text-emerald-400" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-auto relative z-10">
              <h2 className="text-xl font-semibold text-white mb-2 leading-tight">
                Enterprise Shield
              </h2>
              <p className="text-sm text-gray-400 leading-tight">
                Bank-level encryption and SOC2 ready infrastructure.
              </p>
            </div>
          </motion.div>

          {/* Card 6: Audio experiences (Span 3 / Full Width) */}
          <div className="md:col-span-3 relative overflow-hidden rounded-[2.5rem]  bg-linear-to-b from-gray-800 to-gray-950 h-70 flex flex-col items-center group p-8">
            {/* Floating Background Pills */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Pink */}
              <div className="absolute bottom-12 left-1/4 bg-pink-100 text-pink-600 text-xs font-medium px-4 py-2 rounded-full flex items-center gap-2 border border-pink-50 shadow-sm opacity-80 transition-transform duration-[2000ms] group-hover:-translate-y-4">
                <div className="w-3 h-3 bg-pink-500 rounded-full flex items-center justify-center">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
                Superannuation
              </div>
              {/* Yellow */}
              <div className="absolute bottom-6 left-12 bg-yellow-100 text-yellow-700 text-xs font-medium px-4 py-2 rounded-full flex items-center gap-2 border border-yellow-50 shadow-sm opacity-80 transition-transform duration-[2000ms] group-hover:-translate-y-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full flex items-center justify-center">
                  <Star
                    className="w-2 h-2 text-white fill-white"
                    strokeWidth={1.5}
                  />
                </div>
                Personal Tax
              </div>
              {/* Blue */}
              <div className="absolute bottom-8 left-1/3 bg-blue-100 text-blue-700 text-xs font-medium px-4 py-2 rounded-full flex items-center gap-2 border border-blue-50 shadow-sm opacity-80 transition-transform duration-[2000ms] group-hover:-translate-y-6">
                <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-sm rotate-45"></div>
                </div>
                Economics
              </div>
              {/* Red/Rose */}
              <div className="absolute bottom-2 right-1/4 bg-rose-100 text-rose-700 text-xs font-medium px-4 py-2 rounded-full flex items-center gap-2 border border-rose-50 shadow-sm opacity-80 transition-transform duration-[2000ms] group-hover:-translate-y-4">
                <div className="w-3 h-3 bg-rose-500 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
                Financial Reporting
              </div>
              {/* Orange */}
              <div className="absolute bottom-12 right-32 bg-orange-100 text-orange-700 text-xs font-medium px-4 py-2 rounded-full flex items-center gap-2 border border-orange-50 shadow-sm opacity-80 transition-transform duration-[2000ms] group-hover:-translate-y-8">
                <div className="w-3 h-3 bg-orange-500 rounded-full flex items-center justify-center">
                  <GlobeIcon className="w-2 h-2 text-white" strokeWidth={1.5} />
                </div>
                International Tax
              </div>
              {/* Corporate */}
              <div className="absolute bottom-4 right-12 bg-orange-50 text-orange-600 text-xs font-medium px-4 py-2 rounded-full flex items-center gap-2 border border-orange-100 shadow-sm opacity-80 transition-transform duration-[2000ms] group-hover:-translate-y-3">
                <div className="w-3 h-3 bg-orange-400 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
                Corporate
              </div>
              {/* new */}
              <div className="absolute bottom-6 left-1/2 bg-yellow-100 text-yellow-700 text-xs font-medium px-4 py-2 rounded-full flex items-center gap-2 border border-yellow-50 shadow-sm opacity-80 transition-transform duration-[2000ms] group-hover:-translate-y-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full flex items-center justify-center">
                  <Star
                    className="w-2 h-2 text-white fill-white"
                    strokeWidth={1.5}
                  />
                </div>
                new 1
              </div>
              {/* new */}
              <div className="absolute bottom-1/4 left-10 bg-yellow-100 text-yellow-700 text-xs font-medium px-4 py-2 rounded-full flex items-center gap-2 border border-yellow-50 shadow-sm opacity-80 transition-transform duration-[2000ms] group-hover:-translate-y-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full flex items-center justify-center">
                  <Star
                    className="w-2 h-2 text-white fill-white"
                    strokeWidth={1.5}
                  />
                </div>
                new 2
              </div>
            </div>

            {/* Main Center Content */}
            <div className="relative z-10 bg-white/95 backdrop-blur-md px-10 py-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-50 text-center transform -rotate-2 transition-transform duration-500 group-hover:rotate-0">
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-800 mb-1">
                Distinctive audio learning experiences
              </h2>
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-blue-600">
                covering every competency
              </h2>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Section1;
