import { MapPinned } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";
import { Button } from "@/components/ui/Button";
import { tours } from "@/data/tours";

export const metadata = { title: "International Tours" };

export default function ToursPage() {
  return (
    <>
      <PageHero eyebrow="International Tours" title="Baku and Uzbekistan Tours" text="Premium destination tour cards for Azerbaijan and Uzbekistan with inclusions, highlights and inquiry actions." image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80" />
      <SectionContainer>
        <SectionHeading eyebrow="Destinations" title="International Tour Packages" />
        <div className="grid gap-6 md:grid-cols-2">{tours.map((tour) => <article key={tour.slug} className="overflow-hidden rounded-lg border border-gold/25 bg-white shadow-premium"><img src={tour.image} alt={tour.title} className="h-72 w-full object-cover" /><div className="p-6"><MapPinned className="mb-4 h-8 w-8 text-gold" /><h2 className="font-display text-3xl font-bold text-ink">{tour.title}</h2><p className="mt-2 font-bold text-gold">{tour.duration} - {tour.startingPrice}</p><p className="mt-4 leading-8 text-charcoal/75">{tour.summary}</p><div className="mt-5 flex gap-3"><Button href={`/tours/${tour.slug}`}>Explore Tour</Button><Button href="/contact" variant="outline">Inquire Now</Button></div></div></article>)}</div>
      </SectionContainer>
      <CTASection title="Plan an International Tour" />
    </>
  );
}
