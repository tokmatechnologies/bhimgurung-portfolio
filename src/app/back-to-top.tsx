"use client";

export default function BackToTop({ className }: { className?: string }) {
  function scrollToTop() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  return (
    <button className={className} type="button" onClick={scrollToTop}>
      Back to top <span aria-hidden="true">↑</span>
    </button>
  );
}
