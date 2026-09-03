const serviceItems = [
  ["Business Management", "Day-to-day operations, structure, and strategy — so the business runs the way you intended."],
  ["Investment Advisory", "Patient, practical guidance on where to put capital and how to protect it over time."],
  ["Real Estate", "Acquisition, leasing, and property strategy grounded in local market knowledge."],
  ["Financial Planning", "A clear plan for cash flow, growth, and the long game — reviewed as things change."],
  ["Tax & Accounting", "Books kept clean and filings done right, with an eye on what you keep at year end."],
  ["Business Consulting", "An outside perspective on the decisions that move the needle — pricing, hiring, expansion."],
  ["Insurance Services", "Coverage matched to real risk, so a bad day never becomes a lasting setback."],
  ["Startup Advisory", "From first idea to first customer — the practical steps that get a business off the ground."],
  ["Community Support", "Guidance and connections for Nebraska's Bhutanese-American community and its businesses."],
] as const;

function ServiceIcon({ index }: { index: number }) {
  const icons = [
    <g key="management"><path d="M32 10 58 30 32 50 6 30Z" /><path d="M6 30h52M32 10v40" /><circle cx="32" cy="30" r="1.6" fill="currentColor" stroke="none" /></g>,
    <g key="investment"><path d="M14 46h36l-8-24H22Z" /><path d="M32 22v24M32 14v8" /><circle cx="32" cy="14" r="1.6" fill="currentColor" stroke="none" /></g>,
    <g key="real-estate"><path d="M14 50 32 14 50 50Z" /><path d="M22 50V34h20v16" /></g>,
    <g key="planning"><path d="M12 48h10V38h10V28h10V18" /><circle cx="42" cy="18" r="1.6" fill="currentColor" stroke="none" /></g>,
    <g key="accounting"><rect x="18" y="12" width="28" height="40" rx="1.5" /><path d="M24 22h16M24 30h16M24 38h10" /></g>,
    <g key="consulting"><circle cx="26" cy="32" r="14" /><circle cx="40" cy="32" r="14" /></g>,
    <g key="insurance"><path d="M32 10 50 18v14c0 14-9 22-18 26-9-4-18-12-18-26V18Z" /></g>,
    <g key="startup"><path d="M18 16 50 32 18 48Z" /><circle cx="24" cy="32" r="1.6" fill="currentColor" stroke="none" /></g>,
    <g key="community"><circle cx="20" cy="44" r="4" /><circle cx="44" cy="44" r="4" /><circle cx="32" cy="18" r="4" /><path d="M23 41 29 22M41 41 35 22M24 44h16" /></g>,
  ];

  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icons[index]}
    </svg>
  );
}

export default function ServiceShowcase() {
  return (
    <div className="grid min-[900px]:grid-cols-3" data-reveal-group>
      {serviceItems.map(([title, description], index) => (
        <article
          className="group flex min-h-0 flex-col gap-3.5 border-b border-portfolio-line py-8 transition-colors hover:bg-portfolio-paper min-[900px]:min-h-[340px] min-[900px]:border-r min-[900px]:px-10 min-[900px]:py-11 min-[900px]:nth-[3n]:border-r-0 min-[900px]:nth-[n+7]:border-b-0"
          key={title}
          data-reveal
        >
          <div className="flex items-baseline gap-3">
            <span className="text-sm font-medium tracking-wide text-portfolio-accent">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="text-xl font-medium tracking-[-.02em] text-portfolio-ink">{title}</h3>
          </div>
          <p className="max-w-[32ch] text-[15px] leading-normal text-portfolio-muted">{description}</p>
          <span className="mt-2 size-16 text-portfolio-ink opacity-80 transition duration-300 group-hover:-translate-y-1 group-hover:text-portfolio-accent group-hover:opacity-100 min-[900px]:mt-auto min-[900px]:size-21">
            <ServiceIcon index={index} />
          </span>
        </article>
      ))}
    </div>
  );
}
