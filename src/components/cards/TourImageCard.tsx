"use client";

import { motion } from "framer-motion";
import type { Tour } from "@/data/tours";
import { Button } from "@/components/ui/Button";
import { whatsappUrl } from "@/lib/utils";

export function TourImageCard({ tour }: { tour: Tour }) {
  return (
    <motion.article whileHover={{ y: -8 }} className="group overflow-hidden rounded-lg bg-white shadow-premium">
      <div className="relative min-h-[420px] overflow-hidden">
        <img src={tour.image} alt={tour.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
        <div className="absolute left-4 right-4 top-4 flex justify-between gap-2">
          <span className="rounded-full bg-gold px-3 py-1 text-xs font-black text-ink">{tour.startingPrice}</span>
          <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-black text-ink">{tour.duration}</span>
        </div>
        <div className="absolute bottom-5 left-5 right-5">
          <p className="text-sm font-black uppercase text-gold">{tour.destination}</p>
          <h3 className="font-display text-3xl font-bold text-white">{tour.title}</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {tour.inclusions.slice(0, 4).map((item) => <span key={item} className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white backdrop-blur">{item}</span>)}
          </div>
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            <Button href={`/tours/${tour.slug}`} className="px-3 py-2 text-xs">View Details</Button>
            <Button href={whatsappUrl(`I want details for ${tour.title}`)} variant="dark" className="bg-white px-3 py-2 text-xs text-ink">WhatsApp</Button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
