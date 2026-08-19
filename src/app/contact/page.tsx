import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "../contact-form";
import Footer from "../footer";
import Header from "../header";
import { contact } from "../site-data";

export const metadata: Metadata = {
  title: "Contact Bhim Gurung | GBMIC",
  description: "Call, text, email, or send an inquiry to Bhim Gurung, Global CEO of Global Business Management & Investment Co. in Omaha, Nebraska.",
};

export default function ContactPage() {
  return (
    <>
      <Header solid />
      <main className="inner-page professional-contact">
        <section className="contact-hero">
          <div className="shell contact-hero__grid">
            <div>
              <p className="kicker kicker--light">Contact Bhim Gurung</p>
              <h1>Let&apos;s begin with a conversation.</h1>
              <p>Whether you are building a business, exploring an opportunity, or looking for the right connection, share where you are and what you need.</p>
              <div className="contact-hero__actions">
                <a className="button button--primary" href={contact.phoneHref}>Call {contact.phoneDisplay}</a>
                <a className="contact-hero__email" href={"mailto:" + contact.email}>{contact.email}</a>
              </div>
            </div>
            <div className="contact-hero__portrait">
              <Image src="/bhim-gurung5.jpeg" alt="Bhim Gurung, Global CEO of GBMIC" fill preload sizes="(max-width: 800px) 100vw, 42vw" />
            </div>
          </div>
        </section>

        <section className="contact-details section">
          <div className="shell">
            <div className="contact-detail-grid">
              <article><span>01</span><p>Call / Cell / SMS</p><a href={contact.phoneHref}>{contact.phoneDisplay}</a><small>Best for the fastest response</small></article>
              <article><span>02</span><p>Email</p><a href={"mailto:" + contact.email}>{contact.email}</a><small>For documents and detailed inquiries</small></article>
              <article><span>03</span><p>Office</p><address>{contact.address}<br />United States</address><small>Omaha, Nebraska</small></article>
              <article><span>04</span><p>Fax</p><a href={"fax:" + contact.fax}>{contact.fax}</a><small>Global Business Management &amp; Investment Co.</small></article>
            </div>
          </div>
        </section>

        <section className="contact-inquiry section">
          <div className="shell contact-grid">
            <div className="contact-copy">
              <p className="kicker kicker--light">Send an inquiry</p>
              <h2>Tell us what you&apos;re working toward.</h2>
              <p>Provide a few details and Bhim will have the context needed to make the first conversation useful.</p>
              <div className="contact-websites">
                <span>Online</span>
                <a href="https://www.bhimgurung.com">bhimgurung.com ↗</a>
                <a href="https://www.gbmic360.com" target="_blank" rel="noreferrer">gbmic360.com ↗</a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
