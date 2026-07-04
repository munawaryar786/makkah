"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { GalleryItem } from "@/data/gallery";

export function ImageGallery({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const categories = ["All", ...Array.from(new Set(items.map((item) => item.category)))];
  const visible = useMemo(() => active === "All" ? items : items.filter((item) => item.category === active), [active, items]);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => <button key={category} onClick={() => setActive(category)} className={`focus-ring rounded-full px-4 py-2 text-sm font-black transition ${active === category ? "bg-ink text-white" : "bg-white text-ink shadow-sm hover:bg-gold/20"}`}>{category}</button>)}
      </div>
      <motion.div layout className="grid auto-rows-[240px] gap-4 md:grid-cols-3 lg:grid-cols-4">
        {visible.map((item, index) => (
          <motion.button layout key={item.title} onClick={() => setSelected(item)} className={`${index % 5 === 0 ? "md:row-span-2" : ""} group relative overflow-hidden rounded-lg text-left shadow-premium`}>
            <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/82 to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-xs font-black uppercase text-gold">{item.category}</p>
              <h3 className="font-display text-2xl font-bold text-white">{item.title}</h3>
            </div>
          </motion.button>
        ))}
      </motion.div>
      <AnimatePresence>
        {selected ? (
          <motion.div className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/80 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
            <motion.div initial={{ scale: 0.96 }} animate={{ scale: 1 }} exit={{ scale: 0.96 }} className="relative max-h-[86vh] max-w-5xl overflow-hidden rounded-lg bg-white shadow-premium" onClick={(event) => event.stopPropagation()}>
              <button onClick={() => setSelected(null)} aria-label="Close image" className="focus-ring absolute right-3 top-3 z-10 rounded-full bg-white p-2 text-ink shadow-premium"><X className="h-5 w-5" /></button>
              <img src={selected.image} alt={selected.title} className="max-h-[76vh] w-full object-cover" />
              <div className="p-5"><p className="text-xs font-black uppercase text-gold">{selected.category}</p><h3 className="font-display text-2xl font-bold text-ink">{selected.title}</h3></div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
