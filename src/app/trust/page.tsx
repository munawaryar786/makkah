import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";
import { images } from "@/data/images";
import { site } from "@/data/site";

export const metadata = { title: "Trust & Registration" };

const trustCards = [
  { title: `License No ${site.licenseNo}`, text: "Shown for brand identity and client confirmation.", image: images.services.visa },
  { title: "Garden Town Lahore Office", text: site.address, image: images.about },
  { title: site.website, text: site.email, image: images.services.ticketing }
];

const docs = ["Travel Agency License", "Business Registration", "Umrah Documentation", "Association Badge"];

export default function TrustPage() {
  return (
    <>
      <PageHero eyebrow="Trust" title="Registration, License and Trust Details" text="Transparent company details with document placeholders for client approval." image={images.services.visa} />
      <SectionContainer>
        <SectionHeading eyebrow="Identity" title={site.companyName} text={`UAN ${site.uan} - ${site.email}`} />
        <div className="grid gap-5 md:grid-cols-3">
          {trustCards.map((item) => <article key={item.title} className="group overflow-hidden rounded-lg bg-white shadow-premium"><img src={item.image} alt={item.title} className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" /><div className="p-5"><h3 className="font-display text-2xl font-bold text-ink">{item.title}</h3><p className="mt-2 text-sm leading-6 text-charcoal/72">{item.text}</p></div></article>)}
        </div>
      </SectionContainer>
      <SectionContainer dark>
        <SectionHeading eyebrow="Documents" title="Verification Placeholders" text="Client confirmation required before publishing official document." light />
        <div className="grid gap-5 md:grid-cols-4">{docs.map((item) => <article key={item} className="rounded-lg border border-white/10 bg-white/10 p-5"><h3 className="font-display text-xl font-bold text-white">{item}</h3><p className="mt-2 text-sm text-white/70">Real document can be added after client approval.</p></article>)}</div>
      </SectionContainer>
      <CTASection title="Need Verified Travel Support?" />
    </>
  );
}
