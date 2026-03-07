"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Heart, Mail, MousePointerBan } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { toast } from "sonner";

const Footer = () => {
  // ── Waitlist ──────────────────────────────────────────────
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const saveEmail = useMutation(api.query.saveEmail);

  const handleJoinWaitlist = async () => {
    const trimmed = email.trim();
    if (!trimmed) {
      toast.error("Please enter your email.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    const toastId = toast.loading("Joining waitlist...");

    try {
      await saveEmail({ email: trimmed });

      // API route (fire & forget)
      fetch("//waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      }).catch((err) => console.error("[waitlist] fetch failed:", err));

      toast.success("You're on the list! We'll reach out soon.", { id: toastId });
      setEmail("");
    } catch (err) {
      toast.error("Something went wrong. Please try again.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };
  // ─────────────────────────────────────────────────────────

  return (
    <div
      id="footer"
      className="h-[90vh] w-full overflow-hidden bg-black relative flex flex-col items-center justify-between py-24"
    >
      <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-transparent pointer-events-none z-10" />
      <Image
        src="/bg-footer.jpg"
        alt="Footer Background"
        fill
        className="object-cover opacity-40 select-none"
        priority
      />
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex items-center gap-4 mb-8"
        >
          <Image
            src="/logo.svg"
            alt="WeKraft Logo"
            width={45}
            height={45}
            className="drop-shadow-2xl"
          />
          <span className="text-white font-pop font-semibold text-3xl md:text-4xl tracking-tighter">
            WeKraft
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl md:text-5xl  font-semibold text-white leading-tight tracking-tight mb-12"
        >
          The Future of Web <br />
          Crafted {" "}
          <span className="bg-linear-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent">
            Together.
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col items-center justify-center gap-6"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 bg-white/5 p-1.5  rounded-2xl border border-white/10 backdrop-blur-sm shadow-2xl">
            <Input
              type="email"
              placeholder="Enter your email..."
              className="w-80 md:w-96 h-10 bg-neutral-900/50 border-white/10 text-white placeholder:text-gray-500 rounded-xl focus:ring-blue-500/50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !loading && handleJoinWaitlist()}
              disabled={loading}
            />
            <Button
              onClick={handleJoinWaitlist}
              disabled={loading}
              className="h-8 md:h-10 px-6 md:px-8 cursor-pointer bg-blue-700 hover:bg-blue-800 text-white border border-white/20 rounded-xl font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Joining..." : "Join Waitlist"} <MousePointerBan className="ml-2 w-5 h-5" />
            </Button>
          </div>
          <p className="text-gray-400 text-sm md:text-base font-inter tracking-wide text-center max-w-lg leading-relaxed">
            Be first in line. Join {" "}
            <span className="text-blue-400 font-semibold underline decoration-blue-400/30 underline-offset-4">
              WeKraft
            </span>{" "}
            early access now for massive savings.
          </p>
        </motion.div>
      </div>

      {/* Footer Links (Bottom Row) */}
      <div className="relative z-20 w-full max-w-7xl px-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-10 text-sm text-neutral-400 font-inter">

        {/* Left — copyright above social icons */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <span>&copy; {new Date().getFullYear()} WeKraft. All rights reserved.</span>
          {/* Social icon row */}
          <div className="flex items-center gap-5 text-neutral-300">
            <Link href="https://www.instagram.com/wekraft.xyz/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
              <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </Link>
            <Link href="https://discord.com/invite/zUXum4Z8" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Discord">
              <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.031.055a19.9 19.9 0 0 0 5.993 3.03.077.077 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
            </Link>
            <Link href="https://x.com/we-kraft" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="X / Twitter">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </Link>
            <Link href="https://github.com/Wekraft-collaboration-platform" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
              <Github className="w-[21px] h-[21px]" />
            </Link>
          </div>
        </div>

        {/* Right — nav links */}
        <div className="flex items-center flex-wrap text-neutral-200 justify-center gap-x-6 gap-y-4 md:gap-y-0">
          <Link href="/reach-us" className="hover:text-white transition-colors flex items-center gap-2">
            <Mail className="w-4 h-4" /> Contact Us
          </Link>
          <Link href="/about-us" className="hover:text-white transition-colors flex items-center gap-2 text-white p-2 bg-blue-500/30 rounded-lg">
            <Heart className="w-4 h-4" /> Support Creator
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
