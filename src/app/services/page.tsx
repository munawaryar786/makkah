import { ServiceCard } from "@/components/cards/ServiceCard";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";
import { images } from "@/data/images";
import { services } from "@/data/services";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Umrah, Tours, Visa, Ticketing, Hotels and Transport" text="Every core service is shown with real travel imagery and direct inquiry actions." image={images.services.umrah} />
      <SectionContainer>
        <SectionHeading eyebrow="All Services" title="Image-First Travel Services" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map((service) => <ServiceCard key={service.title} {...service} />)}</div>
      </SectionContainer>
      <CTASection />
    </>
  );
}
