import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../footer";
import Header from "../header";
import { contact, services } from "../site-data";

export const metadata: Metadata = { title: "Services | Bhim Gurung", description: "Explore healthcare, business management, investment, real estate, accounting, marketing, logistics, hospitality, and technology services." };

export default function ServicesPage() {
  return (
    <><Header solid /><main className="inner-page">
      <section className="page-title"><div className="shell"><p className="kicker">Services &amp; experience</p><h1>Strong foundations for sustainable growth.</h1><p>Management insight, strategic connections, and cross-industry experience for businesses, organizations, families, and entrepreneurs.</p><div className="page-title__actions"><a className="button button--dark" href={contact.phoneHref}>Call {contact.phoneDisplay}</a><Link className="text-link" href="/contact">Send an inquiry ↗</Link></div></div></section>
      <section className="section service-page"><div className="shell service-page__grid">{services.map((service, index) => <article key={service.title} className={service.featured ? "featured-service" : ""}><span>{String(index + 1).padStart(2, "0")}</span><h2>{service.title}</h2><p>{service.description}</p>{service.featured && <a href="https://www.ufhhc.com" target="_blank" rel="noreferrer">Visit United Family Home Health Care ↗</a>}</article>)}</div></section>
      <section className="service-cta"><div className="shell"><div><p className="kicker kicker--light">Not sure where to begin?</p><h2>One conversation can clarify the next step.</h2></div><a className="button button--primary" href={contact.phoneHref}>Call Bhim now</a></div></section>
    </main><Footer /></>
  );
}
