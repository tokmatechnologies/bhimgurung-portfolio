import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../footer";
import Header from "../header";
import { contact, services } from "../site-data";

export const metadata: Metadata = {
  title: "Services | Bhim Gurung",
  description:
    "Explore healthcare, business management, investment, real estate, accounting, marketing, logistics, hospitality, and technology services.",
};

const container = "mx-auto w-full max-w-portfolio px-5 md:px-6";
const eyebrow =
  "mb-5 w-fit rounded-portfolio-pill bg-portfolio-rose px-4 py-2 text-sm font-medium text-portfolio-accent";
const button =
  "inline-flex min-h-12 items-center justify-center rounded-portfolio-pill px-7 font-medium transition hover:-translate-y-0.5";

export default function ServicesPage() {
  return (
    <>
      <Header solid />
      <main className="bg-white pt-[101px] text-portfolio-muted">
        <section className="bg-portfolio-paper py-24 lg:py-36">
          <div className={container} data-reveal-group>
            <p className={eyebrow} data-reveal>
              Services &amp; experience
            </p>
            <h1
              className="max-w-3xl text-5xl leading-portfolio-display font-medium tracking-portfolio-display text-portfolio-ink md:text-6xl"
              data-reveal
            >
              Strong foundations for sustainable growth.
            </h1>
            <p
              className="mt-7 max-w-2xl text-lg leading-relaxed"
              data-reveal
            >
              Management insight, strategic connections, and cross-industry
              experience for businesses, organizations, families, and
              entrepreneurs.
            </p>
            <div
              className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center"
              data-reveal
            >
              <a
                className={`${button} bg-portfolio-ink text-white`}
                href={contact.phoneHref}
              >
                Call {contact.phoneDisplay}
              </a>
              <Link
                className="font-medium text-portfolio-ink underline decoration-portfolio-line underline-offset-4 transition hover:text-portfolio-accent"
                href="/contact"
              >
                Send an inquiry ↗
              </Link>
            </div>
          </div>
        </section>

        <section className="py-portfolio-section" aria-label="Service areas">
          <div
            className={`${container} grid gap-5 md:grid-cols-2 lg:grid-cols-3`}
            data-reveal-group
          >
            {services.map((service, index) => {
              const featured = service.featured;

              return (
                <article
                  key={service.title}
                  className={`flex min-h-80 flex-col rounded-portfolio-lg border p-7 shadow-portfolio transition duration-300 hover:-translate-y-1 hover:shadow-portfolio-hover ${
                    featured
                      ? "border-portfolio-accent bg-portfolio-accent text-white"
                      : "border-portfolio-line bg-white"
                  }`}
                  data-reveal
                >
                  <span
                    className={`w-fit rounded-portfolio-pill px-3 py-2 text-xs ${
                      featured
                        ? "bg-white/20 text-white"
                        : "bg-portfolio-rose text-portfolio-accent"
                    }`}
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2
                    className={`mt-auto pt-12 text-2xl font-medium ${
                      featured ? "text-white" : "text-portfolio-ink"
                    }`}
                  >
                    {service.title}
                  </h2>
                  <p
                    className={`mt-4 leading-relaxed ${
                      featured ? "text-white/90" : "text-portfolio-muted"
                    }`}
                  >
                    {service.description}
                  </p>
                  {featured && (
                    <a
                      className="mt-5 font-medium text-white underline decoration-white/50 underline-offset-4"
                      href="https://www.ufhhc.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit United Family Home Health Care ↗
                    </a>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <section className="bg-portfolio-ink-soft py-20 text-white lg:py-28">
          <div
            className={`${container} flex flex-col items-start justify-between gap-10 md:flex-row md:items-end`}
            data-reveal-group
          >
            <div data-reveal>
              <p className="mb-5 w-fit rounded-portfolio-pill bg-portfolio-accent/15 px-4 py-2 text-sm font-medium text-portfolio-accent-soft">
                Not sure where to begin?
              </p>
              <h2 className="max-w-xl text-4xl leading-tight font-medium tracking-portfolio-display md:text-5xl">
                One conversation can clarify the next step.
              </h2>
            </div>
            <a
              className={`${button} bg-portfolio-accent text-white`}
              href={contact.phoneHref}
              data-reveal
            >
              Call Bhim now
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
