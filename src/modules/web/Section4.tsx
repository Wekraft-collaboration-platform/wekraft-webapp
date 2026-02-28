"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
const Section4 = () => {
  return (
    <div className="min-h-screen w-full bg-black md:py-20 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808022_1px,transparent_1px),linear-gradient(to_bottom,#80808022_1px,transparent_1px)] bg-size-[36px_36px] z-0" />
      <header className="w-full max-w-6xl mb-12 mx-auto text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-gray-900 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
        >
          <Sparkles className="w-3 h-3" />
          <span>Craft Anything</span>
        </motion.div>
        <h1 className="text-4xl text-center mx-auto  font-light tracking-tight leading-tight text-gray-300 font-pop">
          <span className="text-blue-500 font-sans font-semibold">
            In Wekraft
          </span>{" "}
          you can{" "}
          <span className="text-blue-500 font-sans font-semibold">craft</span>{" "}
          anything. Faster
        </h1>
      </header>

      {/* Video Display Section */}
      <div className="relative max-w-6xl mx-auto mt-20 group">
        {/* Cool Gradient Glow (BEHIND VIDEO, Top Left) */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-sky-600/20 blur-[140px] rounded-full pointer-events-none z-0" />
          <div className="absolute -top-32 left-32 w-[600px] h-[600px] bg-blue-600/40 blur-[140px] rounded-full pointer-events-none z-0" />
        
        {/* Premium Video Frame */}
        <div className="relative rounded-4xl p-2 border border-white/10 bg-white/5 backdrop-blur-3xl shadow-[0_0_100px_rgba(0,0,0,0.4)] z-10 transition-all duration-500 hover:border-white/15">
          {/* Inner Glossy Border */}
          <div className="absolute inset-0 rounded-4xl border border-white/5 pointer-events-none" />
          
          <div className="relative overflow-hidden rounded-3xl bg-black">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-auto z-20"
            >
              <source src="/video/test-video.webm" type="video/webm" />
            </video>
            {/* Very subtle internal shadow/vignette */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/20 pointer-events-none z-30" />
          </div>
        </div>

        {/* Ambient Glow underneath for better depth */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-40 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none z-0" />
      </div>
    </div>
  );
};

export default Section4;
