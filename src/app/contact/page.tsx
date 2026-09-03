import type { Metadata } from "next";
import Image from "next/image";
import Footer from "../footer";
import Header from "../header";
import HomeContactSection from "../home-contact-section";
import { contact } from "../site-data";

export const metadata: Metadata = {
  title: "Contact Bhim Gurung | GBMIC",
  description:
    "Call, text, email, or send an inquiry to Bhim Gurung, Global CEO of Global Business Management & Investment Co. in Omaha, Nebraska.",
};

export default function ContactPage() {
  return (
    <>
      <Header solid />
      <main className="bg-white pt-[101px]">
        <section className="bg-portfolio-paper py-20 md:py-24 lg:py-30">
          <div className="portfolio-container grid items-center gap-12 min-[900px]:grid-cols-[1.05fr_.95fr] min-[900px]:gap-20">
            <div>
              <p className="eyebrow">Contact Bhim Gurung</p>
              <h1 className="mt-5 max-w-[14ch] text-[clamp(36px,5vw,56px)] leading-[1.06] font-medium tracking-[-.035em] text-portfolio-ink">
                Let&apos;s begin with a conversation.
              </h1>
              <p className="mt-7 max-w-[54ch] text-[19px] leading-[1.55] text-portfolio-muted">
                Whether you are building a business, exploring an opportunity,
                or looking for the right connection, share where you are and
                what you need.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <a
                  className="reference-button bg-portfolio-accent text-white hover:bg-portfolio-accent-strong hover:shadow-portfolio-hover"
                  href={contact.phoneHref}
                >
                  Call {contact.phoneDisplay}
                </a>
                <a
                  className="border-b border-portfolio-line pb-1 text-[15px] font-medium text-portfolio-ink transition-colors hover:border-portfolio-accent hover:text-portfolio-accent"
                  href={`mailto:${contact.email}`}
                >
                  {contact.email}
                </a>
              </div>
            </div>

            <div className="relative mx-auto aspect-[4/3] w-full max-w-[520px] overflow-hidden bg-portfolio-line min-[900px]:aspect-[4/5] min-[900px]:justify-self-center">
              <Image
                className="object-cover object-[82%_center] grayscale-[.12] min-[900px]:object-right"
                src="/bhim-gurung5.jpeg"
                alt="Bhim Gurung, Global CEO of GBMIC"
                fill
                preload
                sizes="(max-width: 899px) 100vw, 42vw"
              />
            </div>
          </div>
        </section>

        <HomeContactSection reveal={false} />
      </main>
      <Footer />
    </>
  );
}
