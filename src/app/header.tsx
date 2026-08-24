"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { contact, socialLinks } from "./site-data";

const navItems = [
  ["About", "/#about"],
  ["Full bio", "/about"],
  ["Ventures", "/#ventures"],
  ["Services", "/services"],
  ["Process", "/#process"],
  ["FAQ", "/#faq"],
  ["Contact", "/contact"],
] as const;

export default function Header({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header id="top" className={`site-header${scrolled || solid ? " site-header--scrolled" : ""}`}>
      <div className="contact-bar">
        <div className="contact-bar__inner">
          <div className="contact-bar__left">
            <a
              className="contact-bar__address"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`}
              target="_blank"
              rel="noreferrer"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>
              <span>{contact.address}</span>
            </a>
            <span className="contact-bar__divider" aria-hidden="true" />
            <div className="contact-bar__socials" aria-label="Social links">
              <a href={socialLinks[0].href} target="_blank" rel="noreferrer" aria-label={socialLinks[0].label}>
                <svg aria-hidden="true" viewBox="0 0 24 24"><rect x="4" y="9" width="4" height="11"/><path d="M6 4.5v.1M12 20v-6.2a4 4 0 0 1 8 0V20M12 9v11"/></svg>
              </a>
              <a href={socialLinks[1].href} target="_blank" rel="noreferrer" aria-label={socialLinks[1].label}>
                <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>
              </a>
            </div>
          </div>
          <div className="contact-bar__right">
            <a href={`mailto:${contact.email}`}>
              <svg aria-hidden="true" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>
              <span>{contact.email}</span>
            </a>
            <a href={contact.phoneHref}>
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7.2 3H4.4C3.6 3 3 3.6 3 4.4 3 13.6 10.4 21 19.6 21c.8 0 1.4-.6 1.4-1.4v-2.8l-4.2-1-1.3 2.1a15.5 15.5 0 0 1-9.4-9.4l2.1-1.3-1-4.2Z"/></svg>
              <span>{contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
      <div className="site-header__inner">
        <Link className="brand" href="/#home" aria-label="Bhim Gurung home">
          <Image src="/bhim-gurung-logo.png" alt="Bhim Gurung" width={579} height={139} preload />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
        </nav>
        <Link className="header-cta" href="/contact">Get in touch</Link>

        <details className="mobile-menu">
          <summary aria-label="Open navigation menu"><span /><span /><span /></summary>
          <nav aria-label="Mobile navigation">
            {navItems.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
            <Link className="mobile-contact" href="/contact">Get in touch</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
