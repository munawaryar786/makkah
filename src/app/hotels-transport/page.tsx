import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { images } from "@/data/images";

export const metadata = { title: "Hotels & Transport" };

const hotelCards = [
  { title: "Makkah Hotels", description: "Options near Haram or shuttle routes.", image: images.hotels.makkah, href: "/contact" },
  { title: "Madinah Hotels", description: "Comfortable stays around key routes.", image: images.hotels.madinah, href: "/contact" },
  { title: "Family Rooms", description: "Room guidance for families and groups.", image: images.hotels.familyRoom, href: "/contact" },
  { title: "Shuttle Hotels", description: "Value stays with planned movement.", image: images.hotels.shuttleHotel, href: "/contact" }
];

const transportCards = [
  { title: "Airport Transfer", description: "Arrival and return transfer planning.", image: images.transport.airport, href: "/contact" },
  { title: "Shuttle Service", description: "Shared transport for package travelers.", image: images.transport.shuttle, href: "/contact" },
  { title: "Private Transport", description: "Private car support for families.", image: images.transport.private, href: "/contact" },
  { title: "Ziyarat Transport", description: "Local movement for Ziyarat visits.", image: images.transport.ziyarat, href: "/contact" }
];

export default function HotelsTransportPage() {
  return (
    <>
      <PageHero eyebrow="Hotels & Transport" title="Hotel Booking and Transport Support" text="Real hotel, room and transport options shown visually for faster decisions." image={images.hotels.makkah} />
      <SectionContainer>
        <SectionHeading eyebrow="Hotel Booking" title="Makkah and Madinah Hotel Options" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{hotelCards.map((item) => <ServiceCard key={item.title} {...item} />)}</div>
      </SectionContainer>
      <SectionContainer id="transport" dark>
        <SectionHeading eyebrow="Transport" title="Transfers, Shuttle and Private Movement" light />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{transportCards.map((item) => <ServiceCard key={item.title} {...item} />)}</div>
      </SectionContainer>
      <CTASection title="Ask About Hotel Distance Before Booking" />
    </>
  );
}
