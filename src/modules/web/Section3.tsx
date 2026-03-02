"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  BarChart3,
  Layers,
  Settings2,
  Zap,
  Shield,
  Search,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const Section3 = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax shift for the main container
  const yShift = useTransform(scrollYProgress, [0, 0.4], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <motion.section
      ref={containerRef}
      style={{ y: yShift, opacity }}
      className="relative w-full bg-white z-20 py-32 px-6 md:px-12 lg:px-24 rounded-t-[4rem] shadow-[0_-50px_100px_rgba(0,0,0,0.2)]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header content with smooth fade-in */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>Craft Anything</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl  font-sans tracking-tight text-slate-900 mb-4 max-w-4xl"
          >
          In WeKraft you can<br />
            <span className="font-semibold text-blue-600">
              Craft Anything {" "}
            </span>
            Faster
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 max-w-2xl leading-relaxed"
          >
            Craft Products with intelligent agents that think, plan,
            and execute alongside your team.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <BarChart3 className="w-6 h-6" />,
              title: "Predictive Analytics",
              desc: "Anticipate market shifts with AI-driven forecasting and real-time data synthesis.",
            },
            {
              icon: <Layers className="w-6 h-6" />,
              title: "Modular Scaling",
              desc: "Grow your infrastructure linearly as your team and customer base expands.",
            },
            {
              icon: <Settings2 className="w-6 h-6" />,
              title: "Adaptive Engine",
              desc: "Our platform learns from your workflows to auto-optimize every process.",
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: "Instant Execution",
              desc: "Zero-latency deployments across our global edge computing network.",
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: "Zero-Trust Security",
              desc: "Multi-layered encryption ensures your intellectual property remains private.",
            },
            {
              icon: <Search className="w-6 h-6" />,
              title: "Smart Discovery",
              desc: "Intelligent search cross-references your entire codebase and documentation.",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 * idx, duration: 0.5 }}
              className="p-6 rounded-[2.5rem] bg-slate-50/30 border border-slate-100/30 hover:bg-white shadow transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-2xl bg-white shadow-md flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Section3;
