"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { PackageCard } from "@/components/cards/PackageCard";
import { packages } from "@/data/packages";
import { seasonalOffers } from "@/data/seasonalOffers";

const tabs = ["Lahore", "Multan", "Sialkot", "Seasonal"];

export function PackageBrowser() {
  const [active, setActive] = useState("Lahore");
  const filtered = useMemo(() => {
    if (active === "Seasonal") return seasonalOffers;
    return packages.filter((item) => item.departureCity === active);
  }, [active]);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button key={tab} onClick={() => setActive(tab)} className={`focus-ring rounded-full px-4 py-2 text-sm font-black transition ${active === tab ? "bg-ink text-white shadow-glow" : "bg-white text-ink shadow-sm hover:bg-gold/20"}`}>{tab}</button>
        ))}
      </div>
      <motion.div key={active} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="grid gap-6 lg:grid-cols-2">
        {filtered.map((item) => <PackageCard key={item.slug} item={item} />)}
      </motion.div>
    </>
  );
}
