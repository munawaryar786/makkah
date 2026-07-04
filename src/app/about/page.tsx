import { Award, HeartHandshake, MapPinned, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";
import { CTASection } from "@/components/sections/CTASection";
import { site } from "@/data/site";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  const values = [
    ["Clear Guidance", "Packages are explained through city, airline, distance, room sharing and inclusion details.", ShieldCheck],
    ["Respectful Service", "Sacred travel needs warm communication, patience and a spiritually respectful tone.", HeartHandshake],
    ["Lahore Office", "Clients can consult the team at Garden Town Lahore for practical booking support.", MapPinned],
    ["Licensed Identity", `License No ${site.licenseNo} is centralized in editable site data.`, Award]
  ] as const;
  return (
    <>
      <PageHero eyebrow="About Deedar E Makkah" title="Trusted Travel Support for Umrah, Tours and Tickets" text="Deedar E Makkah Travel & Tours helps families, groups and international travelers compare options clearly before booking." />
      <SectionContainer>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading eyebrow="Our Philosophy" title="Faith, Comfort and Trusted Travel Support" text="The company focuses on sacred travel, group departures and international tours with a clear commitment to package transparency, organized communication and client confidence." />
          <div className="rounded-lg border border-gold/20 bg-white p-7 shadow-premium"><h3 className="font-display text-2xl font-bold text-ink">Office Consultation</h3><p className="mt-4 leading-8 text-charcoal/75">{site.address}</p><p className="mt-4 font-bold text-ink">UAN {site.uan} - {site.primaryMobile}</p></div>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{values.map(([title, text, Icon]) => <article key={title} className="rounded-lg border border-gold/20 bg-white p-6 shadow-premium"><Icon className="mb-4 h-8 w-8 text-gold" /><h3 className="font-display text-xl font-bold text-ink">{title}</h3><p className="mt-3 text-sm leading-7 text-charcoal/75">{text}</p></article>)}</div>
      </SectionContainer>
      <CTASection title="Visit or Call for Travel Consultation" />
    </>
  );
}
