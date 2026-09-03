import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../footer";
import Header from "../header";
import { contact, leadershipRoles } from "../site-data";

export const metadata: Metadata = {
  title: "About Bhim Gurung | Executive, Entrepreneur & Community Leader",
  description:
    "Learn about Bhim Gurung's work in business, community leadership, education, culture, music, and sports.",
};

const container = "mx-auto w-full max-w-portfolio px-5 md:px-6";
const eyebrow =
  "mb-5 w-fit rounded-portfolio-pill bg-portfolio-rose px-4 py-2 text-sm font-medium text-portfolio-accent";
const display =
  "max-w-3xl text-5xl leading-portfolio-display font-medium tracking-portfolio-display text-portfolio-ink md:text-6xl";
const card =
  "flex min-h-72 flex-col rounded-portfolio-lg border border-portfolio-line bg-white p-7 shadow-portfolio transition duration-300 hover:-translate-y-1 hover:shadow-portfolio-hover md:p-10";

export default function AboutPage() {
  return (
    <>
      <Header solid />
      <main className="bg-white pt-[101px] text-portfolio-muted md:pt-[105px]">
        <section className="bg-portfolio-paper py-24 lg:py-36">
          <div
            className={`${container} grid items-center gap-12 lg:grid-cols-2 lg:gap-20`}
          >
            <div data-reveal-group>
              <p className={eyebrow} data-reveal>
                About Bhim Gurung
              </p>
              <h1 className={display} data-reveal>
                A life of business, leadership, service, education, and culture.
              </h1>
              <p
                className="mt-7 max-w-2xl text-lg leading-relaxed text-portfolio-muted"
                data-reveal
              >
                Global CEO · Entrepreneur · Investor · Educator · Community
                Leader · Musician
              </p>
            </div>
            <div
              className="relative min-h-80 overflow-hidden rounded-portfolio-xl bg-portfolio-line shadow-portfolio lg:min-h-125"
              data-reveal
            >
              <Image
                className="object-cover object-center"
                src="/Bhim-gurung1.jpeg"
                alt="Bhim Gurung"
                fill
                preload
                sizes="(max-width: 800px) 100vw, 42vw"
              />
            </div>
          </div>
        </section>

        <section className="py-portfolio-section">
          <div
            className={`${container} grid gap-14 lg:grid-cols-3 lg:gap-24`}
          >
            <aside data-reveal>
              <p className={eyebrow}>The story</p>
              <dl className="grid gap-5 rounded-portfolio-lg border border-portfolio-line bg-portfolio-paper p-6">
                <div>
                  <dt className="text-xs font-medium text-portfolio-accent">
                    Based in
                  </dt>
                  <dd className="mt-1 font-medium text-portfolio-ink">
                    Omaha, Nebraska
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-portfolio-accent">
                    Current role
                  </dt>
                  <dd className="mt-1 font-medium text-portfolio-ink">
                    Global CEO, GBMIC
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-portfolio-accent">
                    Education
                  </dt>
                  <dd className="mt-1 font-medium text-portfolio-ink">
                    BBA · Advanced music study
                  </dd>
                </div>
              </dl>
            </aside>
            <article
              className="max-w-3xl space-y-7 text-lg leading-8 lg:col-span-2"
              data-reveal-group
            >
              <p
                className="text-2xl leading-snug text-portfolio-ink md:text-3xl"
                data-reveal
              >
                Mr. Bhim Gurung is a multifaceted business executive,
                entrepreneur, investor, educator, community leader, leadership
                coach, musician, cultural advocate, and sports enthusiast.
              </p>
              <p data-reveal>
                With experience across global business management, investment,
                healthcare services, accounting, real estate, logistics, courier
                services, restaurant and hospitality, digital marketing and
                sales, e-commerce, and technology, he brings a diverse
                entrepreneurial perspective to business and community
                development.
              </p>
              <p data-reveal>
                He currently serves as Global CEO of Global Business Management
                &amp; Investment Co. (GBMIC), focusing on business development,
                investment opportunities, strategic relationships, partnerships,
                and global growth.
              </p>
            </article>
          </div>
        </section>

        <section className="bg-portfolio-ink-soft py-portfolio-section text-white">
          <div className={container}>
            <p
              className="mb-8 w-fit rounded-portfolio-pill bg-portfolio-accent/15 px-4 py-2 text-sm font-medium text-portfolio-accent-soft"
              data-reveal
            >
              Community &amp; nonprofit leadership
            </p>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
              <h2
                className="max-w-xl text-4xl leading-tight font-medium tracking-portfolio-display md:text-6xl"
                data-reveal
              >
                Leadership is measured by the opportunities we create for others.
              </h2>
              <div
                className="border-t border-white/20"
                role="list"
                data-reveal-group
              >
                {leadershipRoles.map(([org, role]) => (
                  <div
                    className="flex flex-col gap-1 border-b border-white/20 py-5 text-portfolio-muted sm:flex-row sm:justify-between sm:gap-6"
                    key={org}
                    role="listitem"
                    data-reveal
                  >
                    <span>{org}</span>
                    <strong className="font-medium text-white">{role}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-portfolio-section">
          <div
            className={`${container} grid gap-5 md:grid-cols-2`}
            data-reveal-group
          >
            <article className={card} data-reveal>
              <span className="w-fit rounded-portfolio-pill bg-portfolio-rose px-3 py-2 text-xs text-portfolio-accent">
                01
              </span>
              <h2 className="mt-auto pt-12 text-2xl font-medium text-portfolio-ink">
                Education &amp; teaching
              </h2>
              <p className="mt-4 leading-relaxed">
                Bhim worked as a teacher with Omaha Public Schools and the
                Balmiki Education Foundation in Jhapa, Nepal. He has also taught
                dance through schools, ethnic organizations, cultural programs,
                and youth activities.
              </p>
            </article>
            <article className={card} data-reveal>
              <span className="w-fit rounded-portfolio-pill bg-portfolio-rose px-3 py-2 text-xs text-portfolio-accent">
                02
              </span>
              <h2 className="mt-auto pt-12 text-2xl font-medium text-portfolio-ink">
                Music &amp; cultural arts
              </h2>
              <p className="mt-4 leading-relaxed">
                A professional Dhuki Tabla player and multi-instrumentalist, Bhim
                has pursued advanced study in music and used the arts to preserve
                and share cultural traditions across generations.
              </p>
            </article>
            <article className={card} data-reveal>
              <span className="w-fit rounded-portfolio-pill bg-portfolio-rose px-3 py-2 text-xs text-portfolio-accent">
                03
              </span>
              <h2 className="mt-auto pt-12 text-2xl font-medium text-portfolio-ink">
                Leadership &amp; coaching
              </h2>
              <p className="mt-4 leading-relaxed">
                As a leadership coach with Thrive Leadership Club and through
                his involvement with Amway Global America, he has supported
                personal growth, team development, communication, and
                entrepreneurship.
              </p>
            </article>
            <article className={card} data-reveal>
              <span className="w-fit rounded-portfolio-pill bg-portfolio-rose px-3 py-2 text-xs text-portfolio-accent">
                04
              </span>
              <h2 className="mt-auto pt-12 text-2xl font-medium text-portfolio-ink">
                Sports &amp; teamwork
              </h2>
              <p className="mt-4 leading-relaxed">
                His experience as a football team manager, volleyball player,
                and supporter of community athletics reflects his belief in
                discipline, coordination, and shared purpose.
              </p>
            </article>
          </div>
        </section>

        <section className="bg-portfolio-ink-soft py-24 text-white lg:py-32">
          <div className={`${container} text-center`} data-reveal-group>
            <p
              className="mx-auto max-w-4xl text-4xl leading-tight font-medium tracking-portfolio-display md:text-6xl"
              data-reveal
            >
              “Business leadership with community service, education, culture,
              and global vision.”
            </p>
            <div
              className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row"
              data-reveal
            >
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-portfolio-pill bg-portfolio-accent px-7 font-medium text-white transition hover:-translate-y-0.5"
                href="/contact"
              >
                Start a conversation ↗
              </Link>
              <a
                className="text-portfolio-muted transition hover:text-white"
                href={contact.phoneHref}
              >
                {contact.phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
