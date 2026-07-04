"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { BlogImageCard } from "@/components/cards/BlogImageCard";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { PackageCard } from "@/components/cards/PackageCard";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { TourImageCard } from "@/components/cards/TourImageCard";
import { Button } from "@/components/ui/Button";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";
import { CTASection } from "@/components/sections/CTASection";
import { blogPosts } from "@/data/blogPosts";
import { images } from "@/data/images";
import { packages } from "@/data/packages";
import { seasonalOffers } from "@/data/seasonalOffers";
import { bestServices, services } from "@/data/services";
import { destinations, tours } from "@/data/tours";
import { testimonials } from "@/data/testimonials";
import { whatsappUrl } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
};

const cityTabs = ["Lahore", "Multan", "Sialkot", "Seasonal"];

const categoryCards = [
  { title: "Umrah Packages", image: images.hero.kaaba, href: "/umrah-packages" },
  { title: "Group Umrah", image: images.services.group, href: "/group-umrah" },
  { title: "International Tours", image: images.services.family, href: "/tours" },
  { title: "Baku Tour", image: images.tours.baku, href: "/tours/baku" },
  { title: "Uzbekistan Tour", image: images.tours.uzbekistan, href: "/tours/uzbekistan" },
  { title: "Visa & Ticketing", image: images.services.visa, href: "/visa-ticketing" }
];

const provideCards = [
  { title: "Quality Hotels", description: "Distance and comfort guidance.", image: images.hotels.makkah, href: "/hotels-transport" },
  { title: "Shuttle Service", description: "Shared movement made simple.", image: images.transport.shuttle, href: "/hotels-transport#transport" },
  { title: "Air Ticket Support", description: "Routes and baggage checked.", image: images.services.ticketing, href: "/visa-ticketing#ticketing" },
  { title: "Visa Guidance", description: "Document-first support.", image: images.services.visa, href: "/visa-ticketing" },
  { title: "Ziyarat Support", description: "Respectful local planning.", image: images.services.ziyarat, href: "/services#ziyarat" },
  { title: "24/7 Support", description: "Call and WhatsApp help.", image: images.services.support, href: "/contact" }
];

function OverlayCategoryCard({ title, image, href }: { title: string; image: string; href: string }) {
  return (
    <motion.article variants={fadeUp} whileHover={{ y: -7 }} className="group overflow-hidden rounded-lg shadow-premium">
      <a href={href} className="relative block min-h-[310px] overflow-hidden">
        <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/88 via-ink/30 to-transparent" />
        <div className="absolute bottom-5 left-5 right-5">
          <h3 className="font-display text-3xl font-bold text-white">{title}</h3>
          <span className="mt-3 inline-flex rounded-full bg-gold px-4 py-2 text-xs font-black uppercase text-ink">Explore</span>
        </div>
      </a>
    </motion.article>
  );
}

export function HomeExperience() {
  const [activeTab, setActiveTab] = useState("Lahore");

  const tabPackages = useMemo(() => {
    if (activeTab === "Seasonal") return seasonalOffers;
    return packages.filter((item) => item.departureCity === activeTab).slice(0, 3);
  }, [activeTab]);

  return (
    <>
      <section className="bg-ivory">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} className="aspect-[16/9] w-full overflow-hidden bg-ink sm:max-h-[680px]">
          <img src={images.hero.kaaba} alt="Kaaba and Masjid al-Haram" className="h-full w-full object-cover" />
        </motion.div>
        <motion.div initial="hidden" animate="show" variants={stagger} className="mx-auto max-w-7xl px-4 py-10 text-center sm:px-6 lg:px-8">
          <motion.p variants={fadeUp} className="text-sm font-black uppercase text-gold">Deedar E Makkah Travel & Tours</motion.p>
          <motion.h1 variants={fadeUp} className="mx-auto mt-3 max-w-4xl font-display text-4xl font-bold leading-tight text-ink sm:text-6xl">Plan Your Umrah with Confidence</motion.h1>
          <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-base leading-7 text-charcoal/75 sm:text-lg">Trusted Umrah, tours and ticketing support from Garden Town Lahore.</motion.p>
          <motion.div variants={fadeUp} className="mt-7 flex flex-wrap justify-center gap-3">
            <Button href="/contact">Get Free Consultancy</Button>
            <Button href="/umrah-packages" variant="outline">View Packages</Button>
            <Button href={whatsappUrl("I want Umrah consultation from Deedar E Makkah")} variant="dark"><MessageCircle className="mr-2 h-4 w-4" />WhatsApp Now</Button>
          </motion.div>
        </motion.div>
      </section>

      <SectionContainer>
        <SectionHeading eyebrow="Best Services" title="Travel Help, Shown Visually" text="Image-led service cards for the decisions clients make first." />
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {bestServices.map((service) => <motion.div variants={fadeUp} key={service.title}><ServiceCard {...service} /></motion.div>)}
        </motion.div>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <SectionHeading eyebrow="Featured Packages" title="Browse by Departure City" text="Prices stay light until users open a card." />
        <div className="mb-7 flex flex-wrap gap-2">
          {cityTabs.map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`focus-ring rounded-full px-4 py-2 text-sm font-black transition ${activeTab === tab ? "bg-ink text-white shadow-glow" : "bg-white text-ink shadow-sm hover:bg-gold/20"}`}>{tab}</button>
          ))}
        </div>
        <motion.div key={activeTab} initial="hidden" animate="show" variants={stagger} className="grid gap-6 lg:grid-cols-3">
          {tabPackages.map((item) => <motion.div variants={fadeUp} key={item.slug}><PackageCard item={item} /></motion.div>)}
        </motion.div>
      </SectionContainer>

      <SectionContainer dark>
        <SectionHeading eyebrow="Travel Categories" title="Choose the Journey Type" light />
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categoryCards.map((card) => <OverlayCategoryCard key={card.title} {...card} />)}
        </motion.div>
      </SectionContainer>

      <SectionContainer>
        <SectionHeading eyebrow="Countries We Deal" title="Destinations Clients Ask For" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((item) => <DestinationCard key={item.title} {...item} />)}
        </div>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="overflow-hidden rounded-lg shadow-premium">
            <img src={images.about} alt="Travel consultation" className="aspect-[4/3] w-full object-cover" />
          </motion.div>
          <div>
            <SectionHeading eyebrow="About" title="Travel Support Made Simple" text="From Umrah packages to tours and ticketing, our team helps you choose the right option with clear guidance." />
            <Button href="/about">More About Us</Button>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer dark>
        <SectionHeading eyebrow="What We Provide" title="Clear Support at Every Step" light />
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {provideCards.map((service) => <motion.div variants={fadeUp} key={service.title}><ServiceCard {...service} /></motion.div>)}
        </motion.div>
      </SectionContainer>

      <SectionContainer>
        <SectionHeading eyebrow="Latest Tours" title="International Tour Highlights" />
        <div className="grid gap-6 md:grid-cols-2">{tours.map((tour) => <TourImageCard key={tour.slug} tour={tour} />)}</div>
      </SectionContainer>

      <SectionContainer className="pt-0">
        <SectionHeading eyebrow="Client Feedback" title="Short Travel Reviews" />
        <div className="grid gap-5 lg:grid-cols-3">{testimonials.slice(0, 3).map((item) => <TestimonialCard key={item.name} item={item} />)}</div>
      </SectionContainer>

      <SectionContainer>
        <SectionHeading eyebrow="Travel Guides" title="Latest Blog Guides" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{blogPosts.slice(0, 4).map((post) => <BlogImageCard key={post.slug} post={post} />)}</div>
      </SectionContainer>

      <CTASection />
    </>
  );
}
