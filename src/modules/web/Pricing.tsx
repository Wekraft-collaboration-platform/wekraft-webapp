"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Minus,
  ChevronDown,
  Sparkles,
  Zap,
  Shield,
  GitBranch,
  BrainCircuit,
  Users,
  Activity,
  Lock,
  BarChart3,
  Users2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// ─── Types ────────────────────────────────────────────────────────────────────

type PlanKey = "hobby" | "team" | "studio";

interface Plan {
  key: PlanKey;
  name: string;
  badge?: string;
  price: { monthly: number | null; annual: number | null };
  description: string;
  cta: string;
  ctaHref: string;
  highlighted: boolean;
  icon: React.ReactNode;
}

interface FeatureRow {
  label: string;
  hobby: string | boolean;
  team: string | boolean;
  studio: string | boolean;
  category?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const plans: Plan[] = [
  {
    key: "hobby",
    name: "Hobby",
    price: { monthly: 0, annual: 0 },
    description: "For solo devs and teams just exploring Wekraft's power.",
    cta: "Start for free",
    ctaHref: "/auth",
    highlighted: false,
    icon: <GitBranch className="h-5 w-5" />,
  },
  {
    key: "team",
    name: "Team",
    badge: "Most popular",
    price: { monthly: 18, annual: 18 },
    description:
      "For serious teams that want to ship faster and collaborate smarter.",
    cta: "Start free trial",
    ctaHref: "/auth",
    highlighted: true,
    icon: <Users2 className="h-5 w-5" />,
  },
  {
    key: "studio",
    name: "Studio",
    price: { monthly: 40, annual: 40 },
    description:
      "For scaling product studios that need advanced control and flexible pricing.",
    cta: "Talk to us",
    ctaHref: "mailto:contact@wekraft.com",
    highlighted: false,
    icon: <Shield className="h-5 w-5" />,
  },
];

const featureCategories: {
  title: string;
  icon: React.ReactNode;
  rows: FeatureRow[];
}[] = [
  {
    title: "Collaboration",
    icon: <Users className="h-4 w-4" />,
    rows: [
      {
        label: "Team members",
        hobby: "Up to 3",
        team: "Up to 15",
        studio: "Unlimited",
      },
      {
        label: "Repositories",
        hobby: "5",
        team: "Unlimited",
        studio: "Unlimited",
      },
      { label: "Skill-based matching", hobby: true, team: true, studio: true },
      {
        label: "Pair programming sessions",
        hobby: false,
        team: true,
        studio: true,
      },
      {
        label: "Cross-team access controls",
        hobby: false,
        team: false,
        studio: true,
      },
    ],
  },
  {
    title: "AI & Automation",
    icon: <BrainCircuit className="h-4 w-4" />,
    rows: [
      {
        label: "AI code suggestions",
        hobby: "50/month",
        team: "Unlimited",
        studio: "Unlimited",
      },
      {
        label: "Agentic code guardrails",
        hobby: false,
        team: true,
        studio: true,
      },
      {
        label: "Auto-assign reviewers",
        hobby: false,
        team: true,
        studio: true,
      },
      {
        label: "Issue detection agents",
        hobby: false,
        team: "5 agents",
        studio: "Unlimited",
      },
      {
        label: "Workflow orchestration",
        hobby: false,
        team: true,
        studio: true,
      },
      { label: "Custom AI policies", hobby: false, team: false, studio: true },
    ],
  },
  {
    title: "Insights & Analytics",
    icon: <BarChart3 className="h-4 w-4" />,
    rows: [
      { label: "Repo heatmap", hobby: false, team: true, studio: true },
      { label: "Timeline tracker", hobby: false, team: true, studio: true },
      {
        label: "Team velocity reports",
        hobby: false,
        team: true,
        studio: true,
      },
      { label: "Custom dashboards", hobby: false, team: false, studio: true },
      { label: "Export & API access", hobby: false, team: false, studio: true },
    ],
  },
  {
    title: "Security & Support",
    icon: <Lock className="h-4 w-4" />,
    rows: [
      { label: "SSO / SAML", hobby: false, team: false, studio: true },
      { label: "Audit logs", hobby: false, team: true, studio: true },
      {
        label: "Priority support",
        hobby: false,
        team: "Email",
        studio: "Dedicated Slack",
      },
      { label: "SLA guarantee", hobby: false, team: false, studio: true },
      { label: "Onboarding session", hobby: false, team: false, studio: true },
    ],
  },
];

const faqs = [
  {
    q: "What's included in the Hobby plan?",
    a: "The Hobby plan gives solo developers and small teams access to Wekraft's core collaboration features, basic skill matching, and 50 AI suggestions per month — completely free. No credit card required.",
  },
  {
    q: "Can I upgrade or downgrade at any time?",
    a: "Absolutely. You can switch between plans any time from your settings. If you upgrade mid-cycle, you'll be charged a prorated amount. Downgrades take effect at the next billing period.",
  },
  {
    q: "What's the difference between Team and Studio?",
    a: "Team is built for focused engineering teams (up to 15 members) shipping product fast with AI guardrails. Studio is for product studios and agencies needing custom AI policies, unlimited agents, SSO, dedicated Slack support, and SLA guarantees.",
  },
  {
    q: "Is the annual billing discount applied automatically?",
    a: "We currently offer simple monthly billing to keep things flexible for your team. You can cancel or change your plan at any time.",
  },
  {
    q: "Do you offer discounts for open-source projects?",
    a: "Yes! Verified open-source projects get Team plan features for free. Reach out to us at contact@wekraft.com with your GitHub repo link.",
  },
  {
    q: "How do Wekraft's AI agents work?",
    a: "Wekraft's agents continuously analyze your codebase for anti-patterns, technical debt, and code smell. They surface actionable suggestions in your workflow — no extra setup, no separate tool.",
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
        <Minus className="h-3.5 w-3.5 text-white/20" />
      </span>
    );
  return (
    <span className="text-xs text-white/70 text-center block">{value}</span>
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
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors pr-8">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-white/30 group-hover:text-white/60 transition-colors"
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
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="text-sm text-white/50 leading-relaxed pb-5 pr-8">
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
      <section className="relative pt-32 pb-24 px-4">
        {/* Background grid */}
        <div className="absolute inset-0 z-0 opacity-[0.08]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-size-[40px_40px]" />
        </div>
        {/* Radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-500/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-4xl mx-auto text-center pt-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/15 px-4 py-1.5 text-xs font-semibold text-white uppercase tracking-widest"
          >
            <Sparkles className="h-3 w-3" />
            Pricing Plans
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-light tracking-tight text-white mb-6 leading-[1.1]"
          >
            One platform.{" "}
            <span className="bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text font-medium text-transparent">
              Everything
            </span>{" "}
            your
            <br />
            team needs to ship.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg max-w-xl mx-auto mb-10"
          >
            From solo explorers to scaling studios — Wekraft grows with your
            team.
          </motion.p>

          {/* Billing Cycle Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-2 backdrop-blur-md"
          >
            <span className="text-sm text-white/70 flex items-center gap-2">
              <Activity className="w-4 h-4 text-blue-400" />
              Billed Monthly
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── Pricing Cards ── */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((plan, idx) => {
            return (
              <motion.div
                key={plan.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className={cn(
                  "relative flex flex-col rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1",
                  plan.highlighted
                    ? "bg-linear-to-b from-blue-950 to-gray-950 border-blue-500/40 shadow-[0_0_60px_rgba(37,99,235,0.1)] "
                    : "bg-linear-to-b from-gray-900 to-gray-950 border-white/5 hover:border-white/10",
                )}
              >
                {/* Popular badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-blue-600 border border-blue-400/50 rounded-full px-4 py-1.5 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Plan header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-semibold text-white text-lg">
                    {plan.name}
                  </span>
                  <div
                    className={cn(
                      "h-9 w-9 rounded-xl flex items-center justify-center border",
                      plan.highlighted
                        ? "bg-blue-500/20 border-blue-400/30 text-blue-400"
                        : "bg-white/5 border-white/10 text-white/40",
                    )}
                  >
                    {plan.icon}
                  </div>
                </div>

                <p className="text-sm text-white/40 leading-relaxed mb-8">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8 overflow-hidden">
                  {plan.key === "hobby" ? (
                    <div className="text-5xl font-bold text-white">Free</div>
                  ) : plan.key === "studio" ? (
                    <div className="flex flex-col gap-1">
                      <div className="text-4xl font-bold text-white">
                        Custom
                      </div>
                      <p className="text-blue-400/80 text-xs font-semibold uppercase tracking-wider">
                        Starts from $40/mo
                      </p>
                    </div>
                  ) : (
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-bold text-white">$18</span>
                      <span className="text-white/40 text-sm mb-1.5">
                        /user/mo
                      </span>
                    </div>
                  )}
                  {plan.key !== "hobby" && (
                    <p className="text-xs text-white/30 mt-1">Billed monthly</p>
                  )}
                </div>

                {/* CTA */}
                <Link href={plan.ctaHref} className="mb-8 z-10">
                  <Button
                    className={cn(
                      "w-full rounded-xl h-11 text-sm font-semibold transition-all duration-300",
                      plan.highlighted
                        ? "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_30px_rgba(37,99,235,0.3)]"
                        : "bg-white/8 hover:bg-white/15 text-white border border-white/10",
                    )}
                  >
                    {plan.cta}
                  </Button>
                </Link>

                {/* Divider */}
                <div className="h-px w-full bg-white/5 mb-6" />

                {/* Feature highlights */}
                <ul className="flex flex-col gap-3">
                  {(plan.key === "hobby"
                    ? [
                        "2 Projects",
                        "Up to 4 team members/project",
                        "20 Reviews/month",
                        "Community Features",
                        "5 Team joining requests/month",
                        "Basic Help support",
                      ]
                    : plan.key === "team"
                      ? [
                          "10 Projects",
                          "Up to 10 team members/project",
                          "100 Reviews/month",
                          "Auto-assign Issues",
                          "Repo heatmap & Intelligence",
                          "Voice PM",
                          "Unlimited Team joining requests",
                          "Dedicated Help support",
                        ]
                      : [
                          "Everything in Team",
                          "Unlimited members & agents",
                          "Custom AI policies",
                          "Advanced audit logs",
                          "Custom dashboards & API",
                          "Dedicated Slack support",
                        ]
                  ).map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-white/60"
                    >
                      <Check
                        className={cn(
                          "h-4 w-4 shrink-0 mt-0.5",
                          plan.highlighted ? "text-blue-400" : "text-white/30",
                        )}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── Feature Table ── */}
      <section className="max-w-6xl mx-auto px-4 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-blue-400/80 mb-4">
            Compare Plans
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
            Everything, side by side
          </h2>
        </motion.div>

        <div className="rounded-3xl border border-white/5 overflow-hidden bg-linear-to-b from-gray-900 to-gray-950">
          {/* Table header */}
          <div className="grid grid-cols-4 border-b border-white/5 bg-white/2">
            <div className="p-5 text-xs font-bold uppercase tracking-widest text-white/30">
              Feature
            </div>
            {plans.map((p) => (
              <div
                key={p.key}
                className={cn(
                  "p-5 text-center text-sm font-semibold",
                  p.highlighted ? "text-blue-400" : "text-white/60",
                )}
              >
                {p.name}
              </div>
            ))}
          </div>

          {/* Table body */}
          {featureCategories.map((cat, catIdx) => (
            <div key={catIdx}>
              {/* Category header */}
              <div className="grid grid-cols-4 border-b border-white/5">
                <div className="col-span-4 px-5 py-3.5 flex items-center gap-2 bg-white/1.5">
                  <span className="text-blue-400/70">{cat.icon}</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-white/30">
                    {cat.title}
                  </span>
                </div>
              </div>

              {cat.rows.map((row, rowIdx) => (
                <div
                  key={rowIdx}
                  className="grid grid-cols-4 border-b border-white/4 last:border-0 hover:bg-white/1.5 transition-colors"
                >
                  <div className="flex items-center px-5 py-4 text-sm text-white/50">
                    {row.label}
                  </div>
                  <div className="flex items-center justify-center px-4 py-4 border-l border-white/4">
                    <FeatureValue value={row.hobby} />
                  </div>
                  <div className="flex items-center justify-center px-4 py-4 border-l border-white/4 bg-blue-500/3">
                    <FeatureValue value={row.team} />
                  </div>
                  <div className="flex items-center justify-center px-4 py-4 border-l border-white/4">
                    <FeatureValue value={row.studio} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-3xl mx-auto px-4 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-blue-400/80 mb-4">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-4">
            Common questions
          </h2>
          <p className="text-white/40 text-sm">
            Can&apos;t find your answer?{" "}
            <a
              href="mailto:contact@wekraft.com"
              className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-2"
            >
              Ask us directly.
            </a>
          </p>
        </motion.div>

        <div className="rounded-3xl border border-white/5 bg-linear-to-b from-gray-900 to-gray-950 px-8 divide-y divide-white/0">
          {faqs.map((faq, idx) => (
            <FaqItem key={idx} q={faq.q} a={faq.a} idx={idx} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pricing;
