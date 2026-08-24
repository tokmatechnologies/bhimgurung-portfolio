"use client";

import { useEffect } from "react";

// Adds an "is-visible" class to any [data-reveal] element as it scrolls into view.
export default function ScrollReveal() {
    useEffect(() => {
        const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
        if (!targets.length) return;

        if (typeof IntersectionObserver === "undefined") {
            targets.forEach((el) => el.classList.add("is-visible"));
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
        );

        targets.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return null;
}
