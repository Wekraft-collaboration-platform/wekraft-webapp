"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MessageSquare,
  Briefcase,
  Bug,
  Lightbulb,
  Send,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const reasons = [
  { id: "connect", label: "Connect", icon: MessageSquare },
  { id: "work", label: "Work with us", icon: Briefcase },
  { id: "bug", label: "Report a bug", icon: Bug },
  { id: "feature", label: "Feature idea", icon: Lightbulb },
];

const ReachUs = () => {
  const [selected, setSelected] = useState("connect");
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen w-full bg-black pt-40 pb-32 px-6">
      {/* subtle top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(59,130,246,0.08),transparent)]" />

      <div className="relative z-10 max-w-xl mx-auto">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-4">
            Reach us
          </p>
          <h1 className="text-3xl font-semibold text-white tracking-tight leading-snug mb-3">
            Get in touch
          </h1>
          <p className="text-sm text-white/40 leading-relaxed max-w-sm">
            Have a question, found a bug, or want to collaborate? Drop us a
            message and we&apos;ll get back within 24 hours.
          </p>
        </motion.div>

        {/* form */}
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          {/* reason chips */}
          <div className="space-y-2.5">
            <label className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/25">
              Reason
            </label>
            <div className="flex flex-wrap gap-2">
              {reasons.map((r) => {
                const Icon = r.icon;
                const active = selected === r.id;
                return (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setSelected(r.id)}
                    className={cn(
                      "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200",
                      active
                        ? "bg-white/10 border-white/15 text-white"
                        : "bg-transparent border-white/5 text-white/30 hover:text-white/50 hover:border-white/10"
                    )}
                  >
                    <Icon className="w-3 h-3" />
                    {r.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* email */}
          <div className="space-y-2.5">
            <label className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/25">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/20" />
              <Input
                required
                type="email"
                placeholder="you@company.com"
                className="pl-10 h-11 bg-white/[0.03] border-white/5 rounded-lg text-sm text-white placeholder:text-white/15 focus:border-white/15 focus:ring-0"
              />
            </div>
          </div>

          {/* subject */}
          <div className="space-y-2.5">
            <label className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/25">
              Subject
            </label>
            <Input
              required
              type="text"
              placeholder="Brief summary"
              className="h-11 bg-white/[0.03] border-white/5 rounded-lg text-sm text-white placeholder:text-white/15 focus:border-white/15 focus:ring-0"
            />
          </div>

          {/* message */}
          <div className="space-y-2.5">
            <label className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/25">
              Message
            </label>
            <Textarea
              required
              placeholder="Describe what's on your mind..."
              className="min-h-[140px] bg-white/[0.03] border-white/5 rounded-lg text-sm text-white placeholder:text-white/15 focus:border-white/15 focus:ring-0 resize-none"
            />
          </div>

          {/* submit */}
          <div className="flex items-center justify-between pt-2">
            <span className="flex items-center gap-1.5 text-[11px] text-white/20">
              <span className="w-1 h-1 rounded-full bg-green-500/80" />
              Typically replies in &lt; 24h
            </span>
            <Button
              type="submit"
              disabled={sending}
              className="h-10 px-5 bg-white text-black hover:bg-white/90 rounded-lg text-xs font-semibold transition-all duration-200 disabled:opacity-50"
            >
              {sending ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Send className="w-3.5 h-3.5" />
                </motion.div>
              ) : (
                <span className="flex items-center gap-1.5">
                  Send message
                  <ArrowRight className="w-3 h-3" />
                </span>
              )}
            </Button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default ReachUs;
