"use client";

import Link from "next/link";
import { useState } from "react";

const serviceItems = [
  ["Global Business Management & Investment", "Strategic management and investment guidance that aligns operations, capital, and long-term growth.", "Strategy", "Capital", "Growth"],
  ["Healthcare Services", "People-first healthcare support and operational guidance for organizations serving families and communities.", "Care", "Operations", "Community"],
  ["Accounting Services", "Reliable financial organization, reporting, and accounting support for confident business decisions.", "Reporting", "Clarity", "Control"],
  ["Real Estate", "Opportunity-focused property and investment guidance built around responsible, lasting value.", "Property", "Analysis", "Value"],
  ["Logistics", "Practical systems that help transportation and logistics operations move reliably and efficiently.", "Planning", "Movement", "Delivery"],
  ["Courier Services", "Dependable delivery operations designed around speed, visibility, and customer trust.", "Speed", "Tracking", "Trust"],
  ["Restaurant & Hospitality", "Business support for restaurants, event venues, and memorable customer experiences.", "Service", "Events", "Experience"],
  ["Digital Marketing & Sales", "Clear positioning and modern outreach strategies that connect businesses with the right customers.", "Brand", "Reach", "Sales"],
  ["E-Commerce", "Modern digital commerce thinking that helps products, services, and customers connect online.", "Storefront", "Commerce", "Scale"],
  ["IT Technologies", "Technology perspectives and digital solutions that help organizations adapt and grow.", "Systems", "Digital", "Innovation"],
] as const;

function ServiceIcon({ index }: { index: number }) {
  const icons = [
    <g key="management"><path d="M4 19V9l8-5 8 5v10"/><path d="M8 19v-5h8v5M2 20h20"/></g>,
    <g key="healthcare"><path d="M9 3h6v5h5v6h-5v5H9v-5H4V8h5Z"/></g>,
    <g key="accounting"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 11h2M14 11h2M8 15h2M14 15h2"/></g>,
    <g key="real-estate"><path d="m3 11 9-7 9 7"/><path d="M5 10v10h14V10M9 20v-6h6v6"/></g>,
    <g key="logistics"><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></g>,
    <g key="courier"><path d="M4 7h16v11H4zM4 9l8 5 8-5"/><path d="M8 4h8"/></g>,
    <g key="hospitality"><path d="M5 3v8M3 3v5c0 2 4 2 4 0V3M5 11v10M15 3v18M15 3c4 2 5 7 0 10"/></g>,
    <g key="marketing"><path d="M4 17V10M10 17V6M16 17V3M3 21h18"/><path d="m4 7 5-3 5 2 6-4"/></g>,
    <g key="commerce"><path d="M3 5h2l2 11h10l3-7H6"/><circle cx="9" cy="20" r="1"/><circle cx="17" cy="20" r="1"/></g>,
    <g key="technology"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4M7 9h3M14 9h3M7 13h10"/></g>,
  ];

  return <span className="service-showcase__tab-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{icons[index]}</svg></span>;
}

export default function ServiceShowcase() {
  const [active, setActive] = useState(0);
  const service = serviceItems[active];

  return (
    <div className="service-showcase" data-reveal>
      <div className="service-showcase__tabs" role="tablist" aria-label="Services">
        {serviceItems.map(([title], index) => (
          <button
            id={`service-tab-${index}`}
            className={active === index ? "is-active" : ""}
            type="button"
            role="tab"
            aria-selected={active === index}
            aria-controls="service-panel"
            onClick={() => setActive(index)}
            key={title}
          >
            <ServiceIcon index={index} />
            <strong>{title}</strong>
            <i aria-hidden="true">→</i>
          </button>
        ))}
      </div>

      <div className="service-showcase__panel" id="service-panel" role="tabpanel" aria-labelledby={`service-tab-${active}`}>
        <div className="service-showcase__copy" key={`copy-${service[0]}`}>
          <p>Integrated expertise</p>
          <h3>{service[0]}</h3>
          <div className="service-showcase__rule" />
          <p>{service[1]}</p>
          <Link href="/services">Explore this service <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="service-showcase__visual" aria-hidden="true" key={`visual-${service[0]}`}>
          <div className="service-showcase__hub"><span>Selected service</span><strong>{service[0]}</strong></div>
          <div className="service-showcase__spokes">
            {service.slice(2).map((label, index) => <div className={`service-showcase__node service-showcase__node--${index + 1}`} key={label}><span>{index + 1}</span><small>{label}</small></div>)}
          </div>
        </div>
      </div>
    </div>
  );
}
