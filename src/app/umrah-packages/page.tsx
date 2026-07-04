import { ContactForm } from "@/components/forms/ContactForm";
import { PackageBrowser } from "@/components/sections/PackageBrowser";
import { PageHero } from "@/components/shared/PageHero";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";
import { images } from "@/data/images";

export const metadata = { title: "Umrah Packages" };

export default function UmrahPackagesPage() {
  return (
    <>
      <PageHero eyebrow="Umrah Packages" title="Lahore, Multan and Sialkot Umrah Packages" text="Image-first packages with city filters, hotel names, airline badges and expandable prices." image={images.hero.kaaba} />
      <SectionContainer>
        <SectionHeading eyebrow="Filters" title="Choose Departure City" text="Open a card when you want room-sharing details." />
        <PackageBrowser />
      </SectionContainer>
      <SectionContainer dark>
        <SectionHeading eyebrow="Price Note" title="Confirm Final Rate Before Booking" text="Prices may change based on airline, hotel availability, exchange rate and booking date. Confirm latest price before booking." light />
      </SectionContainer>
      <SectionContainer>
        <SectionHeading eyebrow="Inquiry" title="Ask for Current Availability" />
        <ContactForm />
      </SectionContainer>
    </>
  );
}
