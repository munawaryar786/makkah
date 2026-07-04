import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";
import { Button } from "@/components/ui/Button";
import { tours } from "@/data/tours";
import { whatsappUrl } from "@/lib/utils";

export const metadata = { title: "Baku Tour" };

export default function BakuTourPage() {
  const tour = tours.find((item) => item.slug === "baku")!;
  return (
    <>
      <PageHero eyebrow={tour.destination} title={tour.title} text={`${tour.duration} - ${tour.startingPrice}. ${tour.summary}`} image={tour.image} />
      <SectionContainer>
        <SectionHeading eyebrow="Tour Details" title={tour.title} text={tour.summary} />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-lg border border-gold/20 bg-white p-7 shadow-premium">
            <h3 className="font-display text-2xl font-bold text-ink">Inclusions</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">{tour.inclusions.map((item) => <div key={item} className="rounded-md border border-gold/25 bg-linen p-3 font-bold">{item}</div>)}</div>
          </div>
          <div className="rounded-lg border border-gold/20 bg-white p-7 shadow-premium">
            <h3 className="font-display text-2xl font-bold text-ink">Highlights</h3>
            <div className="mt-4 flex flex-wrap gap-2">{tour.highlights.map((item) => <span key={item} className="rounded-full bg-gold/20 px-3 py-1 text-sm font-bold text-ink">{item}</span>)}</div>
            <Button href={whatsappUrl(`I want details for ${tour.title}`)} className="mt-6">WhatsApp Inquiry</Button>
          </div>
        </div>
      </SectionContainer>
      <CTASection title="Plan This Tour with Deedar E Makkah" />
    </>
  );
}
