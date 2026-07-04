import { notFound } from "next/navigation";
import { PackageCard } from "@/components/cards/PackageCard";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";
import { Button } from "@/components/ui/Button";
import { packages } from "@/data/packages";
import { whatsappUrl } from "@/lib/utils";

type RouteParams = Promise<{ slug: string }>;

export function generateStaticParams() {
  return packages.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: RouteParams }) {
  const { slug } = await params;
  const item = packages.find((pkg) => pkg.slug === slug);
  return { title: item?.name ?? "Package Detail" };
}

export default async function PackageDetailPage({ params }: { params: RouteParams }) {
  const { slug } = await params;
  const item = packages.find((pkg) => pkg.slug === slug);
  if (!item) notFound();
  const related = packages.filter((pkg) => pkg.slug !== item.slug).slice(0, 2);
  const prices = [["Sharing", item.prices.sharing], ["Quad", item.prices.quad], ["Triple", item.prices.triple], ["Double", item.prices.double]].filter(([, value]) => value);

  return (
    <>
      <PageHero eyebrow={item.category} title={item.name} text={`${item.departureCity} - ${item.duration} - ${item.airline} - ${item.startingPrice}`} image={item.image} />
      <SectionContainer>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-lg border border-gold/20 bg-white p-7 shadow-premium">
            <SectionHeading eyebrow="Package Summary" title={item.name} text={item.flightSummary} />
            <div className="grid gap-4 md:grid-cols-2">{[["Departure City", item.departureCity], ["Travel Window", item.travelWindow], ["Duration", item.duration], ["Airline", item.airline], ["Makkah Hotel", item.makkahHotel], ["Madinah Hotel", item.madinahHotel]].map(([label, value]) => <div key={label} className="rounded-lg bg-linen p-4"><p className="text-xs font-black uppercase text-gold">{label}</p><p className="mt-2 font-bold text-ink">{value}</p></div>)}</div>
            <h3 className="mt-8 font-display text-2xl font-bold text-ink">Room-Sharing Prices</h3><div className="mt-4 grid gap-3 sm:grid-cols-4">{prices.map(([label, value]) => <div key={label} className="rounded-md border border-gold/25 p-4 text-center"><p className="text-xs font-black uppercase text-taupe">{label}</p><p className="mt-1 font-black text-ink">PKR {value}</p></div>)}</div>
            <h3 className="mt-8 font-display text-2xl font-bold text-ink">Inclusions</h3><div className="mt-4 flex flex-wrap gap-2">{item.inclusions.map((line) => <span key={line} className="rounded-full bg-gold/15 px-3 py-1 text-sm font-bold">{line}</span>)}</div>
            <h3 className="mt-8 font-display text-2xl font-bold text-ink">Notes</h3><div className="mt-4 grid gap-2">{item.notes.map((line) => <p key={line} className="rounded-md bg-ivory p-3 font-bold text-charcoal/80">{line}</p>)}</div>
            <Button href={whatsappUrl(`I want to book ${item.name}`)} className="mt-6">WhatsApp Inquiry</Button>
          </div>
          <InquiryForm compact />
        </div>
      </SectionContainer>
      <SectionContainer dark><SectionHeading eyebrow="Related Packages" title="Compare More Options" light /><div className="grid gap-6 lg:grid-cols-2">{related.map((pkg) => <PackageCard key={pkg.slug} item={pkg} />)}</div></SectionContainer>
      <CTASection />
    </>
  );
}
