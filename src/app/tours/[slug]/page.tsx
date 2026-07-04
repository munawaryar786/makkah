import { notFound } from "next/navigation";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";
import { Button } from "@/components/ui/Button";
import { tours } from "@/data/tours";
import { whatsappUrl } from "@/lib/utils";

type RouteParams = Promise<{ slug: string }>;

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({ params }: { params: RouteParams }) {
  const { slug } = await params;
  const tour = tours.find((item) => item.slug === slug);
  return { title: tour?.title ?? "Tour Detail" };
}

export default async function TourDetailPage({ params }: { params: RouteParams }) {
  const { slug } = await params;
  const tour = tours.find((item) => item.slug === slug);
  if (!tour) notFound();
  return (
    <>
      <PageHero eyebrow={tour.destination} title={tour.title} text={`${tour.duration} - ${tour.startingPrice}. ${tour.summary}`} image={tour.image} />
      <SectionContainer>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr]">
          <div className="rounded-lg border border-gold/20 bg-white p-7 shadow-premium">
            <SectionHeading eyebrow="Tour Details" title={tour.title} text={tour.summary} />
            <h3 className="font-display text-2xl font-bold text-ink">Inclusions</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">{tour.inclusions.map((item) => <div key={item} className="rounded-md border border-gold/25 bg-linen p-3 font-bold">{item}</div>)}</div>
            <h3 className="mt-8 font-display text-2xl font-bold text-ink">Highlights</h3>
            <div className="mt-4 flex flex-wrap gap-2">{tour.highlights.map((item) => <span key={item} className="rounded-full bg-gold/20 px-3 py-1 text-sm font-bold text-ink">{item}</span>)}</div>
          </div>
          <div className="rounded-lg border border-gold/20 bg-white p-7 shadow-premium"><p className="text-sm font-black uppercase text-gold">Starting Price</p><p className="mt-2 text-3xl font-black text-ink">{tour.startingPrice}</p><p className="mt-4 text-charcoal/75">Final tour rates depend on airline fares, hotel availability, visa requirements and travel dates.</p><Button href={whatsappUrl(`I want details for ${tour.title}`)} className="mt-6 w-full">WhatsApp Inquiry</Button></div>
        </div>
      </SectionContainer>
      <CTASection title="Ready to Explore This Tour?" />
    </>
  );
}
