import Image from "next/image";
import Link from "next/link";
import ContactForm from "./contact-form";
import Footer from "./footer";
import Header from "./header";
import { contact, ventures } from "./site-data";

function ProcessIcon({ index }: { index: number }) {
  const icons = [
    <><path d="M7.5 4.5h-2A1.5 1.5 0 0 0 4 6c0 7.73 6.27 14 14 14a1.5 1.5 0 0 0 1.5-1.5v-2l-4-1-1 2a12 12 0 0 1-8-8l2-1-1-4Z"/><path d="M14 5h5v5M19 5l-6 6"/></>,
    <><circle cx="11" cy="11" r="6"/><path d="m16 16 4 4M8.5 11h5M11 8.5v5"/></>,
    <><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 4V2M20 12h2M12 20v2M4 12H2"/></>,
    <><path d="M4 19V9l8-5 8 5v10"/><path d="M8 19v-5h8v5M2 20h20"/><path d="m9 10 2 2 4-4"/></>,
    <><path d="M7 7h10a4 4 0 0 1 4 4v1M17 17H7a4 4 0 0 1-4-4v-1"/><path d="m18 4-2 3 2 3M6 14l2 3-2 3"/></>,
  ];
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[index]}</svg>;
}

export default function Home() {
  return (
    <div className="home">
      <Header />
      <main>
        <section className="home-hero hero" id="home">
          <div className="hero__background" aria-hidden="true">
            <Image src="/bhim-gurung5.jpeg" alt="" fill sizes="100vw" preload />
          </div>
          <div className="hero__veil" aria-hidden="true" />
          <div className="hero__content">
            <p className="eyebrow reveal">Global CEO · GBMIC</p>
            <h1 className="reveal reveal--delay-1">Helping businesses grow through strategic management.</h1>
            <p className="hero__intro reveal reveal--delay-2">
              Bhim Gurung leads Global Business Management &amp; Investment Co. and is a trusted
              voice in Nebraska&apos;s Bhutanese-American community — guiding owners to manage,
              invest, and grow with clarity.
            </p>
            <div className="hero__actions reveal reveal--delay-3">
              <a className="button button--primary" href={contact.phoneHref}>Let&apos;s talk</a>
              <Link className="button button--secondary" href="/services">See services</Link>
            </div>
          </div>
        </section>

        <section className="home-about home-section" id="about">
          <div className="shell home-about__intro">
            <p className="home-label">About Bhim Gurung</p>
            <h2>Leadership across business, investment, and community.</h2>
          </div>
          <div className="shell home-about__feature">
            <div className="home-about__image">
              <Image src="/Bhim-gurung1.jpeg" alt="Bhim Gurung in his executive office" fill sizes="(max-width: 800px) 100vw, 55vw" />
              <div className="home-about__image-note"><span>Global perspective</span><strong>Omaha roots</strong></div>
            </div>
            <div className="home-about__content">
              <p className="home-about__lead">Sound management and patient investment build businesses that last.</p>
              <p className="home-copy">Bhim Gurung leads GBMIC with an integrated approach to business growth. Alongside his work with clients, he is a trusted voice in Nebraska&apos;s Bhutanese-American community — connecting people to opportunity and helping them find their footing.</p>
              <Link className="text-link" href="/about">Discover his full story <span aria-hidden="true">↗</span></Link>
              <div className="home-stats">
                <div><strong>500+</strong><span>Clients served each year</span></div>
                <div><strong>9</strong><span>Service areas under one roof</span></div>
                <div><strong>100%</strong><span>Focused on your outcome</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="ventures home-section" id="ventures">
          <div className="shell">
            <div className="home-section-heading">
              <p className="home-label">Business portfolio</p>
              <h2>Business ventures and associations across Omaha and beyond.</h2>
              <p>From investment and real estate to community and cultural organizations — a connected portfolio built around service.</p>
            </div>
            <div className="venture-grid">
              {ventures.map(([title, description], index) => (
                <article className="venture-card" key={title}>
                  <div className="venture-card__visual">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{title.split(" ").slice(0, 2).map((word) => word[0]).join("")}</strong>
                  </div>
                  <div className="venture-card__body"><h3>{title}</h3><p>{description}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="premium-services" id="services">
          <div className="shell">
            <header className="premium-services__intro">
              <div className="premium-services__eyebrow"><Image src="/bhim-gurung-logo.png" alt="" width={579} height={139} /><span>Our services</span></div>
              <div><h2>One group. Diverse expertise.<br />Built for global growth.</h2><p>We bring together business, healthcare, finance, technology, logistics, hospitality, and digital expertise under one integrated network.</p></div>
            </header>

            <Link className="featured-service" href="/services">
              <div className="featured-service__image"><Image src="/services-featured-boardroom.png" alt="Modern executive boardroom overlooking a global business district" fill sizes="(max-width: 800px) 100vw, 48vw" /></div>
              <div className="featured-service__content">
                <Image className="featured-service__watermark" src="/bhim-gurung-logo.png" alt="" width={579} height={139} />
                <span className="premium-service-number">01</span>
                <div><h3>Global Business Management &amp; Investment</h3><p>Strategic management, investment, and business growth solutions designed for long-term value creation.</p><strong>Explore Service <i>↗</i></strong></div>
              </div>
            </Link>

            <div className="premium-service-grid">
              {[
                ["Healthcare Services", "Expert healthcare solutions"],
                ["Accounting Services", "Financial expertise"],
                ["Real Estate", "Property & investment"],
                ["Logistics", "Reliable operations"],
                ["Courier Services", "Fast, dependable delivery"],
                ["Restaurant & Hospitality", "Exceptional experiences"],
                ["Digital Marketing & Sales", "Growth through digital"],
                ["E-Commerce", "Modern online commerce"],
                ["IT Technologies", "Technology built for growth"],
              ].map(([title, subtitle], index) => (
                <Link className={(index === 8 ? "premium-service-row premium-service-row--wide" : "premium-service-row")} href="/services" key={title}>
                  <span className="premium-service-number">{String(index + 2).padStart(2, "0")}</span>
                  <div className={("premium-service-thumb premium-service-thumb--" + (index + 1))} aria-hidden="true" />
                  <div className="premium-service-row__copy"><h3>{title}</h3><p>{subtitle}</p></div>
                  <span className="premium-service-arrow" aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="home-process home-section" id="process">
          <div className="shell home-split">
            <div><p className="home-label">Process</p><h2>A clear path from first call to a lasting partnership.</h2></div>
            <div className="process-list">
              {[
                ["Book a call", "We start with a conversation about where the business is and where you want it to go."],
                ["Discovery", "A close look at the operation, goals, and opportunities on the table."],
                ["Strategy", "A practical plan — priorities, timelines, and the reasoning behind each action."],
                ["Execution", "Hands-on support putting the plan to work and adjusting as reality comes in."],
                ["Ongoing support", "A steady partner for the decisions that keep coming after the launch."],
              ].map(([title, text], index) => <article key={title}><div className="process-list__marker"><ProcessIcon index={index} /></div><div><h3>{title}</h3><p>{text}</p></div></article>)}
            </div>
          </div>
        </section>

        <section className="home-faq home-section" id="faq">
          <div className="shell home-split">
            <div><p className="home-label">FAQ</p><h2>Answers to the questions that come up most.</h2><Link href="/contact" className="home-outline-button">Still curious? Ask directly</Link></div>
            <div className="faq-list">
              <details open><summary>What kinds of businesses do you work with?<span>+</span></summary><p>Owner-run businesses across healthcare, real estate, restaurants, retail, logistics, and professional services — small to mid-size, at any stage.</p></details>
              <details><summary>How does the first consultation work?<span>+</span></summary><p>We begin with a focused conversation about your priorities, current position, and the results you want to achieve.</p></details>
              <details><summary>Do you help with investment and financing?<span>+</span></summary><p>Yes. Bhim provides practical investment insight and helps identify responsible opportunities and relevant professional connections.</p></details>
              <details><summary>Do you support the Bhutanese-American community directly?<span>+</span></summary><p>Yes. Community service, organizational leadership, and creating opportunities for Bhutanese-American families and businesses are central to Bhim&apos;s work.</p></details>
              <details><summary>How do I get started?<span>+</span></summary><p>Call {contact.phoneDisplay} for the fastest response or use the form below to share a few details.</p></details>
            </div>
          </div>
        </section>

        <section className="home-contact" id="contact">
          <div className="shell contact-grid">
            <div className="contact-copy">
              <h2>Let&apos;s talk business.<br />I&apos;ll take it from there.</h2>
              <dl>
                <div><dt>Address</dt><dd>{contact.address}, United States</dd></div>
                <div><dt>Phone</dt><dd><a href={contact.phoneHref}>{contact.phoneDisplay}</a></dd></div>
                <div><dt>Fax</dt><dd>{contact.fax}</dd></div>
                <div><dt>Email</dt><dd><a href={"mailto:" + contact.email}>{contact.email}</a></dd></div>
                <div><dt>Personal</dt><dd>bhimgurung.com</dd></div>
                <div><dt>Company</dt><dd><a href="https://www.gbmic360.com">gbmic360.com</a></dd></div>
              </dl>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
