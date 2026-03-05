"use client";

import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TimerIcon, TimerReset } from "lucide-react";

const navLinks: { label: string; href: string }[] = [
  { label: "Home", href: "/web" },
  { label: "Pricing", href: "/web/pricing" },
  { label: "Reach us", href: "/web/reach-us" },
  { label: "Contribute", href: "/" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-2 left-1/2 -translate-x-1/2 z-50  transition-all duration-300 ease-linear",
        scrolled
          ? "bg-white/15 backdrop-blur-md shadow-lg max-w-3xl w-full rounded-xl"
          : "bg-transparent w-full"
      )}
    >
      <nav
        className={clsx(
          "mx-auto max-w-7xl px-6 flex items-center justify-between transition-all duration-300",
          scrolled ? "h-14 max-w-165 mx-auto" : "h-20"
        )}
      >
        <h1 className="text-white font-inter font-bold text-2xl tracking-tight transition-all duration-300">
          {scrolled ? (
            <Image src="/logo.svg" alt="Logo" width={35} height={35} />
          ) : (
            <div className="flex items-center gap-2">
              <Image src="/logo.svg" alt="Logo" width={35} height={35} />
              <span className="font-semibold font-pop">WeKraft</span>
            </div>
          )}
        </h1>

        <div className="hidden md:flex gap-8 text-sm text-white/80">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="
        relative cursor-pointer
        transition-colors duration-200
        hover:text-white
        after:absolute after:left-0 after:-bottom-1
        after:h-[2px] after:w-0 after:bg-white
        after:transition-all after:duration-300
        hover:after:w-full
      "
            >
              {label}
            </Link>
          ))}
        </div>

        <Button
          size="sm"
          variant={'outline'}
          onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
          className={clsx(
            "duration-300 hover:scale-105 transition-all cursor-pointer font-inter text-sm text-white bg-transparent border border-white/30",
            scrolled && "px-4 py-1.5 text-xs"
          )}
        >
         {
            scrolled ? (
                <>
                Wait List
                <TimerReset className="ml-2" />
                </>
            ) : (
                <>
                {/* Sign Up */}
                Coming Soon
                {/* <ArrowRight className="ml-2" /> */}
                <TimerIcon className="ml-2" />
                </>
            )
         }
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;