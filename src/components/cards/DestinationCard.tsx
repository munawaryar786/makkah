"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { whatsappUrl } from "@/lib/utils";

export function DestinationCard({ title, image, href }: { title: string; image: string; href: string }) {
  return (
    <motion.article whileHover={{ y: -8 }} className="group overflow-hidden rounded-lg bg-ink shadow-premium">
      <div className="relative min-h-[330px] overflow-hidden">
        <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
        <div className="absolute bottom-5 left-5 right-5">
          <h3 className="font-display text-3xl font-bold text-white">{title}</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button href={href} className="px-4 py-2 text-xs">View Tour</Button>
            <Button href={whatsappUrl(`I want details for ${title}`)} variant="dark" className="bg-white px-4 py-2 text-xs text-ink">Inquire Now</Button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
