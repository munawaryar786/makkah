import { TourImageCard } from "@/components/cards/TourImageCard";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";
import { images } from "@/data/images";
import { tours } from "@/data/tours";

export const metadata = { title: "International Tours" };

export default function ToursPage() {
  return (
    <>
      <PageHero eyebrow="International Tours" title="Baku and Uzbekistan Tours" text="Large destination cards with prices, durations and direct inquiry actions." image={images.tours.baku} />
      <SectionContainer>
        <SectionHeading eyebrow="Destinations" title="International Tour Packages" />
        <div className="grid gap-6 md:grid-cols-2">{tours.map((tour) => <TourImageCard key={tour.slug} tour={tour} />)}</div>
      </SectionContainer>
      <CTASection title="Plan an International Tour" />
    </>
  );
}
