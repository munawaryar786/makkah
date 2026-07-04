import { FileText, Plane, ShieldCheck } from "lucide-react";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { PageHero } from "@/components/shared/PageHero";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";

export const metadata = { title: "Visa & Ticketing" };

export default function VisaTicketingPage() {
  return (
    <>
      <PageHero eyebrow="Visa & Ticketing" title="Visa Support and Air Ticketing" text="Document-led visa guidance and route-aware ticketing support for Umrah, tours and international travel." image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80" />
      <SectionContainer><SectionHeading eyebrow="Support" title="Clear Travel Documentation and Ticket Planning" /><div className="grid gap-5 md:grid-cols-3">{[["Visa Support", FileText], ["Air Ticketing", Plane], ["Transparent Guidance", ShieldCheck]].map(([title, Icon]) => { const I = Icon as typeof FileText; return <article key={title as string} className="rounded-lg border border-gold/20 bg-white p-6 shadow-premium"><I className="mb-4 h-8 w-8 text-gold" /><h3 className="font-display text-2xl font-bold text-ink">{title as string}</h3><p className="mt-3 leading-8 text-charcoal/75">Requirements, fares and availability must be confirmed before booking. No guaranteed visa approval claims are made.</p></article>; })}</div></SectionContainer>
      <SectionContainer className="pt-0"><InquiryForm /></SectionContainer>
    </>
  );
}
