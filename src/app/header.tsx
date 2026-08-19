"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    <header className={`site-header${scrolled || solid ? " site-header--scrolled" : ""}`}>
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
