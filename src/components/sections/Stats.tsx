"use client";

import { motion } from "framer-motion";

const stats = [
  ["13+", "Years of Experience"],
  ["20+", "Package Options"],
  ["24/7", "Support Access"],
  ["4", "Network Presence Badges"]
];

export function Stats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map(([value, label], index) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
          className="rounded-lg border border-gold/20 bg-white p-6 text-center shadow-premium"
        >
          <div className="font-display text-4xl font-black text-gold">{value}</div>
          <p className="mt-2 text-sm font-bold uppercase text-ink">{label}</p>
        </motion.div>
      ))}
    </div>
  );
}
