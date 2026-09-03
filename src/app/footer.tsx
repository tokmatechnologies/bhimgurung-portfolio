import Image from "next/image";
import Link from "next/link";
import BackToTop from "./back-to-top";
import { contact, socialLinks } from "./site-data";

const footerLinkClassName =
  "rounded-sm text-white/80 motion-safe:transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-accent focus-visible:ring-offset-4 focus-visible:ring-offset-portfolio-ink-soft";

export default function Footer() {
  return (
    <footer className="mt-auto bg-portfolio-ink-soft pb-10 pt-20 text-white lg:pt-28">
      <div className="portfolio-container grid grid-cols-1 gap-8 border-b border-white/10 pb-14 md:grid-cols-2 md:gap-10 lg:grid-cols-[1.6fr_repeat(3,1fr)]">
        <div className="flex flex-col items-start gap-2.5">
          <Image
            className="h-8 w-auto"
            src="/reference-logo-header-light.png"
            alt="Bhim Gurung"
            width={127}
            height={32}
          />
          <p className="text-[15px] leading-6 text-white/60">Global CEO · GBMIC</p>
        </div>
        <nav aria-labelledby="footer-explore">
          <h2
            className="mb-3.5 text-[13px] font-normal uppercase tracking-[.04em] text-white/60"
            id="footer-explore"
          >
            Explore
          </h2>
          <div className="flex flex-col items-start gap-3.5 text-base leading-6">
            <Link className={footerLinkClassName} href="/#about">About</Link>
            <Link className={footerLinkClassName} href="/about">Full bio</Link>
            <Link className={footerLinkClassName} href="/#team">Team</Link>
            <Link className={footerLinkClassName} href="/#ventures">Ventures</Link>
            <Link className={footerLinkClassName} href="/#services">Services</Link>
            <Link className={footerLinkClassName} href="/#process">Process</Link>
            <Link className={footerLinkClassName} href="/#faq">FAQ</Link>
          </div>
        </nav>
        <section aria-labelledby="footer-contact">
          <h2
            className="mb-3.5 text-[13px] font-normal uppercase tracking-[.04em] text-white/60"
            id="footer-contact"
          >
            Contact
          </h2>
          <div className="flex flex-col items-start gap-3.5 text-base leading-6">
            <a className={footerLinkClassName} href={`mailto:${contact.email}`}>{contact.email}</a>
            <a className={footerLinkClassName} href="https://www.gbmic360.com" target="_blank" rel="noreferrer">gbmic360.com</a>
          </div>
        </section>
        <nav aria-labelledby="footer-social">
          <h2
            className="mb-3.5 text-[13px] font-normal uppercase tracking-[.04em] text-white/60"
            id="footer-social"
          >
            Social
          </h2>
          <div className="flex flex-col items-start gap-3.5 text-base leading-6">
            {socialLinks.map((link) => (
              <a
                className={footerLinkClassName}
                href={link.href}
                key={link.href}
                rel="noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
      <div className="portfolio-container flex flex-col items-start gap-4 pt-7 text-sm leading-5 text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Bhim Gurung · Global Business Management &amp; Investment Co.</span>
        <BackToTop className={`${footerLinkClassName} cursor-pointer border-0 bg-transparent p-0 font-inherit`} />
      </div>
    </footer>
  );
}
