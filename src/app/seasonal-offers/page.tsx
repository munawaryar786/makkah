import { PackageCard } from "@/components/cards/PackageCard";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";
import { seasonalOffers } from "@/data/seasonalOffers";

export const metadata = { title: "Seasonal Umrah Offers" };

export default function SeasonalOffersPage() {
  return (
    <>
      <PageHero eyebrow="Seasonal Offers" title="Seasonal Umrah Offers 1448H" text="AirSial and airblue seasonal offers converted into premium package cards and room-sharing pricing tables." />
      <SectionContainer>
        <SectionHeading eyebrow="Offers" title="21 and 28 Day Seasonal Packages" />
        <div className="grid gap-6 lg:grid-cols-2">{seasonalOffers.map((item) => <PackageCard key={item.slug} item={item} />)}</div>
      </SectionContainer>
      <CTASection title="Confirm Seasonal Availability" />
    </>
  );
}
