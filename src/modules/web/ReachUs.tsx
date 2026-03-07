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
  LucidePhoneIncoming,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { toast } from "sonner";

const reasons = [
  { id: "connect", label: "Connect", icon: MessageSquare },
  { id: "work", label: "Work with us", icon: Briefcase },
  { id: "bug", label: "Report a bug", icon: Bug },
  { id: "feature", label: "Feature idea", icon: Lightbulb },
];

const ReachUs = () => {
  const [selected, setSelected] = useState("connect");
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const saveQuery = useMutation(api.query.saveQuery);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, subject, message } = formData;

    if (!email || !subject || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setSending(true);
    const toastId = toast.loading("Sending message...");

    try {
      await saveQuery({
        type: selected,
        email,
        subject,
        message,
      });

      // Fire and forget
      fetch("/api/reach-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, type: selected, subject, message }),
      }).catch((err) => console.error("[reach-us] fetch failed:", err));

      toast.success("Message sent! We'll get back to you soon.", {
        id: toastId,
      });
      setFormData({ email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.", { id: toastId });
    } finally {
      setSending(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="min-h-screen w-full bg-black pt-40 pb-32 px-6">
      <div className="relative z-10 max-w-xl mx-auto">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-sm  text-white mb-4 px-4 py-1.5 border border-white/30 rounded-full w-fit">
            Reach us <LucidePhoneIncoming className="w-4 h-4 inline -mt-1" />
          </p>
          <h1 className="text-4xl font-semibold text-white tracking-tight leading-snug mb-3">
            Get in touch
          </h1>
          <p className="text-sm text-neutral-300 leading-relaxed max-w-sm">
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
          <div className="flex flex-col gap-2">
            <label className="text-base font-medium text-white">Reason</label>
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
                        ? "bg-blue-300/10 border-blue-500/30 text-white"
                        : "bg-transparent border-white/5 text-white/30 hover:text-white/50 hover:border-white/10",
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
          <div className="flex flex-col gap-2">
            <label className="text-base font-medium  text-white">Email</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/20" />
              <Input
                id="email"
                required
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                className="pl-10 h-11 bg-white/5 border-white/10 rounded-lg text-sm text-white placeholder:text-white/15 focus:border-white/15 focus:ring-0"
              />
            </div>
          </div>

          {/* subject */}
          <div className="flex flex-col gap-2">
            <label className="text-base font-medium  text-white">Subject</label>
            <Input
              id="subject"
              required
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Brief summary"
              className="h-11 bg-white/5 border-white/10 rounded-lg text-sm text-white placeholder:text-white/15 focus:border-white/15 focus:ring-0"
            />
          </div>

          {/* message */}
          <div className="flex flex-col gap-2">
            <label className="text-base font-medium  text-white">Message</label>
            <Textarea
              id="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe what's on your mind..."
              className="min-h-[140px] bg-white/5 border-white/10 rounded-lg text-sm text-white placeholder:text-white/15 focus:border-white/15 focus:ring-0 resize-none"
            />
          </div>

          {/* submit */}
          <div className="flex items-center justify-between pt-2">
            <span className="flex items-center gap-1.5 text-base text-white/20">
              <span className="w-1 h-1 rounded-full bg-green-500/80" />
              Typically replies within &lt; 12-24 hours
            </span>
            <Button
              type="submit"
              disabled={sending}
              className="h-8 px-4 bg-white text-black hover:bg-white/90 rounded-lg text-xs font-semibold transition-all duration-200 disabled:opacity-50"
            >
              <span className="flex items-center gap-1.5">
                Send message
                <ArrowRight className="w-3 h-3" />
              </span>
            </Button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default ReachUs;
