import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/shared/PageHero";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";
import { Button } from "@/components/ui/Button";
import { images } from "@/data/images";
import { site } from "@/data/site";
import { whatsappUrl } from "@/lib/utils";

export const metadata = { title: "Contact Us" };

const contactCards = [
  { title: "WhatsApp", value: site.primaryMobile, image: images.services.support, href: whatsappUrl("I want travel consultation from Deedar E Makkah") },
  { title: "Call", value: site.uan, image: images.services.ticketing, href: `tel:${site.uan}` },
  { title: "Office", value: "Garden Town Lahore", image: images.about, href: "/contact" }
];

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact Us" title="Speak with Deedar E Makkah Travel & Tours" text="Call, WhatsApp or send an inquiry for Umrah, tours, visa, tickets, hotels and transport." image={images.about} />
      <SectionContainer>
        <SectionHeading eyebrow="Contact" title="Fast Ways to Reach Us" />
        <div className="grid gap-5 md:grid-cols-3">
          {contactCards.map((item) => <a key={item.title} href={item.href} className="group overflow-hidden rounded-lg bg-white shadow-premium"><img src={item.image} alt={item.title} className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" /><div className="p-5"><p className="text-xs font-black uppercase text-gold">{item.title}</p><h3 className="mt-1 font-display text-2xl font-bold text-ink">{item.value}</h3></div></a>)}
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-lg bg-white p-6 shadow-premium">
            <h2 className="font-display text-3xl font-bold text-ink">Office Details</h2>
            <div className="mt-5 grid gap-3 text-sm leading-6 text-charcoal/75">
              <p><span className="font-black text-ink">Company:</span> {site.companyName}</p>
              <p><span className="font-black text-ink">Website:</span> {site.website}</p>
              <p><span className="font-black text-ink">Email:</span> {site.email}</p>
              <p><span className="font-black text-ink">UAN:</span> {site.uan}</p>
              <p><span className="font-black text-ink">WhatsApp:</span> {site.primaryMobile}</p>
              <p><span className="font-black text-ink">Address:</span> {site.address}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3"><Button href={whatsappUrl("I want free consultancy")}>WhatsApp CTA</Button><Button href={`tel:${site.uan}`} variant="outline">Phone CTA</Button></div>
          </div>
          <ContactForm />
        </div>
      </SectionContainer>
    </>
  );
}
