"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Minus,
  ChevronDown,
  Sparkles,
  Shield,
  GitBranch,
  BrainCircuit,
  Users,
  Lock,
  BarChart3,
  Users2,
  FolderGit2,
  UserPlus,
  Cpu,
  Bot,
  GitMerge,
  Wrench,
  CheckSquare,
  LineChart,
  Map,
  LayoutDashboard,
  HeadphonesIcon,
  CalendarCheck,
  BadgeCheck,
  Globe,
  Star,
  Flame,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// ─── Types ────────────────────────────────────────────────────────────────────

type PlanKey = "hobby" | "team" | "studio";

interface FeatureItem {
  label: string;
  icon: React.ReactNode;
}

interface Plan {
  key: PlanKey;
  name: string;
  badge?: string;
  priceLabel: string;
  priceSub?: string;
  description: string;
  cta: string;
  ctaHref: string;
  highlighted: boolean;
  icon: React.ReactNode;
  features: FeatureItem[];
}

interface FeatureRow {
  label: string;
  icon: React.ReactNode;
  hobby: string | boolean;
  team: string | boolean;
  studio: string | boolean;
}

interface FeatureCat {
  title: string;
  icon: React.ReactNode;
  rows: FeatureRow[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────


const freeFeatures: FeatureItem[] = [
  { label: "2 project creations",  icon: <FolderGit2      className="h-3.5 w-3.5" /> },
  { label: "2 project joinings",   icon: <UserPlus        className="h-3.5 w-3.5" /> },
  { label: "Limited AI reviews",   icon: <Cpu             className="h-3.5 w-3.5" /> },
  { label: "Limited PM Agent",     icon: <Bot             className="h-3.5 w-3.5" /> },
  { label: "Community access",     icon: <Globe           className="h-3.5 w-3.5" /> },
  { label: "Basic support",        icon: <HeadphonesIcon  className="h-3.5 w-3.5" /> },
];

const proFeatures: FeatureItem[] = [
  { label: "Unlimited project creations",          icon: <FolderGit2      className="h-3.5 w-3.5" /> },
  { label: "5 project joinings",           icon: <UserPlus        className="h-3.5 w-3.5" /> },
  { label: "Higher limits on AI reviews",  icon: <Cpu             className="h-3.5 w-3.5" /> },
  { label: "PM Agent Pro",                icon: <Bot             className="h-3.5 w-3.5" /> },
  { label: "Advanced team analytics",      icon: <BarChart3       className="h-3.5 w-3.5" /> },
  { label: "Advance Heatmap",                 icon: <Map             className="h-3.5 w-3.5" /> },
  { label: "Priority support",             icon: <Star            className="h-3.5 w-3.5" /> },
];

const studioFeatures: FeatureItem[] = [
  { label: "Everything in Pro",          icon: <BadgeCheck      className="h-3.5 w-3.5" /> },
  { label: "Unlimited projects & teams", icon: <FolderGit2      className="h-3.5 w-3.5" /> },
  { label: "Custom arrangements",        icon: <Wrench          className="h-3.5 w-3.5" /> },
  { label: "Dedicated Feature requests",       icon: <CalendarCheck   className="h-3.5 w-3.5" /> },
  { label: "SLA guarantee",              icon: <BadgeCheck      className="h-3.5 w-3.5" /> },
  { label: "Dedicated support channel",  icon: <HeadphonesIcon  className="h-3.5 w-3.5" /> },
];


const plans: Plan[] = [
  {
    key: "hobby",
    name: "Free",
    priceLabel: "Free",
    priceSub: "No credit card needed",
    description: "Start exploring WeKraft. Build your first project, find teammates, and feel the craft.",
    cta: "Join Waitlist",
    ctaHref: "/web/reach-us",
    highlighted: false,
    icon: <GitBranch className="h-4 w-4" />,
    features: freeFeatures,
  },
  {
    key: "team",
    name: "Pro",
    badge: "Most Popular",
    priceLabel: "TBA",
    priceSub: "Pricing revealed at launch",
    description: "Everything serious builders need —  Intelligent PM, code reviews, analytics, and more.",
    cta: "Join Waitlist",
    ctaHref: "/web/reach-us",
    highlighted: true,
    icon: <Flame className="h-4 w-4" />,
    features: proFeatures,
  },
  {
    key: "studio",
    name: "Studio",
    priceLabel: "Custom",
    priceSub: "Talk to us",
    description: "Built for Large teams that need scale, control, and dedicated care.",
    cta: "Talk to us",
    ctaHref: "/web/reach-us",
    highlighted: false,
    icon: <Shield className="h-4 w-4" />,
    features: studioFeatures,
  },
];

const featureCategories: FeatureCat[] = [
  {
    title: "Projects & Teams",
    icon: <Users className="h-4 w-4" />,
    rows: [
      { label: "Project creation", icon: <FolderGit2 className="h-3.5 w-3.5" />, hobby: "2", team: "5", studio: "Unlimited" },
      { label: "Project joining", icon: <UserPlus className="h-3.5 w-3.5" />, hobby: "2", team: "5", studio: "Unlimited" },
      { label: "Skill-based matching", icon: <Users2 className="h-3.5 w-3.5" />, hobby: true, team: true, studio: true },
      { label: "Community access", icon: <Globe className="h-3.5 w-3.5" />, hobby: true, team: true, studio: true },
      { label: "User stats & profile", icon: <BarChart3 className="h-3.5 w-3.5" />, hobby: true, team: true, studio: true },
      { label: "Advanced team analytics", icon: <LineChart className="h-3.5 w-3.5" />, hobby: false, team: true, studio: true },
    ],
  },
  {
    title: "AI & Automation",
    icon: <BrainCircuit className="h-4 w-4" />,
    rows: [
      { label: "AI code reviews", icon: <Cpu className="h-3.5 w-3.5" />, hobby: "Limited", team: "Higher limits", studio: "Unlimited" },
      { label: "PM Agent", icon: <Bot className="h-3.5 w-3.5" />, hobby: "Limited", team: true, studio: true },
      { label: "Auto-assign issues", icon: <GitMerge className="h-3.5 w-3.5" />, hobby: false, team: true, studio: true },
      { label: "Issue resolution agent", icon: <Wrench className="h-3.5 w-3.5" />, hobby: false, team: true, studio: true },
    ],
  },
  {
    title: "Insights & Tracking",
    icon: <BarChart3 className="h-4 w-4" />,
    rows: [
      { label: "Todo & task management", icon: <CheckSquare className="h-3.5 w-3.5" />, hobby: true, team: true, studio: true },
      { label: "Graphs & visualizations", icon: <LineChart className="h-3.5 w-3.5" />, hobby: false, team: true, studio: true },
      { label: "Repo heatmap", icon: <Map className="h-3.5 w-3.5" />, hobby: false, team: true, studio: true },
      { label: "Advanced dashboards", icon: <LayoutDashboard className="h-3.5 w-3.5" />, hobby: false, team: false, studio: true },
    ],
  },
  {
    title: "Support",
    icon: <Lock className="h-4 w-4" />,
    rows: [
      { label: "Help & support", icon: <HeadphonesIcon className="h-3.5 w-3.5" />, hobby: "Limited", team: "Priority email", studio: "Dedicated" },
      { label: "Onboarding session", icon: <CalendarCheck className="h-3.5 w-3.5" />, hobby: false, team: false, studio: true },
      { label: "SLA guarantee", icon: <BadgeCheck className="h-3.5 w-3.5" />, hobby: false, team: false, studio: true },
    ],
  },
];

const faqs = [
  {
    q: "When will pricing be revealed?",
    a: "We're in early launch mode and pricing hasn't been disclosed yet. Join the waitlist and you'll be the first to know — early users will get exclusive founding member rates.",
  },
  {
    q: "What's included in the Free tier?",
    a: "The Free tier lets you create up to 2 projects, join up to 2 projects, access community features, limited AI reviews, and a limited PM agent experience — no credit card required.",
  },
  {
    q: "What does Pro add over Free?",
    a: "Pro unlocks 5 project creations, 5 joinings, higher AI review limits, the full PM Agent, advanced team analytics, and repo heatmap — everything a serious team needs to ship.",
  },
  {
    q: "What is Studio meant for?",
    a: "Studio is designed for larger teams that need dedicated support, deeper analytics, and custom arrangements. Reach out and we'll build the right plan together.",
  },
  {
    q: "What features are coming to WeKraft?",
    a: "We're building: Todo & task management, timeline tracker, graphs & visualizations, PM agent, issue resolution, AI reviews, repo heatmap, community, user stats, and more.",
  },
  {
    q: "How do I get early access?",
    a: "Head to our Reach Us page and join the waitlist. Early members will get priority access, founding pricing, and a direct line to shape the product.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const FeatureValue = ({ value }: { value: string | boolean }) => {
  if (value === true)
    return (
      <span className="flex justify-center">
        <Check className="h-4 w-4 text-blue-400" />
      </span>
    );
  if (value === false)
    return (
      <span className="flex justify-center">
        <Minus className="h-3.5 w-3.5 text-white/15" />
      </span>
    );
  return (
    <span className="text-xs text-white/60 text-center block">{value}</span>
  );
};

const FaqItem = ({ q, a, idx }: { q: string; a: string; idx: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.05 * idx }}
      className="border-b border-white/5 last:border-0"
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-4 text-left group cursor-pointer"
      >
        <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors pr-8">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.22 }}
          className="shrink-0 text-white/25 group-hover:text-white/50 transition-colors"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="text-sm text-white/40 leading-relaxed pb-4 pr-8">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const Pricing = () => {
  return (
    <div className="bg-[#050505] min-h-screen w-full selection:bg-white/20 font-sans antialiased relative overflow-hidden">
      
      {/* ── Background Grid & Glow ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          style={{ 
            backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)", 
            backgroundSize: "48px 48px" 
          }} 
          className="absolute inset-0"
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/[0.03] blur-[100px] rounded-full" />
      </div>

      {/* ── Hero ── */}
      <section className="relative pt-30 pb-12 px-4 z-10 flex flex-col items-center">
        
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-medium tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500 mb-6 leading-tight max-w-4xl"
        >
          Plans That Scale<br /> With You
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base text-gray-400 text-center mb-12 max-w-lg font-normal leading-relaxed"
        >
          Start free, grow with your team. Pricing unlocks at launch.<br/> Early members get founding rates.
        </motion.p>
      </section>

      {/* ── Pricing Cards ── */}
      <section className="max-w-7xl mx-auto px-4 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {plans.map((plan, idx) => {
            const isHighlighted = plan.key === "team";
            return (
              <motion.div
                key={plan.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2 }}
                className={cn(
                  "relative p-6 md:p-7 rounded-[32px] backdrop-blur-xl flex flex-col group transition-all duration-500",
                  "bg-[#0a0a0a]/90 hover:bg-[#0a0a0a]/70 border border-white/10 shadow-2xl transition-all",
                  "hover:shadow-[0_0_24px_-10px_rgba(255,255,255,0.15)] hover:z-40 hover:border-white/40",
                  isHighlighted ? "scale-100 md:scale-105 z-10" : "z-0"
                )}
              >
                {/* Inner subtle highlight/gradient */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-t-3xl" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent rounded-[32px] pointer-events-none" />
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Header row */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={cn(
                      "p-1.5 rounded-lg border shadow-sm transition-colors duration-500",
                      "bg-white text-black border-white"
                    )}>
                      {plan.icon}
                    </div>
                    <span className="text-lg font-medium tracking-tight text-gray-100">{plan.name}</span>
                    {plan.badge && (
                      <span className="ml-auto bg-white/10 text-white text-[10px] px-2 py-0.5 rounded-full font-medium tracking-wide">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-medium tracking-tight text-white">{plan.priceLabel}</span>
                    {plan.priceLabel !== "TBA" && plan.priceLabel !== "Custom" && (
                      <span className="text-sm text-gray-500 font-normal">/month</span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 mb-5 min-h-[2.5rem] font-normal leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                    {plan.description}
                  </p>

                  {/* CTA Button */}
                  <Link href={plan.ctaHref} className="w-full mb-6 block">
                    <button
                      className={cn(
                        "w-full py-2 px-4 rounded-full font-medium text-sm transition-all duration-300 shadow-sm flex items-center justify-center gap-2 cursor-pointer",
                        "bg-[#1c1c1c] border border-white/10 text-gray-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:bg-white hover:text-black"
                      )}
                    >
                      {plan.cta}
                    </button>
                  </Link>

                  {/* Features / 14 days note row */}
                  <ul className="space-y-2 mb-6 flex-grow">
                    {plan.features.map((f) => (
                      <li key={f.label} className="flex items-start gap-3 text-sm text-gray-400 group-hover:text-gray-300 font-normal transition-colors duration-500">
                        <div className="mt-0.5 flex-shrink-0 flex items-center justify-center w-4.5 h-4.5 rounded-full bg-white/5 border border-white/5 transition-colors duration-500 group-hover:bg-white/10">
                          <Check className="w-3 h-3 text-white/50 group-hover:text-white" strokeWidth={2.5} />
                        </div>
                        <span className="line-clamp-1">{f.label}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Small Footer/Note */}
                  <div className="pt-4 border-t border-white/5">
                    <span className="text-xs text-gray-600 font-normal group-hover:text-gray-500 transition-colors">
                      {plan.priceSub || "14 days free trial"}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── Feature Table ── */}
      <section className="max-w-6xl mx-auto px-4 pt-20 pb-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#A0A5B5] mb-3">
            Compare Plans
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
            Everything, side by side
          </h2>
        </motion.div>

        <div className="rounded-[32px] border border-white/20 overflow-hidden bg-[#0a0a0a]/70 backdrop-blur-3xl shadow-[0_20px_100px_-10px_rgba(255,255,255,0.18)] relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />
          
          <div className="relative z-10 overflow-x-auto">
            {/* Table header - Sticky */}
            <div className="grid grid-cols-4 border-b border-white/[0.08] bg-[#0a0a0a]/90 backdrop-blur-md sticky top-0 z-20">
              <div className="py-2 px-5 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 flex items-center">
                Comparison
              </div>
              {plans.map((p) => (
                <div
                  key={p.key}
                  className={cn(
                    "py-2 px-5 text-center text-sm font-semibold tracking-tight",
                    p.highlighted ? "text-white" : "text-gray-400",
                  )}
                >
                  {p.name}
                </div>
              ))}
            </div>

            {/* Table body */}
            {featureCategories.map((cat, catIdx) => (
              <div key={catIdx}>
                {/* Category Header */}
                <div className="grid grid-cols-4 border-b border-white/[0.06] bg-[#050505]">
                  <div className="col-span-4 px-6 py-1.5 flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-white">
                      {cat.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/90">
                      {cat.title}
                    </span>
                  </div>
                </div>

                {cat.rows.map((row, rowIdx) => (
                  <div
                    key={rowIdx}
                    className="grid grid-cols-4 border-b border-white/[0.03] last:border-0 hover:bg-white/[0.03] transition-all duration-300 group/row"
                  >
                    <div className="flex items-center gap-4 px-6 py-1.5 text-[13px] text-gray-400 group-hover/row:text-gray-200 transition-colors">
                      <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/5 group-hover/row:bg-white group-hover/row:text-black transition-all">
                        {React.isValidElement(row.icon) && React.cloneElement(row.icon as React.ReactElement<any>, { className: "h-3.5 w-3.5" })}
                      </div>
                      <span className="font-normal tracking-wide">{row.label}</span>
                    </div>
                    <div className="flex items-center justify-center px-6 py-1.5 border-l border-white/[0.03]">
                      <FeatureValue value={row.hobby} />
                    </div>
                    <div className="flex items-center justify-center px-6 py-1.5 border-l border-white/[0.03] bg-white/[0.01]">
                      <FeatureValue value={row.team} />
                    </div>
                    <div className="flex items-center justify-center px-6 py-1.5 border-l border-white/[0.03]">
                      <FeatureValue value={row.studio} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-3xl mx-auto px-4 pt-10 pb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[20px] font-bold uppercase tracking-widest text-[#A0A5B5] mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
            Common questions
          </h2>
          <p className="text-gray-400 text-sm font-normal">
            Can&apos;t find your answer?{" "}
            <a
              href="mailto:contact@wekraft.com"
              className="text-white hover:text-gray-300 transition-colors underline underline-offset-4"
            >
              Ask us directly
            </a>
          </p>
        </motion.div>

        <div className="rounded-[32px] border border-white/[0.08] bg-[#111111]/80 backdrop-blur-xl px-8 shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none rounded-[32px]" />
          <div className="relative z-10">
            {faqs.map((faq, idx) => (
              <FaqItem key={idx} q={faq.q} a={faq.a} idx={idx} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
