import Image from "next/image";
import type { ReactNode } from "react";

type IconName = "people" | "pin" | "heart" | "award" | "grid" | "hands";

function LineIcon({
  name,
  className = "size-6",
}: {
  name: IconName;
  className?: string;
}) {
  const paths: Record<IconName, ReactNode> = {
    people: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c0-4 2.7-7 6-7s6 3 6 7M17 9a2.5 2.5 0 0 1 0 5M16 16c3 0 5 1.8 5 4" />
      </>
    ),
    pin: (
      <>
        <path d="M12 22S5 14.5 5 9a7 7 0 1 1 14 0c0 5.5-7 13-7 13Z" />
        <circle cx="12" cy="9" r="2" />
      </>
    ),
    heart: (
      <path d="M12 21S3 16 3 8.8A4.8 4.8 0 0 1 12 6a4.8 4.8 0 0 1 9 2.8C21 16 12 21 12 21Z" />
    ),
    award: (
      <>
        <circle cx="12" cy="9" r="6" />
        <path d="m9 14-2 8 5-3 5 3-2-8M9.5 9l1.7 1.7L15 7" />
      </>
    ),
    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="5" />
        <rect x="14" y="12" width="7" height="9" />
        <rect x="3" y="14" width="7" height="7" />
      </>
    ),
    hands: (
      <>
        <path d="M2 11h5l3-3 4 3h8M7 11l5 5 5-5" />
      </>
    ),
  };

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

const affiliations = [
  ["E-Global Media House", "/affiliations/e-global.png"],
  ["GBMIC", "/affiliations/gbmic.png"],
  ["Tokma Technologies", "/affiliations/tokma.svg"],
  ["GMAS", "/affiliations/gmas.png"],
  ["Great Event Centers", "/affiliations/great-events-center.svg"],
  ["Great Events Restaurant & Bar", "/affiliations/great-events.png"],
  ["i-Mart Curier", "/affiliations/imart-curier.png"],
  ["i-Mart Logistics", "/affiliations/imart-logistics.png"],
  [
    "International Investment Cooperations",
    "/affiliations/international-investment-corporation.png",
  ],
  ["Nepalink", "/affiliations/nepalink.png"],
  ["Realty Karma", "/affiliations/realty-karma.png"],
  ["UFHHC", "/affiliations/ufhhc.png"],
  ["United Nebraska Home Care Revival", "/affiliations/unhcr.png"],
] as const;

const reasons = [
  [
    "Community Understanding",
    "Clear roots in Nebraska's Bhutanese-American community, with cultural fluency and language accessibility built in.",
    "heart",
  ],
  [
    "Proven Track Record",
    "500+ clients served in one year — real credentials, not promises.",
    "award",
  ],
  [
    "Comprehensive Services",
    "Nine services under one roof — from health care to business management to long-term planning.",
    "grid",
  ],
  [
    "Hands-On Approach",
    "Direct, personal guidance from the GBMIC team — never distant, never outsourced.",
    "hands",
  ],
] as const satisfies readonly (readonly [string, string, IconName])[];

const testimonials = [
  [
    "GBMIC helped us navigate starting a business in Nebraska. They understood exactly what we needed.",
    "Small Business Owner",
    "Startup client, Nebraska",
  ],
  [
    "The health care guidance we received was exceptional. They truly care about the community.",
    "Health Care Client",
    "Advisory engagement",
  ],
  [
    "Professional, accessible, and always available. I recommend GBMIC to everyone.",
    "Community Member",
    "Long-time client",
  ],
] as const;

export function AffiliationsSection() {
  return (
    <section
      className="bg-portfolio-paper py-portfolio-section"
      id="affiliations"
    >
      <div className="portfolio-container">
        <header
          className="section-heading items-center text-center"
          data-reveal-group
        >
          <p className="eyebrow" data-reveal>
            Affiliations
          </p>
          <h2 className="section-title max-w-[30ch]" data-reveal>
            Organizations across the GBMIC network.
          </h2>
        </header>
        <ul
          className="grid grid-cols-2 gap-2 min-[620px]:grid-cols-4 min-[980px]:grid-cols-6 min-[980px]:gap-3"
          data-reveal-group
        >
          {affiliations.map(([name, src]) => (
            <li
              className="flex min-h-36 items-center justify-center bg-white px-3 py-4 min-[620px]:min-h-33"
              key={name}
              data-reveal
            >
              {src ? (
                <div className="relative h-20 w-full">
                  <Image
                    src={src}
                    alt={name}
                    fill
                    sizes="(min-width: 980px) 180px, (min-width: 620px) 25vw, 50vw"
                    className="object-contain"
                  />
                </div>
              ) : (
                <span className="text-center text-sm font-medium leading-snug text-portfolio-muted">
                  {name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function AudienceSection() {
  return (
    <section
      className="bg-portfolio-paper py-portfolio-section"
      id="who-we-serve"
    >
      <div className="portfolio-container">
        <header className="section-heading" data-reveal-group>
          <p className="eyebrow" data-reveal>
            Who We Serve
          </p>
          <h2 className="section-title" data-reveal>
            Serving two audiences with one goal: lasting growth.
          </h2>
        </header>
        <div className="grid gap-8 min-[900px]:grid-cols-2" data-reveal-group>
          <article
            className="group border border-transparent bg-portfolio-accent px-7 py-9 text-white transition duration-300 hover:-translate-y-1 hover:shadow-portfolio-hover min-[900px]:px-10 min-[900px]:py-11"
            data-reveal
          >
            <span className="mb-5 grid size-14 place-items-center rounded-full bg-white/20">
              <LineIcon name="people" />
            </span>
            <h3 className="text-[22px] font-medium tracking-tight">
              Bhutanese-American Community
            </h3>
            <p className="mt-5 max-w-[42ch] leading-relaxed text-white/85">
              Rooted in the Bhutanese-American community of Nebraska, GBMIC
              understands your culture, your language, and the challenges you
              face. We&apos;re built to serve you first.
            </p>
          </article>
          <article
            className="group border border-portfolio-line bg-white px-7 py-9 transition duration-300 hover:-translate-y-1 hover:shadow-portfolio-hover min-[900px]:px-10 min-[900px]:py-11"
            data-reveal
          >
            <span className="mb-5 grid size-14 place-items-center rounded-full bg-portfolio-paper text-portfolio-ink">
              <LineIcon name="pin" />
            </span>
            <h3 className="text-[22px] font-medium tracking-tight text-portfolio-ink">
              Wider Nebraska Market
            </h3>
            <p className="mt-5 max-w-[42ch] leading-relaxed text-portfolio-muted">
              Our services are open to every business and family across
              Nebraska. Whether you&apos;re a startup, an established business,
              or a family seeking health care and financial guidance —
              we&apos;re here to help.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export function ReasonsSection() {
  return (
    <section className="bg-white py-portfolio-section" id="why-choose-us">
      <div className="portfolio-container">
        <header className="section-heading" data-reveal-group>
          <p className="eyebrow" data-reveal>
            Why Choose Us
          </p>
          <h2 className="section-title" data-reveal>
            Four reasons clients choose GBMIC.
          </h2>
        </header>
        <div
          className="grid gap-6 sm:grid-cols-2 min-[900px]:grid-cols-4"
          data-reveal-group
        >
          {reasons.map(([title, text, icon]) => (
            <article
              className="group border border-portfolio-line bg-white px-7 py-8 transition duration-300 hover:-translate-y-1 hover:border-portfolio-accent hover:shadow-portfolio-hover"
              key={title}
              data-reveal
            >
              <span className="mb-4 grid size-13 place-items-center rounded-full bg-portfolio-paper text-portfolio-ink transition-colors group-hover:bg-portfolio-rose group-hover:text-portfolio-accent">
                <LineIcon name={icon} />
              </span>
              <h3 className="text-lg font-medium tracking-tight text-portfolio-ink">
                {title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-portfolio-muted">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section
      className="bg-portfolio-paper py-portfolio-section"
      id="testimonials"
    >
      <div className="portfolio-container">
        <header
          className="section-heading items-center text-center"
          data-reveal-group
        >
          <p className="eyebrow" data-reveal>
            Testimonials
          </p>
          <h2 className="section-title max-w-[22ch]" data-reveal>
            What our clients say.
          </h2>
          <p className="text-[17px] text-portfolio-muted" data-reveal>
            Real feedback, real results, real people.
          </p>
        </header>
        <div
          className="mx-auto grid max-w-md gap-13 min-[900px]:max-w-none min-[900px]:grid-cols-3 min-[900px]:gap-12"
          data-reveal-group
        >
          {testimonials.map(([quote, name, meta]) => (
            <figure
              className="flex flex-col items-center gap-[22px] text-center"
              key={name}
              data-reveal
            >
              <span
                className="font-serif text-7xl leading-[.55] text-portfolio-accent"
                aria-hidden="true"
              >
                “
              </span>
              <blockquote className="max-w-[34ch] text-[19px] leading-normal font-medium tracking-[-.01em] text-portfolio-ink">
                {quote}
              </blockquote>
              <figcaption>
                <strong className="block text-[15px] font-medium tracking-[-.01em] text-portfolio-ink">
                  {name}
                </strong>
                <span className="mt-2.5 block text-sm tracking-[.01em] text-portfolio-muted">
                  {meta}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
