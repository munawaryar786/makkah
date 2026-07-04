import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";
import { testimonials } from "@/data/testimonials";

export const metadata = { title: "Testimonials" };

export default function TestimonialsPage() {
  return (
    <>
      <PageHero eyebrow="Client Feedback" title="Client Feedback" text="Believable sample testimonials for this frontend. These are not presented as verified Google reviews." />
      <SectionContainer><SectionHeading eyebrow="Reviews" title="Premium Review Cards" /><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{testimonials.map((item) => <TestimonialCard key={item.name} item={item} />)}</div></SectionContainer>
      <CTASection />
    </>
  );
}
