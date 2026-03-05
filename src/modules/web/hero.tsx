"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Spotlight } from "@/components/ui/spotlight";
import {
  ArrowRightIcon,
  LaptopMinimalCheck,
  LucideRocket,
  LucideTrendingUp,
  MousePointerBan,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { Input } from "@/components/ui/input";

const FloatingCursor = ({
  name,
  color,
  initialX,
  initialY,
  isLeft = false,
}: {
  name: string;
  color: string;
  initialX: string;
  initialY: string;
  isLeft?: boolean;
}) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = () => {
      const newX = (Math.random() - 0.5) * 300;
      const newY = (Math.random() - 0.5) * 150;
      setPos({ x: newX, y: newY });
    };

    const interval = setInterval(move, 4000 + Math.random() * 2000);
    move(); // Initial move
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="absolute z-50 pointer-events-none"
      style={{ top: initialY, left: initialX }}
      animate={{
        x: pos.x,
        y: pos.y,
      }}
      transition={{
        x: { duration: 3.5, ease: "easeInOut" },
        y: { duration: 3.5, ease: "easeInOut" },
      }}
    >
      <div className="relative">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={color}
          className={`drop-shadow-xl ${isLeft ? "scale-x-[-1]" : ""}`}
        >
          <path d="M3 2L21 12L13 14L11 22L3 2Z" />
        </svg>
        <div
          className="mt-1 px-2.5 py-1 text-[10px] font-medium rounded-md shadow-2xl text-white whitespace-nowrap"
          style={{ backgroundColor: color }}
        >
          {name}
        </div>
      </div>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="#C1C1C1"
        />
        <Image
          src="/night-bg.png"
          alt="background"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-black/75" />
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16">
        <AnimatedShinyText className="inline-flex items-center justify-center px-3 sm:px-4 py-1 border border-gray-400/30 rounded-full cursor-pointer font-inter tracking-wide transition-colors duration-200 mb-5 sm:mb-8">
          <span className="text-sm sm:text-base">✨</span>
          <Separator orientation="vertical" className="mx-1.5 sm:mx-2 bg-gray-600" />
          <span className="text-gray-200 text-xs sm:text-sm">Better way to collaborate</span>
        </AnimatedShinyText>

        <div className="flex flex-col gap-1 sm:gap-2 items-center justify-center font-pop relative">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.20] bg-linear-to-b from-white via-white to-neutral-800 bg-clip-text text-transparent font-semibold text-center">
            Build <span className="">Together</span>
          </h1>
          <div className="flex items-center gap-2 sm:gap-4 md:-mt-4">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.15] bg-linear-to-b from-white via-white to-neutral-800 bg-clip-text text-transparent font-semibold">
              Ship Faster
            </h1>
            <div className="self-center -mb-2 sm:-mb-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg bg-linear-to-br from-blue-300 to-blue-700 shrink-0">
              <LucideTrendingUp className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
            </div>
          </div>

          <div className="hidden md:block">
            <FloatingCursor
              name="Ritesh"
              color="#3b82f6"
              initialX="-10%"
              initialY="50%"
              isLeft={true}
            />
          </div>
          <div className="hidden md:block">
            <FloatingCursor
              name="Rox"
              color="#6366f1"
              initialX="104%"
              initialY="30%"
            />
          </div>
        </div>

        <div className="w-full max-w-xs sm:max-w-xl md:max-w-3xl mx-auto relative mt-5 sm:mt-6 px-2 sm:px-4">
          {/* Gradients */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-linear-to-r from-transparent via-blue-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-linear-to-r from-transparent via-blue-500 to-transparent h-px w-3/4" />
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-linear-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-linear-to-r from-transparent via-blue-500 to-transparent h-px w-1/4" />

          <p className="text-gray-400 text-sm sm:text-base md:text-[20px] mt-5 font-sans tracking-tight text-pretty text-center leading-relaxed">
            Autonomous agents that plan, manage, and track your project. Match
            talent, Collaborate seamlessly, and execute workflows autonomously.
            Build together — frictionless.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 mt-8 sm:mt-14 w-full">
            {/* WAITING LIST & EARLY ACCESS */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full justify-center">
              <Input
                type="email"
                placeholder="Enter your email..."
                className="w-full sm:w-96 h-10 sm:h-10 bg-neutral-300"
              />
              <Button className="w-full sm:w-auto h-10! cursor-pointer bg-blue-800 hover:bg-blue-900 border border-white/30 text-sm sm:text-base">
                Join Waitlist <MousePointerBan className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm mt-2 sm:mt-5 font-sans tracking-tight text-pretty text-center px-4">
              Join the waitlist to get early access to WeKraft. <LaptopMinimalCheck className="w-3 h-3 sm:w-4 sm:h-4 inline ml-1" />
            </p>
          </div>
        </div>

        <div className="mt-10 sm:mt-14 md:mt-20 w-full max-w-[95%] sm:max-w-[85%] md:max-w-[84%] mx-auto">
          <div className="relative">
            <HeroVideoDialog
              videoSrc="https://www.youtube.com/embed/VIDEO_ID"
              thumbnailSrc="/hero-img-1.png"
              thumbnailAlt="Video thumbnail"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 sm:h-32 md:h-40 bg-linear-to-t from-black via-black/60 to-transparent" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
