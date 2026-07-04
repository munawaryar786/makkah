import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";
import { Button } from "@/components/ui/Button";
import { images } from "@/data/images";
import { site } from "@/data/site";

export const metadata = { title: "About Us" };

const values = [
  { title: "Clear Guidance", text: "City, airline, hotel and room options explained simply.", image: images.services.visa },
  { title: "Lahore Office", text: "Consult the team in Garden Town Lahore.", image: images.about },
  { title: "Family Support", text: "Practical help for families and groups.", image: images.services.family },
  { title: "Licensed Identity", text: `License No ${site.licenseNo}.`, image: images.hero.kaaba }
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Deedar E Makkah" title="Trusted Travel Support for Umrah, Tours and Tickets" text="Short, clear guidance for sacred and international journeys." image={images.about} />
      <SectionContainer>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-lg shadow-premium"><img src={images.hero.kaaba} alt="Makkah journey" className="aspect-[4/3] w-full object-cover" /></div>
          <div>
            <SectionHeading eyebrow="Our Work" title="Faith, Comfort and Clear Choices" text="We help travelers compare packages, hotels, tickets and tours before they book." />
            <p className="rounded-lg bg-white p-5 text-sm font-bold leading-6 text-charcoal/75 shadow-sm">{site.address}</p>
            <Button href="/contact" className="mt-5">Get Free Consultancy</Button>
          </div>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map((item) => <article key={item.title} className="group overflow-hidden rounded-lg bg-white shadow-premium"><img src={item.image} alt={item.title} className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" /><div className="p-5"><h3 className="font-display text-xl font-bold text-ink">{item.title}</h3><p className="mt-2 text-sm leading-6 text-charcoal/75">{item.text}</p></div></article>)}
        </div>
      </SectionContainer>
      <CTASection title="Visit or Call for Travel Consultation" />
    </>
  );
}
