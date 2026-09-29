import Image from "next/image";
import Link from "next/link";
import Footer from "./footer";
import Header from "./header";
import HomeContactSection from "./home-contact-section";
import { AffiliationsSection, AudienceSection, ReasonsSection, TestimonialsSection } from "./home-sections";
import ServiceShowcase from "./service-showcase";
import { contact, ventures } from "./site-data";
import TeamSection from "./team-section";

const ventureImages = [
  { src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=82", credit: "Dylan Gillis", href: "https://unsplash.com/photos/KdeqA3aTnBY" },
  { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=82", credit: "Marvin Meyer", href: "https://unsplash.com/photos/SYTO3xs06fU" },
  { src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=82", credit: "Scott Graham", href: "https://unsplash.com/photos/5fNmWej4tAA" },
  { src: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=900&q=82", credit: "CHUTTERSNAP", href: "https://unsplash.com/photos/BNBA1h-NgdY" },
  { src: "https://images.unsplash.com/flagged/photo-1558954157-aa76c0d246c6?auto=format&fit=crop&w=900&q=82", credit: "Precondo CA", href: "https://unsplash.com/photos/QHDFm084RNk" },
  { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=82", credit: "Marvin Meyer", href: "https://unsplash.com/photos/SYTO3xs06fU" },
  { src: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=900&q=82", credit: "CHUTTERSNAP", href: "https://unsplash.com/photos/BNBA1h-NgdY" },
  { src: "https://images.unsplash.com/flagged/photo-1558954157-aa76c0d246c6?auto=format&fit=crop&w=900&q=82", credit: "Precondo CA", href: "https://unsplash.com/photos/QHDFm084RNk" },
  { src: "https://images.unsplash.com/photo-1666887360680-9dc27a1d2753?auto=format&fit=crop&w=900&q=82", credit: "Nappy", href: "https://unsplash.com/photos/dcBO4nt4MRE" },
  { src: "/great-events-center-img.jpeg", credit: "Great Events Center", href: "#" },
  { src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=82", credit: "Al Elmes", href: "https://unsplash.com/photos/ULHxWq8reao" },
  { src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=82", credit: "Dylan Gillis", href: "https://unsplash.com/photos/KdeqA3aTnBY" },
  { src: "/great-events-restaurant.jpeg", credit: "Great Event Hangout Restaurant & Bar", href: "#" },
] as const;

const processSteps = [
  ["Book a call", "We start with a conversation about where the business is and where you want it to go."],
  ["Discovery", "A close look at the numbers, the operation, and the opportunities on the table."],
  ["Strategy", "A plan you can act on — priorities, timelines, and the reasoning behind each."],
  ["Execution", "Hands-on support putting the plan to work, adjusting as reality comes in."],
  ["Ongoing support", "A steady partner for the decisions that keep coming after the launch."],
] as const;

const faqs = [
  ["What kinds of businesses do you work with?", "Owner-run businesses across health care, real estate, restaurants, and retail — small to mid-size, at any stage."],
  ["How does the first consultation work?", "It's a straightforward conversation — no cost, no obligation. We talk through your situation and whether we're a good fit."],
  ["Do you help with investment and financing?", "Yes. Investment advisory and financial planning are core to GBMIC, alongside day-to-day management support."],
  ["Do you support the Bhutanese-American community directly?", "Yes. Bhim is an active community leader in Nebraska and regularly connects members to guidance and opportunity."],
] as const;

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-portfolio-showcase py-32 text-white min-[760px]:min-h-portfolio-hero min-[760px]:py-30" id="home">
          <div className="absolute inset-0">
            <Image src="/reference-gurung-hero.jpg" alt="Bhim Gurung" fill sizes="100vw" preload className="object-cover object-[80%_center] min-[760px]:object-right" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,10,12,.82),rgba(8,10,12,.48))] min-[760px]:bg-reference-hero" />
          </div>
          <div className="portfolio-container relative">
            <div className="max-w-[620px]">
              <h1 className="max-w-[600px] text-[clamp(32px,4.2vw,48px)] leading-[1.1] font-medium tracking-[-.03em]">I Help Business Owners Run Tighter Operations, Invest With Patience, and Grow Companies That Last.</h1>
              <p className="mt-5 max-w-[46ch] text-lg leading-[1.55] text-white/80">I&apos;m Bhim Gurung, founder and CEO of GBMIC. For two decades I&apos;ve built and advised companies across nine areas, from management and investment to healthcare and real estate. I&apos;m also a trusted voice for Nebraska&apos;s Bhutanese-American entrepreneurs.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link className="reference-button bg-portfolio-accent text-white hover:bg-portfolio-accent-strong" href="/#contact">Book a consultation</Link>
                <Link className="reference-button border border-white/40 text-white hover:border-white hover:bg-white/10" href="/about">About me</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="scroll-mt-16 overflow-hidden bg-white py-portfolio-section" id="about">
          <div className="portfolio-container">
            <div className="grid gap-10 min-[940px]:grid-cols-[minmax(390px,.82fr)_minmax(0,1fr)] min-[940px]:items-stretch min-[940px]:gap-16">
              <div className="relative min-[940px]:order-first" data-reveal-group>
                <div className="absolute -top-6 -right-6 hidden h-28 w-28 border-t border-r border-portfolio-accent min-[940px]:block" aria-hidden="true" />
                <div className="absolute -bottom-6 -left-6 hidden h-28 w-28 border-b border-l border-portfolio-accent min-[940px]:block" aria-hidden="true" />
                <div className="group relative min-h-[420px] overflow-hidden bg-portfolio-paper shadow-portfolio-hover min-[760px]:min-h-[540px] min-[940px]:h-full" data-reveal>
                  <Image src="/services-featured-boardroom.png" alt="Modern boardroom prepared for a business strategy meeting" fill sizes="(max-width: 940px) 100vw, 40vw" className="object-cover object-center transition duration-700 group-hover:scale-[1.025]" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0)_45%,rgba(17,17,17,.78))]" />
                  <div className="absolute top-6 right-6 bg-white/95 px-5 py-4 shadow-portfolio backdrop-blur min-[760px]:top-8 min-[760px]:right-8">
                    <p className="text-[12px] font-medium uppercase tracking-[.12em] text-portfolio-muted">Advisory focus</p>
                    <p className="mt-1 text-[28px] leading-none font-medium tracking-[-.04em] text-portfolio-accent">9</p>
                    <p className="mt-1 text-sm leading-snug text-portfolio-muted">service areas connected</p>
                  </div>
                  <div className="absolute inset-x-5 bottom-5 bg-portfolio-ink/92 p-6 text-white shadow-portfolio min-[760px]:inset-x-8 min-[760px]:bottom-8 min-[760px]:p-7">
                    <div className="mb-5 h-px w-12 bg-portfolio-accent" />
                    <p className="text-sm font-medium uppercase tracking-[.1em] text-white/60">Leadership style</p>
                    <p className="mt-3 max-w-[34ch] text-[24px] leading-[1.12] font-medium tracking-[-.03em]">
                      Clear strategy, steady execution, and personal guidance for every client relationship.
                    </p>
                    <p className="mt-5 text-[15px] leading-relaxed text-white/68">
                      Business management, investment strategy, operations, and community-focused growth.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between border-y border-portfolio-line py-8 min-[760px]:py-12" data-reveal-group>
                <div>
                  <p className="eyebrow" data-reveal>About Bhim Gurung</p>
                  <h2 className="mt-5 max-w-[13ch] text-[clamp(40px,6.4vw,76px)] leading-[.98] font-medium tracking-[-.045em] text-portfolio-ink" data-reveal>
                    Built on trust. Driven by action.
                  </h2>
                </div>

                <div className="mt-10 grid gap-8 min-[760px]:grid-cols-[minmax(0,1fr)_220px] min-[760px]:items-end">
                  <p className="max-w-[58ch] text-[18px] leading-[1.65] text-portfolio-muted" data-reveal>
                    Bhim Gurung leads GBMIC with a simple belief: sound management and patient investment build businesses that last. Alongside his work with clients, he is a trusted voice in Nebraska&apos;s Bhutanese-American community, connecting people to opportunity and helping them find their footing.
                  </p>

                  <Link className="reference-button w-fit bg-portfolio-ink text-white hover:bg-portfolio-accent" href="/about" data-reveal>
                    Read full story
                  </Link>
                </div>

                <div className="mt-10 grid border-t border-portfolio-line pt-6 sm:grid-cols-3" data-reveal>
                  {[["20+", "Years leading businesses"], ["9", "Service areas under one roof"], ["500+", "Clients served in one year"]].map(([value, label], index) => (
                    <div className={`border-portfolio-line py-5 sm:px-6 ${index === 0 ? "sm:pl-0" : "border-t sm:border-t-0 sm:border-l"}`} key={String(label)}>
                      <strong className="block stat-value text-[clamp(36px,5vw,58px)] leading-none font-medium tracking-[-.04em] text-portfolio-ink">{value}</strong>
                      <span className="mt-3 block max-w-[18ch] text-[15px] leading-snug text-portfolio-muted">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="scroll-mt-16 bg-portfolio-paper py-portfolio-section" id="ventures">
          <div className="w-full">
            <header className="grid items-end gap-6 border-y border-portfolio-line bg-white px-5 py-10 min-[760px]:px-10 min-[900px]:grid-cols-[minmax(0,1fr)_minmax(280px,480px)] min-[1200px]:px-14" data-reveal-group>
              <div>
                <p className="eyebrow" data-reveal>Business &amp; Entrepreneurship</p>
                <h2 className="section-title mt-5 max-w-[18ch]" data-reveal>A connected portfolio built around service.</h2>
              </div>
              <p className="max-w-[54ch] text-[17px] leading-relaxed text-portfolio-muted min-[900px]:justify-self-end" data-reveal>Bhim&apos;s ventures bring together investment, technology, culture, health care, and community organizations.</p>
            </header>
            <div className="grid gap-px bg-portfolio-line p-px min-[760px]:grid-cols-2 min-[1120px]:grid-cols-3" data-reveal-group>
              {ventures.filter(([title]) => title !== "United Homes").map(([title, description], index) => {
                const image = ventureImages[index];

                return (
                  <article className="group relative min-h-[420px] overflow-hidden bg-white transition duration-300 min-[1120px]:min-h-[520px]" key={title} data-reveal>
                    <Image src={image.src} alt="" fill sizes="(max-width: 760px) 100vw, (max-width: 1120px) 50vw, 33vw" className="object-cover object-center opacity-100 brightness-[.92] saturate-[.9] transition duration-700 group-hover:scale-[1.045] group-hover:brightness-[1.08] group-hover:saturate-[1.04]" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(25,54,92,.62)_0%,rgba(25,54,92,.5)_42%,rgba(25,54,92,.72)_100%)] transition duration-500 group-hover:bg-[linear-gradient(180deg,rgba(25,54,92,.12)_0%,rgba(25,54,92,.08)_42%,rgba(25,54,92,.2)_100%)]" />
                    <div className="absolute inset-0 border border-white/28 transition duration-300 group-hover:border-white/70" />
                    <div className="absolute inset-x-0 bottom-0 h-1.5 bg-portfolio-accent transition duration-300 group-hover:h-2" aria-hidden="true" />
                    <div className="absolute inset-x-4 top-4 overflow-hidden border border-white/24 bg-[#1f3f6d]/72 p-5 text-white shadow-portfolio backdrop-blur-[2px] transition duration-300 group-hover:border-white/45 group-hover:bg-white/90 group-hover:text-portfolio-ink min-[760px]:inset-x-6 min-[760px]:top-6 min-[760px]:p-6 min-[1120px]:inset-x-8 min-[1120px]:top-8">
                      <div className="relative">
                      <div className="mb-4 flex items-center gap-4">
                        <span className="text-sm font-medium tracking-[.08em] text-portfolio-accent">{String(index + 1).padStart(2, "0")}</span>
                        <span className="h-px flex-1 bg-white/45 transition-colors group-hover:bg-portfolio-line" aria-hidden="true" />
                        <span className="text-[11px] font-medium uppercase tracking-[.12em] text-white/82 drop-shadow transition-colors group-hover:text-portfolio-muted group-hover:drop-shadow-none">GBMIC Network</span>
                      </div>
                      <h3 className="max-w-[24ch] text-[clamp(22px,2.35vw,32px)] leading-[1.05] font-medium tracking-[-.03em] drop-shadow-[0_2px_12px_rgba(0,0,0,.45)] transition group-hover:drop-shadow-none">{title}</h3>
                      <p className="mt-4 max-w-[50ch] text-[15.5px] leading-relaxed text-white/92 drop-shadow-[0_1px_8px_rgba(0,0,0,.5)] transition group-hover:text-portfolio-muted group-hover:drop-shadow-none">{description}</p>
                      </div>
                    </div>
                    <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-4 text-white min-[760px]:inset-x-6 min-[760px]:bottom-6 min-[1120px]:inset-x-8 min-[1120px]:bottom-8">
                      <span className="inline-flex min-h-10 items-center bg-portfolio-accent px-4 text-[13px] font-medium tracking-[-.01em] shadow-portfolio transition duration-300 group-hover:bg-white group-hover:text-portfolio-ink">
                        Explore More
                      </span>
                      <span className="grid size-11 place-items-center border border-white/35 bg-[#1f3f6d]/55 text-[22px] leading-none backdrop-blur transition duration-300 group-hover:border-white group-hover:bg-white group-hover:text-portfolio-ink" aria-hidden="true">
                        +
                      </span>
                    </div>
                    <a className="absolute right-3 bottom-18 bg-white/75 px-2 py-1 text-[9px] leading-none text-portfolio-ink/70 shadow-portfolio backdrop-blur transition hover:bg-white hover:text-portfolio-ink" href={image.href} target="_blank" rel="noreferrer">Photo: {image.credit} / Unsplash</a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <AffiliationsSection />

        <div className="home">
          <section className="premium-services" id="services">
            <div className="shell">
              <header className="premium-services__intro" data-reveal>
                <div className="premium-services__eyebrow"><Image src="/bhim-gurung-logo.png" alt="" width={579} height={139} /><span>Our services</span></div>
                <div><h2>One group. Diverse expertise. Built for global growth.</h2><p>We bring together business, healthcare, finance, technology, logistics, hospitality, and digital expertise under one integrated network.</p></div>
              </header>
              <div className="service-showcase-band"><ServiceShowcase /></div>
            </div>
          </section>
        </div>

        <AudienceSection />
        <ReasonsSection />

        <section className="scroll-mt-16 bg-portfolio-paper py-portfolio-section" id="process">
          <div className="portfolio-container grid items-start gap-8 min-[900px]:grid-cols-[2fr_3fr] min-[900px]:gap-20">
            <header className="flex flex-col gap-4" data-reveal-group><p className="eyebrow" data-reveal>Process</p><h2 className="section-title" data-reveal>A clear path from first call to a lasting partnership.</h2></header>
            <ol data-reveal-group>{processSteps.map(([title, text], index) => <li className="group grid border-b border-portfolio-line py-6 transition-colors hover:bg-white min-[560px]:-mx-5 min-[560px]:grid-cols-[64px_1fr] min-[560px]:gap-6 min-[560px]:px-5 min-[560px]:py-8 min-[560px]:first:pt-1" key={title} data-reveal><span className="text-[22px] font-medium tracking-wide text-portfolio-accent">{String(index + 1).padStart(2, "0")}</span><div className="mt-2 min-[560px]:mt-0"><h3 className="text-[22px] font-medium tracking-tight text-portfolio-ink transition-colors group-hover:text-portfolio-accent">{title}</h3><p className="mt-2 max-w-[60ch] leading-relaxed text-portfolio-muted">{text}</p></div></li>)}</ol>
          </div>
        </section>

        <TeamSection />
        <TestimonialsSection />

        <section className="scroll-mt-16 bg-white py-portfolio-section" id="faq">
          <div className="portfolio-container grid gap-12 min-[900px]:grid-cols-[2fr_3fr] min-[900px]:gap-20">
            <header data-reveal-group><p className="eyebrow" data-reveal>FAQ</p><h2 className="section-title mt-4" data-reveal>Answers to the questions that come up most.</h2><Link href="/#contact" className="reference-button mt-7 border border-portfolio-line text-portfolio-ink hover:border-portfolio-ink hover:shadow-portfolio" data-reveal>Still curious? Ask directly</Link></header>
            <div className="border-t border-portfolio-line" data-reveal-group>
              {faqs.map(([question, answer], index) => <details className="group border-b border-portfolio-line" open={index === 0} key={question} data-reveal><summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 text-[19px] font-medium tracking-[-.01em] text-portfolio-ink">{question}<span className="text-[26px] leading-none font-normal text-portfolio-muted transition-transform group-open:rotate-45 group-open:text-portfolio-ink">+</span></summary><p className="max-w-[60ch] pb-6 text-[16.5px] leading-[1.55] text-portfolio-muted">{answer}</p></details>)}
              <details className="group border-b border-portfolio-line" data-reveal><summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 text-[19px] font-medium tracking-[-.01em] text-portfolio-ink">How do I get started?<span className="text-[26px] leading-none font-normal text-portfolio-muted transition-transform group-open:rotate-45 group-open:text-portfolio-ink">+</span></summary><p className="max-w-[60ch] pb-6 text-[16.5px] leading-[1.55] text-portfolio-muted">Send a note through the form below or email <a className="text-portfolio-accent underline underline-offset-4" href={`mailto:${contact.email}`}>{contact.email}</a> — you&apos;ll hear back personally.</p></details>
            </div>
          </div>
        </section>

        <HomeContactSection />
      </main>
      <Footer />
    </div>
  );
}
