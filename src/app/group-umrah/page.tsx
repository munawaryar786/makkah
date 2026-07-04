import { PackageCard } from "@/components/cards/PackageCard";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";
import { groupUmrahHighlight, groupUmrahPackages } from "@/data/groupUmrahPackages";
import { images } from "@/data/images";

export const metadata = { title: "Group Umrah" };

export default function GroupUmrahPage() {
  return (
    <>
      <PageHero eyebrow="Group Umrah" title="Sialkot 21 Days Group Umrah with Emirates" text="Group departure support with Emirates, hotels, Saudi transport and clear package cards." image={images.services.group} />
      <SectionContainer>
        <SectionHeading eyebrow="Flight Schedule" title={groupUmrahHighlight.travelDates} text={`${groupUmrahHighlight.airline} - starting from ${groupUmrahHighlight.price}`} />
        <div className="grid gap-4 md:grid-cols-2">{groupUmrahHighlight.schedule.map((line) => <div key={line} className="rounded-lg border border-gold/20 bg-white p-5 font-bold shadow-sm">{line}</div>)}</div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">{groupUmrahPackages.map((item) => <PackageCard key={item.slug} item={item} />)}</div>
      </SectionContainer>
      <CTASection title="Ask About the Sialkot Group Departure" />
    </>
  );
}
