"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, ArrowRight, ExternalLink } from "lucide-react";
import Navbar from "@/modules/web/navbar";
import Footer from "@/modules/web/Footer";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "Rox",
    role: "Founding Engineer & Vision",
    image: "/rox.png",
    linkedin: "https://www.linkedin.com/in/rox-aa53a1300/",
    github: "https://github.com/ronitrai27",
    bio: "Driving the core architecture and ensuring every line of code meets the WeKraft craft standard.",
  },
  {
    name: "Ritesh",
    role: "Founding Engineer & Strategy",
    image: "/ritesh.jpeg",
    linkedin: "https://www.linkedin.com/in/ritesh-sinha-rk/", 
    github: "https://github.com/ritesh-sinha29",
    bio: "Building the next-gen collaboration layers and leading the technical roadmap of the platform.",
  },
  {
    name: "Sahil",
    role: "Mobile App Developer",
    image: "/sahil.jpeg",
    linkedin: "https://www.linkedin.com/in/sahil-80573b388",
    github: "https://github.com/Sleepy-07",
    bio: "Obsessed with user experience and seamless workflows that make collaboration feel like magic.",
  },
  {
    name: "Bhanu Pratap",
    role: "Co-Founding Engineer",
    image: "/bhanu.jpeg",
    linkedin: "https://www.linkedin.com/in/bhanu-partap13",
    github: "https://www.github.com/Bhanu-partap-13",
    bio: "Powering the intelligent agents and cross-stack integrations that keep development moving.",
  },
];

const AboutUs = () => {
  return (
    <div id="about-us-top" className="bg-black min-h-screen text-white selection:bg-blue-500/30 font-sans antialiased">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
     
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-blue-400 font-bold mb-6">
              Our Mission
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-pop leading-[1.2] font-semibold tracking-tight text-white mb-8"
          >
            Built by developers, <br />
            <span className="bg-linear-to-b from-white to-neutral-800 bg-clip-text text-transparent italic">
              for the future of work
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-normal leading-relaxed"
          >
            WeKraft is more than just a collaboration tool. It's an intelligent ecosystem designed to help engineering teams focus on what matters: building incredible software, together.
          </motion.p>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-24 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-pop font-semibold text-white mb-4">
              Meet the <span className="text-blue-500">Craftsmen</span>
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-[#0a0a0a] border border-white/10 rounded-[32px] overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col items-center p-8"
              >
                {/* Image & Glow */}
                <div className="relative w-32 h-32 mb-6 pointer-events-none">
                  <div className="absolute inset-0 bg-blue-500/30 blur-2xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 group-hover:border-blue-500/50 transition-colors">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>

                <div className="text-center mb-4">
                  <h3 className="text-xl font-pop font-semibold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 px-2">
                    {member.bio}
                  </p>
                </div>

                {/* Socials */}
                <div className="flex items-center gap-4 mt-auto">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s GitHub`}
                    className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s LinkedIn`}
                    className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <Link
                    href="/reach-us"
                    aria-label={`Contact ${member.name}`}
                    className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all"
                  >
                    <Mail className="w-4 h-4" />
                  </Link>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                   <ArrowRight className="w-4 h-4 -rotate-45 text-blue-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    

      <Footer />
    </div>
  );
};

export default AboutUs;
