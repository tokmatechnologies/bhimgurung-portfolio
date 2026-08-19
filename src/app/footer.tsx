import Image from "next/image";
import Link from "next/link";
import { contact } from "./site-data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main shell">
        <div className="footer__brand">
          <Image src="/bhim-gurung-logo.png" alt="Bhim Gurung" width={579} height={139} />
          <p>Business leadership with community service, education, culture, and global vision.</p>
        </div>
        <div>
          <p className="footer__label">Explore</p>
          <div className="footer__links">
            <Link href="/about">Full biography</Link><Link href="/#ventures">Ventures</Link><Link href="/services">Services</Link><Link href="/#faq">FAQ</Link>
          </div>
        </div>
        <div>
          <p className="footer__label">Contact</p>
          <div className="footer__links">
            <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <span>{contact.address}</span>
          </div>
        </div>
      </div>
      <div className="footer__bottom shell">
        <span>© {new Date().getFullYear()} Bhim Gurung. All rights reserved.</span>
        <a href="https://www.gbmic360.com" target="_blank" rel="noreferrer">GBMIC360.com ↗</a>
      </div>
    </footer>
  );
}
