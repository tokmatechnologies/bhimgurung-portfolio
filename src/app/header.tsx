"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { contact, socialLinks } from "./site-data";

const navItems = [
  ["About", "/#about"],
  ["Full bio", "/about"],
  ["Team", "/#team"],
  ["Services", "/#services"],
  ["Process", "/#process"],
  ["FAQ", "/#faq"],
  ["Contact", "/#contact"],
] as const;

const navLink =
  "text-[15px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-accent focus-visible:ring-offset-4";

function ContactIcon({ type }: { type: "location" | "email" | "phone" | "facebook" | "linkedin" | "whatsapp" }) {
  const paths = {
    location: <><path d="M12 21s-6-5.7-6-12a6 6 0 1 1 12 0c0 6.3-6 12-6 12Z" /><circle cx="12" cy="9" r="2" /></>,
    email: <><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m4 7 8 6 8-6" /></>,
    phone: <path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-1-1.5 3a15.5 15.5 0 0 1-9.5-9.5L8 8 7 3Z" />,
    facebook: <path d="M14 8h2V4.5A16 16 0 0 0 13.7 4C10.7 4 9 5.8 9 9v2H6v4h3v5h4v-5h3l.5-4H13V9.4c0-.9.3-1.4 1-1.4Z" />,
    linkedin: <><path d="M6 9v9M6 6v.01M10 18v-5a4 4 0 0 1 8 0v5M10 9v9" /></>,
    whatsapp: <><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" /><path d="M8.5 8.5c.2-.4.4-.5.7-.5h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.6.7c.7 1.2 1.6 2.1 2.8 2.8l.7-.6c.2-.2.4-.2.6-.1l1.7.7c.3.1.4.3.4.5v.5c0 .3-.1.5-.5.7-.5.2-1.1.3-1.7.1-2.1-.6-4.8-3.3-5.4-5.4-.2-.6-.1-1.2.1-1.7Z" /></>,
  };

  return <svg className="size-[18px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[type]}</svg>;
}

export default function Header({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const opaque = solid || scrolled || menuOpen;

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 20);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header
      id="top"
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="h-10 border-b border-white/15 bg-portfolio-accent text-white shadow-sm md:h-11">
        <div className="portfolio-container flex h-full items-center justify-between gap-5 text-[15px] font-normal tracking-[-0.01em]">
          <div className="flex min-w-0 items-center gap-5 md:gap-7">
            <a className="flex min-w-0 items-center gap-2.5 transition-opacity hover:opacity-75" href="https://www.google.com/maps/search/?api=1&query=7440+Crown+Point+Ave+Omaha+NE+68134" target="_blank" rel="noreferrer">
              <ContactIcon type="location" />
              <span className="truncate">{contact.address}</span>
            </a>
            <span className="hidden h-8 w-px bg-white/30 sm:block" aria-hidden="true" />
            <a className="hidden transition-opacity hover:opacity-70 sm:block" href={socialLinks[0].href} target="_blank" rel="noreferrer" aria-label="Bhim Gurung on Facebook"><ContactIcon type="facebook" /></a>
            <a className="hidden transition-opacity hover:opacity-70 sm:block" href={socialLinks[1].href} target="_blank" rel="noreferrer" aria-label="Bhim Gurung on LinkedIn"><ContactIcon type="linkedin" /></a>
            <a className="hidden transition-opacity hover:opacity-70 sm:block" href={socialLinks[2].href} target="_blank" rel="noreferrer" aria-label="Message Bhim Gurung on WhatsApp"><ContactIcon type="whatsapp" /></a>
          </div>
          <div className="flex shrink-0 items-center gap-6 md:gap-9">
            <a className="hidden items-center gap-2.5 transition-opacity hover:opacity-75 md:flex" href={`mailto:${contact.email}`}><ContactIcon type="email" /><span>{contact.email}</span></a>
            <a className="flex items-center gap-2.5 transition-opacity hover:opacity-75" href={contact.phoneHref}><ContactIcon type="phone" /><span className="hidden min-[480px]:inline">{contact.phoneDisplay}</span><span className="min-[480px]:hidden">Call</span></a>
          </div>
        </div>
      </div>

      <div className={`transition duration-300 ${opaque ? "border-b border-portfolio-ink/5 bg-white/80 shadow-sm backdrop-blur-xl" : "bg-transparent"}`}>
        <div className="portfolio-container flex h-[61px] items-center justify-between gap-6">
          <Link
            className="relative flex h-16 items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-accent focus-visible:ring-offset-4"
            href="/#home"
            aria-label="Bhim Gurung home"
            style={{ width: "calc(var(--spacing) * 46)" }}
          >
            <Image
              className="h-auto transition-all duration-300"
              src="/bhim-gurung-logo.png"
              alt="Bhim Gurung"
              width={180}
              height={48}
              preload
              style={{ filter: opaque ? "none" : "brightness(0) invert(1)" }}
            />
          </Link>

          <nav className="hidden items-center gap-7 min-[901px]:flex" aria-label="Primary navigation">
            {navItems.map(([label, href]) => (
              <Link
                className={`${navLink} ${opaque
                  ? "text-portfolio-muted hover:text-portfolio-ink focus-visible:ring-offset-white"
                  : "text-white hover:text-white/70 focus-visible:ring-offset-portfolio-ink"
                  }`}
                href={href}
                key={href}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden min-[901px]:block">
            <Link
              className="reference-button bg-portfolio-accent text-white hover:bg-portfolio-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-accent focus-visible:ring-offset-4"
              href="/#contact"
            >
              Get in touch
            </Link>
          </div>

          <button
            className="flex size-10 flex-col items-center justify-center gap-1.5 border border-portfolio-line bg-white text-portfolio-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-accent min-[901px]:hidden"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={`h-px w-5 bg-current transition ${menuOpen ? "translate-y-1 rotate-45" : ""}`} />
            <span className={`h-px w-5 bg-current transition ${menuOpen ? "-translate-y-1 -rotate-45" : ""}`} />
          </button>
        </div>

        {menuOpen && (
          <nav
            className="mx-5 mb-5 grid gap-1 rounded-portfolio-md border border-portfolio-line bg-white p-3 shadow-portfolio-hover min-[901px]:hidden"
            id="mobile-navigation"
            aria-label="Mobile navigation"
          >
            {navItems.map(([label, href]) => (
              <Link
                className="rounded-portfolio-sm px-4 py-3 font-medium text-portfolio-ink transition hover:bg-portfolio-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-accent"
                href={href}
                key={href}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              className="mt-2 bg-portfolio-accent px-4 py-3 text-center font-medium text-white"
              href="/#contact"
              onClick={() => setMenuOpen(false)}
            >
              Get in touch
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
