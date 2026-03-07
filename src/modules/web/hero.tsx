"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Spotlight } from "@/components/ui/spotlight";
import {
  ArrowRightIcon,
  LaptopMinimalCheck,
  LucideRocket,
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
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const rawRotateX = useTransform(scrollYProgress, [0, 0.25], [14, 0]);
  const rawScale = useTransform(scrollYProgress, [0, 0.25], [0.88, 1]);
  const rawY = useTransform(scrollYProgress, [0, 0.25], [40, 0]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.08, 0.3], [0, 1, 1]);

  const rotateX = useSpring(rawRotateX, { stiffness: 80, damping: 20 });
  const scale = useSpring(rawScale, { stiffness: 80, damping: 20 });
  const y = useSpring(rawY, { stiffness: 80, damping: 20 });

  return (
    <div ref={containerRef} className="min-h-screen max-h-[200vh] w-full  bg-black relative overflow-hidden">
      <div className="">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="#C1C1C1"
        />
      </div>
      <Image
        src="/night-bg.png"
        alt="background"
        className="size-full block  opacity-70 "
        width="3276"
        height="4095"
        priority
      />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-black/75" />

      <main className="absolute inset-0 flex flex-col items-center justify-center pt-20">
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 border border-gray-400/30 rounded-full  cursor-pointer font-inter tracking-wide transition-colors duration-200 mb-20">
          <span>✨</span>
          <Separator orientation="vertical" className="mx-2 bg-gray-600" />
          <span className="text-gray-200">Better way to collaborate</span>
        </AnimatedShinyText>

        <div className="flex flex-col gap-2 items-center justify-center font-pop  relative">
          <h1 className="text-8xl leading-[1.40] bg-linear-to-b from-white via-white to-neutral-800 bg-clip-text text-transparent font-semibold ">
            Build <span className="">Together</span>
          </h1>
          <h1 className="text-8xl leading-[1.15] bg-linear-to-b from-white via-white to-neutral-800 bg-clip-text text-transparent font-semibold -mt-4">
            Craft <span className="">Faster</span>
          </h1>

          <FloatingCursor
            name="Ritesh"
            color="#3b82f6"
            initialX="-10%"
            initialY="50%"
            isLeft={true}
          />
          <FloatingCursor
            name="Rox"
            color="#6366f1"
            initialX="104%"
            initialY="30%"
          />
        </div>

        <div className="w-220  mx-auto relative mt-5">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-linear-to-r from-transparent via-blue-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-linear-to-r from-transparent via-blue-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-linear-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-linear-to-r from-transparent via-blue-500 to-transparent h-px w-1/4" />

          <p className="text-gray-400 text-[20px] mt-5 font-sans tracking-tight text-pretty text-center">
            Autonomous agents that plan, manage, and track your project.
            Match talent, collaborate seamlessly, and never let deadline slip.
            Build together — frictionless.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 mt-14">
            {/* WAITING LIST & EARLY ACCESS */}
            <div className="flex items-center gap-4">
              <Input
                type="email"
                placeholder="Enter your email..."
                className="w-96 h-9 bg-neutral-300"
              />
              <Button className="h-10! cursor-pointer bg-blue-800 hover:bg-blue-900 border border-white/30">
                Join Waitlist <MousePointerBan className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-gray-400 text-sm mt-2 font-sans tracking-tight text-pretty text-center">
              Join the waitlist to get early access to WeKraft. <LaptopMinimalCheck className="w-4 h-4 inline" />
            </p>
          </div>
        </div>

        <div className="mt-18 w-full max-w-[85%] mx-auto" style={{ perspective: "1200px" }}>
          <motion.div
            style={{ rotateX, scale, y, opacity: rawOpacity }}
            className="relative will-change-transform"
          >
            {/* Top edge glow */}
            <div className="absolute -inset-x-4 -top-4 h-8 bg-blue-500/25 blur-2xl rounded-full pointer-events-none" />
            {/* Border frame */}
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(59,130,246,0.08)]">
              <Image
                src="/hero-img-1.png"
                alt="Hero Image"
                className="w-full h-auto block"
                width="1920"
                height="1080"
                priority
              />
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-80 bg-linear-to-t from-black via-black/50 to-transparent" />
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
