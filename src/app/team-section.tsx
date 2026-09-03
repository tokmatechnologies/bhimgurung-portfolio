"use client";

import Image from "next/image";
import {
  type CSSProperties,
  type KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

const teamMembers = [
  {
    name: "Suman Pokhrel",
    role: "Chief Finance Officer",
    photo: "teams/suman-pokhrel.jpeg",
    bio: "Oversees financial planning, budgeting, investments, and overall financial management in Dubai, supporting sustainable growth and informed business decisions.",
  },
  {
    name: "Arjun Uprety",
    role: "Chief Executive Officer at GMIC",
    photo: "teams/Arjun-Uprety.jpeg",
    bio: "Leads the overall strategy, business development, investment initiatives, and operations of Global Business Management and Investment Company Nepal (GMIC Nepal), focusing on growth opportunities and strategic partnerships.",
  },
] as const;

type Progress = {
  left: number;
  width: number;
  current: number;
  canScrollBack: boolean;
  canScrollForward: boolean;
};

const initialProgress: Progress = {
  left: 0,
  width: 25,
  current: 1,
  canScrollBack: false,
  canScrollForward: true,
};

function ArrowIcon({ direction }: { direction: "previous" | "next" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={direction === "previous" ? "M15 5 8 12l7 7" : "M9 5l7 7-7 7"} />
    </svg>
  );
}

export default function TeamSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [openCard, setOpenCard] = useState<number | null>(null);
  const [progress, setProgress] = useState(initialProgress);

  const updateProgress = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = Math.max(track.scrollWidth - track.clientWidth, 0);
    const width =
      maxScroll > 4
        ? Math.max((track.clientWidth / track.scrollWidth) * 100, 14)
        : 100;
    const ratio = maxScroll > 0 ? track.scrollLeft / maxScroll : 0;
    const current =
      maxScroll > 4
        ? Math.round(ratio * (teamMembers.length - 1)) + 1
        : teamMembers.length;

    setProgress({
      left: ratio * (100 - width),
      width,
      current,
      canScrollBack: track.scrollLeft > 2,
      canScrollForward: track.scrollLeft < maxScroll - 2,
    });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateProgress();
    const observer = new ResizeObserver(updateProgress);
    observer.observe(track);
    track.addEventListener("scroll", updateProgress, { passive: true });

    return () => {
      observer.disconnect();
      track.removeEventListener("scroll", updateProgress);
    };
  }, [updateProgress]);

  useEffect(() => {
    function closeOnOutsideClick(event: MouseEvent) {
      if (!carouselRef.current?.contains(event.target as Node)) {
        setOpenCard(null);
      }
    }

    function closeOnEscape(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") setOpenCard(null);
    }

    document.addEventListener("click", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("click", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  function scrollByCard(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>("[data-team-card]");
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 20;
    const distance = card ? card.offsetWidth + gap : track.clientWidth * 0.8;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    track.scrollBy({
      left: direction * distance,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  function handleTrackKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      scrollByCard(event.key === "ArrowLeft" ? -1 : 1);
    }
  }

  const progressStyle: CSSProperties = {
    left: `${progress.left}%`,
    width: `${progress.width}%`,
  };

  return (
    <section
      className="scroll-mt-16 overflow-hidden bg-white py-portfolio-section text-portfolio-muted"
      id="team"
    >
      <div className="portfolio-container">
        <div className="section-heading" data-reveal-group>
          <p className="eyebrow" data-reveal>
            Team
          </p>
          <h2 className="section-title max-w-[28ch]" data-reveal>
            A hands-on team across{" "}
            <em className="font-medium">
              management, investment &amp; community
            </em>
            .
          </h2>
          <p className="max-w-[56ch] text-[17px] leading-relaxed" data-reveal>
            Bringing operational, financial, and community experience to every
            client relationship. Hover a card for more.
          </p>
        </div>

        <div ref={carouselRef} data-reveal>
          <div
            ref={trackRef}
            className="-mr-5 flex snap-x snap-mandatory gap-5 overflow-x-auto pr-5 [scrollbar-width:none] sm:-mr-6 sm:pr-6 [&::-webkit-scrollbar]:hidden"
            tabIndex={0}
            role="region"
            aria-label="Team members"
            aria-describedby="team-carousel-status"
            onKeyDown={handleTrackKeyDown}
          >
            {teamMembers.map((member, index) => {
              const isOpen = openCard === index;
              const bioId = `team-bio-${index + 1}`;

              return (
                <article
                  key={`${member.role}-${index}`}
                  data-team-card
                  className="relative h-93 basis-4/5 shrink-0 snap-start overflow-hidden border border-portfolio-line bg-portfolio-paper sm:basis-65 lg:h-100 lg:basis-75"
                  onMouseEnter={() => setOpenCard(index)}
                  onMouseLeave={() =>
                    setOpenCard((current) =>
                      current === index ? null : current,
                    )
                  }
                >
                  <Image
                    src={member.photo}
                    alt=""
                    fill
                    sizes="(max-width: 560px) 82vw, 300px"
                    className="object-cover object-top  contrast-[1.03]"
                  />

                  <div
                    className={`pointer-events-none absolute inset-x-0 bottom-0 h-[62%] bg-linear-to-t from-black/85 via-black/40 to-transparent transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
                    aria-hidden="true"
                  />

                  <div
                    id={bioId}
                    className={`absolute inset-0 flex items-end bg-portfolio-accent/50 p-6 pb-24 text-white backdrop-blur-md transition-opacity duration-400 motion-reduce:transition-none ${
                      isOpen ? "opacity-100" : "pointer-events-none opacity-0"
                    }`}
                    aria-hidden={!isOpen}
                  >
                    <p className="text-sm leading-[1.6] text-white/95">
                      {member.bio}
                    </p>
                  </div>

                  <div className="absolute inset-x-6 bottom-6 z-10 flex flex-col gap-1 text-white">
                    <span className="text-lg font-medium tracking-tight">
                      {member.name}
                    </span>
                    <span className="text-[12.5px] font-medium tracking-[.04em] text-white/70 uppercase">
                      {member.role}
                    </span>
                  </div>

                  <span
                    className={`pointer-events-none absolute top-5 right-5 z-10 grid size-9 place-items-center text-2xl leading-none transition-transform duration-300 motion-reduce:transition-none ${
                      isOpen ? "rotate-45 text-white" : "text-portfolio-ink"
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>

                  <button
                    type="button"
                    className="absolute inset-0 z-20 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-accent focus-visible:ring-inset"
                    aria-expanded={isOpen}
                    aria-controls={bioId}
                    onClick={() => setOpenCard(isOpen ? null : index)}
                  >
                    <span className="sr-only">
                      {member.name} — {member.role}.{" "}
                      {isOpen ? "Hide bio" : "Show bio"}
                    </span>
                  </button>
                </article>
              );
            })}
          </div>

          <div className="mt-7 flex items-center gap-6">
            <div
              className="relative h-0.5 flex-1 overflow-hidden bg-portfolio-line"
              aria-hidden="true"
            >
              <span
                className="absolute inset-y-0 bg-portfolio-accent transition-[left,width] duration-200 motion-reduce:transition-none"
                style={progressStyle}
              />
            </div>
            <p className="sr-only" id="team-carousel-status" aria-live="polite">
              Team member {progress.current} of {teamMembers.length}
            </p>
            <div className="flex shrink-0 gap-2.5">
              <button
                type="button"
                className="inline-flex size-12 items-center justify-center border border-portfolio-line text-portfolio-ink transition hover:border-portfolio-ink disabled:cursor-default disabled:opacity-30 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-accent focus-visible:ring-offset-2"
                aria-label="Previous team member"
                disabled={!progress.canScrollBack}
                onClick={() => scrollByCard(-1)}
              >
                <ArrowIcon direction="previous" />
              </button>
              <button
                type="button"
                className="inline-flex size-12 items-center justify-center border border-portfolio-line text-portfolio-ink transition hover:border-portfolio-ink disabled:cursor-default disabled:opacity-30 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-accent focus-visible:ring-offset-2"
                aria-label="Next team member"
                disabled={!progress.canScrollForward}
                onClick={() => scrollByCard(1)}
              >
                <ArrowIcon direction="next" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
