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
  ["International Investment Corporation (IIC)", "A global investment community connecting people with opportunities to learn, build, and grow wealth."],
  ["Tokma Digital Corporation", "A technology venture focused on digital products, modern innovation, and global collaboration."],
  ["Tokma Technologies Pvt. Ltd.", "Software and technology solutions that help businesses operate, adapt, and scale."],
  ["Great Events Movies", "Community-focused entertainment and an accessible, comfortable cinematic experience."],
  ["Great Events Center", "A premier Omaha venue for weddings, conferences, cultural events, and celebrations."],
  ["UNHCR — Nebraska Agency for Chore Services", "Compassionate in-home support for individuals with disabilities, injuries, or illnesses."],
  ["Triratna International Foundation", "A nonprofit dedicated to peace, prosperity, service, and the well-being of people and animals."],
  ["International Council of Gurung Buddhism", "Supporting Gurung Buddhist tradition, cultural leadership, and spiritual preservation."],
  ["Gurung Buddhism Journal", "A digital journal preserving Gurung cultural heritage and sharing Buddhist scholarship worldwide."],
] as const;

export const contact = {
  phoneDisplay: "(402) 312-1435",
  phoneHref: "tel:+14023121435",
  fax: "(402) 885-895",
  email: "contact@bhimgurung.com",
  address: "7440 Crown Point Ave, Omaha, NE 68134",
};

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bhim-gurung-78795288" },
  { label: "GBMIC360", href: "https://www.gbmic360.com" },
] as const;
