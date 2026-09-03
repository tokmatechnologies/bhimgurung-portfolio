import ContactForm from "./contact-form";
import { contact } from "./site-data";

const contactRow =
  "grid grid-cols-[60px_1fr] items-center gap-4 border-t border-portfolio-dark-line py-4 text-[17px] sm:grid-cols-[72px_1fr]";
const contactLabel =
  "text-sm text-portfolio-dark-muted";
const contactValue = "text-[17px] text-white";
const contactLink =
  "break-words transition-colors hover:text-portfolio-accent focus-visible:outline-none focus-visible:text-portfolio-accent";

export default function HomeContactSection({
  headingLevel = "h2",
  reveal = true,
}: {
  headingLevel?: "h1" | "h2";
  reveal?: boolean;
}) {
  const Heading = headingLevel;

  return (
    <section
      className="bg-portfolio-ink-soft py-30 text-white"
      id="contact"
    >
      <div className="portfolio-container grid items-start gap-10 contact:grid-cols-2 contact:gap-contact-grid">
        <div className="flex flex-col gap-10" {...(reveal ? { "data-reveal-group": true } : {})}>
          <Heading className="text-contact-title leading-[1.1] font-medium tracking-contact-title">
            Let&apos;s talk business.
            <br />
            I&apos;ll take it from there.
          </Heading>

          <dl {...(reveal ? { "data-reveal": true } : {})}>
            <div className={contactRow}>
              <dt className={contactLabel}>Address</dt>
              <dd className={contactValue}>
                {contact.address}, United States
              </dd>
            </div>
            <div className={contactRow}>
              <dt className={contactLabel}>Phone</dt>
              <dd>
                <a className={contactLink} href={contact.phoneHref}>
                  {contact.phoneDisplay}
                </a>
              </dd>
            </div>
            <div className={contactRow}>
              <dt className={contactLabel}>Fax</dt>
              <dd className={contactValue}>{contact.fax}</dd>
            </div>
            <div className={contactRow}>
              <dt className={contactLabel}>Email</dt>
              <dd>
                <a className={contactLink} href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </dd>
            </div>
            <div className={contactRow}>
              <dt className={contactLabel}>Personal</dt>
              <dd>
                <a
                  className={contactLink}
                  href="https://bhimgurung.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  bhimgurung.com
                </a>
              </dd>
            </div>
            <div className={contactRow}>
              <dt className={contactLabel}>Company</dt>
              <dd>
                <a
                  className={contactLink}
                  href="https://www.gbmic360.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  gbmic360.com
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div {...(reveal ? { "data-reveal": true } : {})}>
          <ContactForm compact />
        </div>
      </div>
    </section>
  );
}
