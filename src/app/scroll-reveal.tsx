"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

let currentRun = 0;
let stopCurrentRun: (() => void) | undefined;

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const run = ++currentRun;
    stopCurrentRun?.();

    const root = document.documentElement;
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)")
    );
    const motionIsReady = root.classList.contains("reveal-ready");
    root.classList.add("reveal-active");

    const revealAll = () => {
      targets.forEach((target) => target.classList.add("is-visible"));
    };

    if (
      !motionIsReady ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      revealAll();
      stopCurrentRun = () => {};
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
      );

      targets.forEach((target) => observer.observe(target));
      stopCurrentRun = () => observer.disconnect();
    }

    return () => {
      if (currentRun !== run) return;

      stopCurrentRun?.();
      stopCurrentRun = undefined;
    };
  }, [pathname]);

  return null;
}
