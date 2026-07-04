"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={item.question} className="rounded-lg border border-gold/20 bg-white shadow-sm">
          <button
            className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold text-ink"
            aria-expanded={open === index}
            onClick={() => setOpen(open === index ? -1 : index)}
          >
            {item.question}
            <ChevronDown className={cn("h-5 w-5 shrink-0 text-gold transition", open === index && "rotate-180")} />
          </button>
          {open === index ? <p className="border-t border-gold/10 px-5 py-4 leading-8 text-charcoal/75">{item.answer}</p> : null}
        </div>
      ))}
    </div>
  );
}
