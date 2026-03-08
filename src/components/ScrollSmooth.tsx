"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect low-end devices: mobile, low core count, or low memory
    const isLowEnd =
      /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
      (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
      ((navigator as any).deviceMemory && (navigator as any).deviceMemory <= 4);

    setIsMobile(!!isLowEnd);
  }, []);

  // Skip Lenis smooth scroll on low-end devices for native performance
  if (isMobile) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}