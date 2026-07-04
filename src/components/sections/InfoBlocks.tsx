import { BedDouble, Bus, Hotel, MapPin } from "lucide-react";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";

export function HotelDistanceGuide() {
  const items = [
    ["Near Haram Hotels", "Usually higher priced, easier for elders and families, and more convenient during busy prayer times.", MapPin],
    ["Shuttle Service Hotels", "Better for budget control, with transport timing and pickup points to confirm before booking.", Bus],
    ["Markazia Madinah", "Central Madinah locations are often preferred for smoother access and family comfort.", Hotel],
    ["Room Sharing", "Quint, quad, triple and double sharing affect privacy, comfort and total package cost.", BedDouble]
  ] as const;
  return (
    <SectionContainer>
      <SectionHeading eyebrow="Hotel Guidance" title="How Distance and Room Type Affect Your Package" text="A clear package is not only about price. Hotel location, transport type and room sharing shape the comfort of the whole journey." />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {items.map(([title, text, Icon]) => (
          <div key={title} className="rounded-lg border border-gold/20 bg-white p-6 shadow-premium">
            <Icon className="mb-4 h-8 w-8 text-gold" />
            <h3 className="font-display text-xl font-bold text-ink">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-charcoal/72">{text}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

export function RoomTypes() {
  const rooms = [
    ["Quint Sharing", "Five travelers share one room. Often selected for economy packages."],
    ["Quad Sharing", "Four travelers share one room. A common balance of price and comfort."],
    ["Triple Sharing", "Three travelers share one room. More space with moderate pricing."],
    ["Double Sharing", "Two travelers share one room. Best for couples and privacy-focused travelers."]
  ];
  return (
    <SectionContainer className="pt-0">
      <SectionHeading eyebrow="Room Options" title="Room Sharing Explained" />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {rooms.map(([title, text]) => (
          <article key={title} className="rounded-lg bg-ink p-6 text-white shadow-premium">
            <h3 className="font-display text-2xl font-bold text-gold">{title}</h3>
            <p className="mt-3 leading-7 text-white/72">{text}</p>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
