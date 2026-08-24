"use client";

import { useEffect, useRef, useState } from "react";

// Counts up to `value` once its element scrolls into view.
export default function Counter({ value, suffix = "", duration = 1400 }: { value: number; suffix?: string; duration?: number }) {
    const [display, setDisplay] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const animate = () => {
            const start = performance.now();
            const tick = (now: number) => {
                const progress = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                setDisplay(Math.round(value * eased));
                if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
        };

        if (typeof IntersectionObserver === "undefined") {
            animate();
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animate();
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.4 }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, [value, duration]);

    return (
        <span ref={ref}>
            {display}
            {suffix}
        </span>
    );
}
