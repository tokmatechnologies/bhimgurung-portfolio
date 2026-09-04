type Service = {
  title: string;
  description: string;
  featured?: boolean;
};

export const services: readonly Service[] = [
  { title: "Healthcare Services", description: "People-first healthcare support and operational guidance, including work with United Family Home Health Care.", featured: true },
  { title: "Business Management", description: "Practical systems, strategic planning, and executive guidance that create a stronger foundation for growth." },
  { title: "Investment & Real Estate", description: "Opportunity identification, responsible investment thinking, and connections across real estate ventures." },
  { title: "Accounting Services", description: "Reliable financial organization and accounting support for growing businesses and entrepreneurs." },
  { title: "Digital Marketing & Sales", description: "Clear positioning, modern outreach, and sales strategies designed to connect businesses with customers." },
  { title: "Transportation & Logistics", description: "Operational experience spanning transportation, logistics, and courier service businesses." },
  { title: "Restaurant & Hospitality", description: "Business support for restaurants, event halls, bars, and customer-focused hospitality ventures." },
  { title: "Legal Service Connections", description: "Helping individuals and businesses identify and connect with appropriate professional resources." },
  { title: "E-Commerce & Technology", description: "Digital business, e-commerce, and technology perspectives for a changing global marketplace." },
];

export const leadershipRoles = [
  ["Global Bhutanese Organization", "General Secretary & Foreign Affairs"],
  ["Bhutanese Community in Nebraska", "Former President"],
  ["Buddhist Society of Nebraska", "Former President"],
  ["Bhutanese American Music Association", "Former Advisor"],
  ["GBLO", "Press & Publicity"],
  ["Thrive Leadership Club", "Leadership Coach"],
] as const;

export const ventures = [
  ["GMIC / GBMIC", "The management and investment network at the center of Bhim Gurung's work, helping businesses strengthen operations, plan responsibly, and pursue sustainable growth."],
  ["E-Global Media House", "A media and digital communications venture supporting content, visibility, and connections across communities and markets."],
  ["GBMIC Accounting", "Practical accounting and financial organization for entrepreneurs, families, and growing businesses."],
  ["iMart Courier", "Accessible courier support focused on moving parcels reliably and keeping local businesses and communities connected."],
  ["Realty Karma", "A GBMIC real-estate platform designed to connect property seekers and opportunities across Nepal, the United States, and Dubai."],
  ["Nepal Link", "A community-focused platform connecting Nepali people, businesses, services, and opportunities across borders."],
  ["iMart Logistics", "An Omaha-based transportation and logistics company providing freight capacity and dependable supply-chain support."],
  ["United Homes", "A housing and real-estate venture focused on helping families and investors identify practical property opportunities."],
  ["United Family Home Health Care", "An Omaha home-care provider offering compassionate, non-medical support that helps clients live safely and comfortably at home."],
  ["United Nebraska Home Care Revival", "An Omaha home-health agency supporting people who need skilled, therapeutic, and everyday care in their homes."],
  ["Great Events Center", "An Omaha venue for weddings, conferences, premieres, cultural programs, and community celebrations."],
  ["International Investment Corporation (IIC)", "An international investment organization connecting leadership, ideas, and opportunities for responsible long-term growth."],
  ["Bhim Gurung LLC", "Bhim Gurung's personal business entity, bringing his leadership, investment perspective, and entrepreneurial work under one name."],
  ["Great Event Hangout Restaurant & Bar", "An Omaha hospitality destination bringing together dining, drinks, and a welcoming setting for gatherings and celebrations."],
] as const;

export const contact = {
  phoneDisplay: "(402) 312-1435",
  phoneHref: "tel:+14023121435",
  whatsappHref: "https://wa.me/14023121435",
  fax: "(402) 885-895",
  email: "contact@bhimgurung.com",
  address: "7440 Crown Point Ave, Omaha, NE 68134",
};

export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/bhimgurunggod2025" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bhim-gurung-78795288" },
  { label: "WhatsApp", href: contact.whatsappHref },
] as const;
