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
  { src: "https://images.unsplash.com/photo-1666887360680-9dc27a1d2753?auto=format&fit=crop&w=900&q=82", credit: "Nappy", href: "https://unsplash.com/photos/dcBO4nt4MRE" },
  { src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=82", credit: "Al Elmes", href: "https://unsplash.com/photos/ULHxWq8reao" },
  { src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=82", credit: "Dylan Gillis", href: "https://unsplash.com/photos/KdeqA3aTnBY" },
  { src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=82", credit: "Dylan Gillis", href: "https://unsplash.com/photos/KdeqA3aTnBY" },
  { src: "https://images.unsplash.com/photo-1667388969250-1c7220bf3f37?auto=format&fit=crop&w=900&q=82", credit: "Glenov Brankovic", href: "https://unsplash.com/photos/e4B5AvA7Jqo" },
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

        <section className="scroll-mt-16 bg-white py-portfolio-section" id="about">
          <div className="portfolio-container grid items-start gap-x-20 gap-y-8 min-[900px]:grid-cols-[200px_1fr]">
            <p className="eyebrow pt-2" data-reveal>About</p>
            <div className="flex flex-col gap-7" data-reveal-group>
              <h2 className="section-title max-w-[26ch]" data-reveal>Two decades of leadership across business, investment, and community.</h2>
              <p className="max-w-[54ch] text-[19px] leading-[1.55] text-portfolio-muted" data-reveal>Bhim Gurung leads GBMIC with a simple belief: sound management and patient investment build businesses that last. Alongside his work with clients, he is a trusted voice in Nebraska&apos;s Bhutanese-American community — connecting people to opportunity and helping them find their footing.</p>
            </div>
            <div className="border-t border-portfolio-line pt-2 min-[900px]:col-start-2" data-reveal-group>
              <div className="grid min-[560px]:grid-cols-3 min-[560px]:gap-5">
                {[["20+", "Years leading businesses"], ["9", "Service areas under one roof"], ["100%", "Focused on your outcome"]].map(([value, label]) => <div className="border-b border-portfolio-line py-5 min-[560px]:border-0 min-[560px]:pt-7" key={label} data-reveal><strong className="block text-[clamp(40px,5vw,56px)] leading-none font-medium tracking-[-.04em] text-portfolio-ink">{value}</strong><span className="mt-2 block max-w-[20ch] text-[15px] text-portfolio-muted">{label}</span></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="scroll-mt-16 bg-portfolio-paper py-portfolio-section" id="ventures">
          <div className="portfolio-container grid items-start gap-10 min-[900px]:grid-cols-[minmax(0,320px)_1fr] min-[900px]:gap-18">
            <header className="flex flex-col gap-5 min-[900px]:sticky min-[900px]:top-24" data-reveal-group><p className="eyebrow" data-reveal>Business &amp; Entrepreneurship</p><h2 className="section-title max-w-[20ch]" data-reveal>A connected portfolio built around service.</h2><p className="text-[17px] leading-relaxed text-portfolio-muted" data-reveal>Bhim&apos;s ventures bring together investment, technology, culture, health care, and community organizations.</p></header>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-reveal-group>
              {ventures.filter(([title]) => title !== "United Homes").map(([title, description], index) => {
                const image = ventureImages[index];

                return <article className="group border border-portfolio-line bg-white transition duration-300 hover:-translate-y-1 hover:border-portfolio-accent hover:shadow-portfolio-hover" key={title} data-reveal><div className="relative aspect-[16/10] overflow-hidden"><Image src={image.src} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover grayscale-[.15] transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0" /><a className="absolute right-1.5 bottom-1.5 bg-black/55 px-1.5 py-1 text-[8px] leading-none text-white/80 transition hover:bg-black/75 hover:text-white" href={image.href} target="_blank" rel="noreferrer">Photo: {image.credit} / Unsplash</a></div><div className="p-6"><span className="text-sm font-medium tracking-[.04em] text-portfolio-accent">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-5 text-[15.5px] leading-[1.35] font-medium tracking-[-.01em] text-portfolio-ink">{title}</h3><p className="mt-3 text-[15px] leading-[1.65] text-portfolio-muted">{description}</p></div></article>;
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
