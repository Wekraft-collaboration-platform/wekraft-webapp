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
  { label: "5 project creations",          icon: <FolderGit2      className="h-3.5 w-3.5" /> },
  { label: "5 project joinings",           icon: <UserPlus        className="h-3.5 w-3.5" /> },
  { label: "Higher limits on AI reviews",  icon: <Cpu             className="h-3.5 w-3.5" /> },
  { label: "Full PM Agent",                icon: <Bot             className="h-3.5 w-3.5" /> },
  { label: "Advanced team analytics",      icon: <BarChart3       className="h-3.5 w-3.5" /> },
  { label: "Repo heatmap",                 icon: <Map             className="h-3.5 w-3.5" /> },
  { label: "Priority support",             icon: <Star            className="h-3.5 w-3.5" /> },
];

const studioFeatures: FeatureItem[] = [
  { label: "Everything in Pro",          icon: <BadgeCheck      className="h-3.5 w-3.5" /> },
  { label: "Unlimited projects & teams", icon: <FolderGit2      className="h-3.5 w-3.5" /> },
  { label: "Custom arrangements",        icon: <Wrench          className="h-3.5 w-3.5" /> },
  { label: "Dedicated onboarding",       icon: <CalendarCheck   className="h-3.5 w-3.5" /> },
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
    description: "Everything serious builders need — AI-powered PM, code reviews, analytics, and more.",
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
    description: "Built for product studios and larger teams that need scale, control, and dedicated care.",
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
        className="w-full flex items-center justify-between py-4 text-left group"
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
    <div className="bg-black min-h-screen w-full selection:bg-blue-500/20">

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-20 px-4">
        <div className="absolute inset-0 z-0 opacity-[0.06]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-size-[40px_40px]" />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-87.5 bg-blue-600/8 blur-[100px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-3xl mx-auto text-center pt-8">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-[11px] font-semibold text-blue-300 tracking-widest uppercase"
          >
            <Sparkles className="h-3 w-3" />
            Flexible Plans
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-4xl md:text-[56px] font-bold tracking-tight text-white mb-4 leading-[1.1]"
          >
            Build together.
            <br />
            <span className="text-blue-400">Pay when it counts.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-white/45 text-base max-w-md mx-auto mb-8"
          >
            Start free, grow with your team. Pricing unlocks at launch — early members get founding rates.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/8 bg-white/4 px-5 py-2 backdrop-blur-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-sm text-white/50">
              Pricing will be disclosed at launch — early members get founding rates
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── Pricing Cards ── */}
      <section className="max-w-5xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * idx }}
              className={cn(
                "relative flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-0.5",
                plan.highlighted
                  ? "bg-linear-to-b from-[#0f1b35] to-[#080d1a] border-blue-500/30 shadow-[0_0_50px_rgba(37,99,235,0.08)]"
                  : "bg-linear-to-b from-[#111116] to-[#0a0a0e] border-white/6 hover:border-white/10",
              )}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-blue-600 rounded-full px-3.5 py-1 shadow-[0_0_16px_rgba(37,99,235,0.5)]">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Header row */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className={cn(
                    "h-7 w-7 rounded-lg flex items-center justify-center border",
                    plan.highlighted
                      ? "bg-blue-500/15 border-blue-400/25 text-blue-400"
                      : "bg-white/5 border-white/8 text-white/35",
                  )}>
                    {plan.icon}
                  </div>
                  <span className="font-semibold text-white text-base">{plan.name}</span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-3">
                <div className={cn(
                  "text-3xl font-bold",
                  plan.key === "team" ? "text-blue-300" : "text-white"
                )}>
                  {plan.priceLabel}
                </div>
                {plan.priceSub && (
                  <p className={cn(
                    "text-[11px] font-semibold uppercase tracking-wider mt-0.5",
                    plan.key === "team" ? "text-blue-400/70" : "text-white/30"
                  )}>
                    {plan.priceSub}
                  </p>
                )}
              </div>

              <p className="text-[13px] text-white/35 leading-relaxed mb-5">
                {plan.description}
              </p>

              {/* CTA */}
              <Link href={plan.ctaHref} className="mb-5 z-10">
                <Button
                  className={cn(
                    "w-full rounded-xl h-10 text-sm font-semibold transition-all duration-300",
                    plan.highlighted
                      ? "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_24px_rgba(37,99,235,0.25)]"
                      : "bg-white/6 hover:bg-white/12 text-white/80 border border-white/8",
                  )}
                >
                  {plan.cta}
                </Button>
              </Link>

              {/* Divider */}
              <div className="h-px w-full bg-white/5 mb-4" />

              {/* Features */}
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/25 mb-3">
                What you get
              </p>
              <ul className="flex flex-col gap-2.5">
                {plan.features.map((f) => (
                  <li key={f.label} className="flex items-center gap-2.5 text-[13px] text-white/55">
                    <span className={cn(
                      "shrink-0",
                      plan.highlighted ? "text-blue-400" : "text-white/30"
                    )}>
                      {f.icon}
                    </span>
                    {f.label}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Feature Table ── */}
      <section className="max-w-5xl mx-auto px-4 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[10px] font-bold uppercase tracking-widest text-blue-400/70 mb-3">
            Compare Plans
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
            Everything, side by side
          </h2>
        </motion.div>

        <div className="rounded-2xl border border-white/5 overflow-hidden bg-linear-to-b from-[#0e0e13] to-[#08080b]">
          {/* Table header */}
          <div className="grid grid-cols-4 border-b border-white/5">
            <div className="p-4 text-[10px] font-bold uppercase tracking-widest text-white/25">
              Feature
            </div>
            {plans.map((p) => (
              <div
                key={p.key}
                className={cn(
                  "p-4 text-center text-sm font-semibold",
                  p.highlighted ? "text-blue-400" : "text-white/50",
                )}
              >
                {p.name}
              </div>
            ))}
          </div>

          {/* Table body */}
          {featureCategories.map((cat, catIdx) => (
            <div key={catIdx}>
              <div className="grid grid-cols-4 border-b border-white/5">
                <div className="col-span-4 px-4 py-2.5 flex items-center gap-2 bg-white/2">
                  <span className="text-blue-400/60">{cat.icon}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/25">
                    {cat.title}
                  </span>
                </div>
              </div>

              {cat.rows.map((row, rowIdx) => (
                <div
                  key={rowIdx}
                  className="grid grid-cols-4 border-b border-white/[0.035] last:border-0 hover:bg-white/1.5 transition-colors"
                >
                  <div className="flex items-center gap-2.5 px-4 py-3.5 text-[13px] text-white/45">
                    <span className="text-white/20 shrink-0">{row.icon}</span>
                    {row.label}
                  </div>
                  <div className="flex items-center justify-center px-4 py-3.5 border-l border-white/[0.035]">
                    <FeatureValue value={row.hobby} />
                  </div>
                  <div className="flex items-center justify-center px-4 py-3.5 border-l border-white/[0.035] bg-blue-500/2.5">
                    <FeatureValue value={row.team} />
                  </div>
                  <div className="flex items-center justify-center px-4 py-3.5 border-l border-white/[0.035]">
                    <FeatureValue value={row.studio} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-2xl mx-auto px-4 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-[10px] font-bold uppercase tracking-widest text-blue-400/70 mb-3">
            FAQ
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-3">
            Common questions
          </h2>
          <p className="text-white/35 text-sm">
            Can&apos;t find your answer?{" "}
            <a
              href="mailto:contact@wekraft.com"
              className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-2"
            >
              Ask us directly.
            </a>
          </p>
        </motion.div>

        <div className="rounded-2xl border border-white/5 bg-linear-to-b from-[#0e0e13] to-[#08080b] px-6">
          {faqs.map((faq, idx) => (
            <FaqItem key={idx} q={faq.q} a={faq.a} idx={idx} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pricing;
