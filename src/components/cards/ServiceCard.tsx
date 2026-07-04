"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import type { Service } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { whatsappUrl } from "@/lib/utils";

export function ServiceCard({ title, description, image, href }: Service & { index?: number }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-lg border border-gold/20 bg-white shadow-premium transition hover:border-gold"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-70" />
      </div>
      <div className="p-5">
        <h3 className="font-display text-2xl font-bold text-ink">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-charcoal/72">{description}</p>
        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          <Button href={href} variant="outline" className="px-3 py-2 text-xs">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button href={whatsappUrl(`I want to inquire about ${title}`)} className="px-3 py-2 text-xs">
            <MessageCircle className="mr-2 h-4 w-4" /> Inquire
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
