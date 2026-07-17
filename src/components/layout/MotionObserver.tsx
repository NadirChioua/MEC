"use client";

import { useEffect } from "react";

export function MotionObserver() {
  useEffect(() => {
    window.requestAnimationFrame(() => {
      document.documentElement.classList.add("motion-ready");
    });

    const animated = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!animated.length) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      animated.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.16 }
    );

    animated.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}
