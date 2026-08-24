import Image from "next/image";
import Link from "next/link";
import { contact, socialLinks } from "./site-data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main shell">
        <div className="footer__brand">
          <Image src="/bhim-gurung-logo.png" alt="Bhim Gurung" width={579} height={139} />
          <p>Global CEO · GBMIC</p>
        </div>
        <div>
          <p className="footer__label">Explore</p>
          <div className="footer__links">
            <Link href="/#about">About</Link><Link href="/about">Full bio</Link><Link href="/#ventures">Ventures</Link><Link href="/services">Services</Link><Link href="/#process">Process</Link><Link href="/#faq">FAQ</Link>
          </div>
        </div>
        <div>
          <p className="footer__label">Contact</p>
          <div className="footer__links">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href="https://www.gbmic360.com" target="_blank" rel="noreferrer">gbmic360.com</a>
          </div>
        </div>
        <div>
          <p className="footer__label">Social</p>
          <div className="footer__links">
            <a href={socialLinks[0].href} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={socialLinks[1].href} target="_blank" rel="noreferrer">GBMIC360</a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom-inner shell">
          <span>© {new Date().getFullYear()} Bhim Gurung · Global Business Management &amp; Investment Co.</span>
          <a href="#top" className="footer__back-to-top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
