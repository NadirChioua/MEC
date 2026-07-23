"use client";

import { useEffect } from "react";

export function MotionObserver() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observed = new WeakSet<HTMLElement>();

    const getAnimated = () => Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const showImmediately = () => getAnimated().forEach((element) => element.classList.add("is-visible"));

    window.requestAnimationFrame(() => {
      document.documentElement.classList.add("motion-ready");
    });

    if (reduceMotion || !("IntersectionObserver" in window)) {
      showImmediately();
      const fallbackObserver = new MutationObserver(showImmediately);
      fallbackObserver.observe(document.body, { childList: true, subtree: true });
      return () => fallbackObserver.disconnect();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    const observeAnimated = () => {
      getAnimated().forEach((element) => {
        if (observed.has(element) || element.classList.contains("is-visible")) return;
        observed.add(element);
        observer.observe(element);
      });
    };

    observeAnimated();

    const mutationObserver = new MutationObserver(() => {
      window.requestAnimationFrame(observeAnimated);
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, []);

  return null;
}
