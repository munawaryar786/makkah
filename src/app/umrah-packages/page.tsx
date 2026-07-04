import { PackageCard } from "@/components/cards/PackageCard";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { PageHero } from "@/components/shared/PageHero";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";
import { packages, facilities } from "@/data/packages";

export const metadata = { title: "Umrah Packages" };

export default function UmrahPackagesPage() {
  const cities = ["Lahore", "Multan", "Sialkot"];
  return (
    <>
      <PageHero eyebrow="Umrah Packages" title="Lahore, Multan and Sialkot Umrah Packages" text="Compare departure city, duration, airline, hotel distance and room-sharing prices in a structured premium interface." />
      <SectionContainer>
        <SectionHeading eyebrow="Filters" title="Browse by Departure City and Duration" text="Frontend-only filter chips help users understand the available package categories." />
        <div className="mb-8 flex flex-wrap gap-2">{cities.map((city) => <span key={city} className="rounded-full border border-gold/30 bg-white px-4 py-2 text-sm font-bold text-ink">{city}</span>)}{["21 Days", "28 Days", "Group", "Seasonal"].map((chip) => <span key={chip} className="rounded-full bg-gold/20 px-4 py-2 text-sm font-bold text-ink">{chip}</span>)}</div>
        <div className="grid gap-6 lg:grid-cols-2">{packages.map((item) => <PackageCard key={item.slug} item={item} />)}</div>
      </SectionContainer>
      <SectionContainer dark><SectionHeading eyebrow="What's Included" title="Facilities Included in Umrah Planning" light /><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{facilities.map((item) => <div key={item} className="rounded-lg border border-white/10 bg-white/10 p-4 font-bold">{item}</div>)}</div></SectionContainer>
      <SectionContainer><SectionHeading eyebrow="Important Notes" title="Confirm Final Rates Before Booking" text="Package prices can change because of airline fares, hotel availability, exchange rates, seasonal demand and booking dates." /><InquiryForm /></SectionContainer>
    </>
  );
}
