import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { site } from "@/data/site";
import { whatsappUrl } from "@/lib/utils";

export function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3 pb-[env(safe-area-inset-bottom)] sm:bottom-6 sm:right-6">
      <a href={`tel:${site.uan}`} aria-label="Call Deedar E Makkah" className="focus-ring flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-premium transition hover:-translate-y-1">
        <Phone className="h-6 w-6" />
      </a>
      <a href={whatsappUrl("I want package details from Deedar E Makkah")} aria-label="WhatsApp Deedar E Makkah" className="focus-ring flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white shadow-premium transition hover:-translate-y-1">
        <MessageCircle className="h-6 w-6" />
      </a>
      <a href="#top" aria-label="Scroll to top" className="focus-ring hidden h-12 w-12 items-center justify-center rounded-full bg-ink text-gold shadow-premium transition hover:-translate-y-1 md:flex">
        <ArrowUp className="h-6 w-6" />
      </a>
    </div>
  );
}
