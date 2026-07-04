"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Package } from "@/data/packages";
import { whatsappUrl } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const priceNote = "Prices may change based on airline, hotel availability, exchange rate and booking date. Confirm latest price before booking.";

export function PackageCard({ item }: { item: Package }) {
  const [open, setOpen] = useState(false);
  const prices = [
    ["Sharing", item.prices.sharing],
    ["Quad", item.prices.quad],
    ["Triple", item.prices.triple],
    ["Double", item.prices.double]
  ].filter(([, price]) => price);

  return (
    <motion.article layout className="group overflow-hidden rounded-lg border border-gold/25 bg-white shadow-premium transition hover:border-gold">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/72 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-black uppercase text-ink">{item.departureCity}</span>
        <span className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-black text-ink">{item.duration}</span>
        <span className="absolute bottom-4 left-4 rounded-full bg-ink/90 px-3 py-1 text-xs font-black text-gold">{item.airline}</span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl font-bold leading-tight text-ink">{item.name}</h3>
          <div className="shrink-0 text-right">
            <p className="text-[11px] font-black uppercase text-taupe">Starting</p>
            <p className="text-lg font-black text-ink">{item.startingPrice}</p>
          </div>
        </div>
        <div className="mt-4 grid gap-2 text-sm text-charcoal/78">
          <p><span className="font-black text-ink">Makkah:</span> {item.makkahHotel}</p>
          <p><span className="font-black text-ink">Madinah:</span> {item.madinahHotel}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.inclusions.slice(0, 3).map((chip) => (
            <span key={chip} className="rounded-full bg-gold/15 px-3 py-1 text-xs font-bold text-ink">{chip}</span>
          ))}
        </div>
        <AnimatePresence initial={false}>
          {open ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {prices.map(([label, price]) => (
                  <div key={label} className="rounded-md border border-gold/25 bg-linen p-3 text-center">
                    <p className="text-xs font-black uppercase text-taupe">{label}</p>
                    <p className="mt-1 text-sm font-black text-ink">PKR {price}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 rounded-md bg-ivory p-3 text-xs font-bold leading-5 text-charcoal/72">{priceNote}</p>
            </motion.div>
          ) : null}
        </AnimatePresence>
        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md border border-gold/60 px-4 py-2 text-xs font-extrabold uppercase text-ink transition hover:-translate-y-0.5 hover:bg-gold"
          >
            {open ? "Hide Details" : "View Details"}
          </button>
          <Button href={whatsappUrl(`I want details for ${item.name}`)} className="px-3 py-2 text-xs">
            <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
