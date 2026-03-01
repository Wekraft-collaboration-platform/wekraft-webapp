"use client";
import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Heart, Mail, Rocket } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-screen w-full overflow-hidden bg-black relative flex flex-col items-center justify-between py-24">
      <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black/30 pointer-events-none z-10" />
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
          <Image src="/logo.svg" alt="Wekraft Logo" width={50} height={50} className="drop-shadow-2xl" />
          <span className="text-white font-pop font-bold text-4xl tracking-tighter">Wekraft</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl font-pop font-semibold text-white leading-tight tracking-tight mb-12"
        >
          The Future of Web <br /> 
          <span className="bg-linear-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
            Crafted Together.
          </span>
        </motion.h2>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Link href="/auth">
            <Button size="lg" className="h-9 px-6 text-sm font-semibold rounded-full bg-white text-black hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
              Start Building Now <Rocket className="ml-2 w-6 h-6" />
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Footer Links (Bottom Row) */}
      <div className="relative z-20 w-full max-w-7xl px-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-12 text-sm text-gray-500 font-inter">
        <div className="flex items-center gap-2">
          <span>&copy; {new Date().getFullYear()} Wekraft. All rights reserved.</span>
        </div>

        <div className="flex items-center flex-wrap justify-center gap-x-8 gap-y-4">
          <Link href="mailto:contact@wekraft.com" className="hover:text-white transition-colors flex items-center gap-2">
            <Mail className="w-4 h-4" /> Contact Us
          </Link>
          <Link href="https://github.com/wekraft" className="hover:text-white transition-colors flex items-center gap-2">
            <Github className="w-4 h-4" /> Star on GitHub
          </Link>
          <Link href="/support" className="hover:text-white transition-colors flex items-center gap-2 text-pink-500/80">
            <Heart className="w-4 h-4" /> Support Creator
          </Link>
        </div>
      </div>
    </div>
  );
};


export default Footer;
