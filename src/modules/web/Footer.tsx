"use client";
import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Heart, Mail, MousePointerBan, Rocket } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";

const Footer = () => {
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
            alt="Wekraft Logo"
            width={50}
            height={50}
            className="drop-shadow-2xl"
          />
          <span className="text-white font-pop font-bold text-4xl tracking-tighter">
            Wekraft
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl  font-semibold text-white leading-tight tracking-tight mb-12"
        >
          The Future of Web <br />
          <span className="bg-linear-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent">
            Crafted Together.
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
            />
            <Button className="h-10 px-8 cursor-pointer bg-blue-700 hover:bg-blue-800 text-white border border-white/20 rounded-xl font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              Join Waitlist <MousePointerBan className="ml-2 w-5 h-5" />
            </Button>
          </div>
          <p className="text-gray-400 text-sm md:text-base font-inter tracking-wide text-center max-w-lg leading-relaxed">
            get a chance to get huge{" "}
            <span className="text-blue-400 font-semibold underline decoration-blue-400/30 underline-offset-4">
              discounts
            </span>{" "}
            as early bird access to wekraft.
          </p>
        </motion.div>
      </div>

      {/* Footer Links (Bottom Row) */}
      <div className="relative z-20 w-full max-w-7xl px-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-10 text-sm text-neutral-400 font-inter">
        <div className="flex items-center gap-2">
          <span>
            &copy; {new Date().getFullYear()} Wekraft. All rights reserved.
          </span>
        </div>

        <div className="flex items-center flex-wrap text-neutral-200 justify-center gap-x-8 ">
          <Link
            href="mailto:contact@wekraft.com"
            className="hover:text-white transition-colors flex items-center gap-2"
          >
            <Mail className="w-4 h-4" /> Contact Us
          </Link>
          <Link
            href="https://github.com/wekraft"
            className="hover:text-white transition-colors flex items-center gap-2"
          >
            <Github className="w-4 h-4" /> Star on GitHub
          </Link>
          <Link
            href="/support"
            className="hover:text-white transition-colors flex items-center gap-2 text-white p-2 bg-blue-500/30 rounded-lg"
          >
            <Heart className="w-4 h-4" /> Support Creator
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
