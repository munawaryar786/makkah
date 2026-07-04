import { BadgeCheck, FileBadge, ShieldCheck } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";
import { site } from "@/data/site";

export const metadata = { title: "Trust & Registration" };

export default function TrustPage() {
  const docs = ["Travel Agency License", "License No LHR9500", "Business Registration", "Umrah Documentation Placeholder", "Association Badge Placeholder"];
  return (
    <>
      <PageHero eyebrow="Trust" title="Registration, License and Trust Details" text="A transparent trust page with editable company information and confirmation notes for document placeholders." />
      <SectionContainer><SectionHeading eyebrow="Identity" title={site.companyName} text={`${site.address} - UAN ${site.uan} - ${site.email}`} /><div className="grid gap-5 md:grid-cols-3">{site.trustBadges.map((badge) => <article key={badge} className="rounded-lg border border-gold/20 bg-white p-6 shadow-premium"><BadgeCheck className="mb-4 h-8 w-8 text-gold" /><h3 className="font-display text-xl font-bold text-ink">{badge}</h3><p className="mt-3 text-sm leading-7 text-charcoal/75">Editable trust detail. Client confirmation required before publishing any unverified badge.</p></article>)}</div></SectionContainer>
      <SectionContainer dark><SectionHeading eyebrow="Documents" title="Verification Placeholders" light /><div className="grid gap-5 md:grid-cols-5">{docs.map((item) => <article key={item} className="rounded-lg border border-white/10 bg-white/10 p-5"><FileBadge className="mb-3 h-7 w-7 text-gold" /><h3 className="font-bold">{item}</h3><p className="mt-2 text-sm text-white/70">Real document can be added after client approval.</p></article>)}</div></SectionContainer>
      <CTASection title="Need Verified Travel Support?" />
    </>
  );
}
