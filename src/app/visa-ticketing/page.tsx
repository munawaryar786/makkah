import { ContactForm } from "@/components/forms/ContactForm";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { images } from "@/data/images";

export const metadata = { title: "Visa & Ticketing" };

const cards = [
  { title: "Visa Support", description: "Document-led guidance before submission.", image: images.services.visa, href: "/contact" },
  { title: "Air Ticketing", description: "Airline, route and baggage guidance.", image: images.services.ticketing, href: "/contact" },
  { title: "Travel Documents", description: "Clear checklist support for travelers.", image: images.blog.departures, href: "/contact" }
];

export default function VisaTicketingPage() {
  return (
    <>
      <PageHero eyebrow="Visa & Ticketing" title="Visa Support and Air Ticketing" text="Short, clear support for documents, flights and availability checks." image={images.services.visa} />
      <SectionContainer id="ticketing">
        <SectionHeading eyebrow="Support" title="Documentation and Ticket Planning" />
        <div className="grid gap-5 md:grid-cols-3">{cards.map((item) => <ServiceCard key={item.title} {...item} />)}</div>
      </SectionContainer>
      <SectionContainer className="pt-0"><ContactForm /></SectionContainer>
      <CTASection title="Confirm Visa and Ticket Details" />
    </>
  );
}
