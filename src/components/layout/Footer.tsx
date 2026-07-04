import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { navItems } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { whatsappUrl } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="dark-pattern text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img src="/assets/brand/deedar-e-makkah-logo.jpeg" alt="Deedar E Makkah logo" className="h-14 w-14 rounded-md object-cover" />
            <div>
              <h2 className="font-display text-2xl font-bold">Deedar E Makkah Travel & Tours</h2>
              <p className="text-sm font-bold text-gold">Umrah - Tours - Visa - Tickets</p>
            </div>
          </div>
          <p className="mt-5 max-w-xl leading-8 text-white/78">{site.address}</p>
          <p className="mt-3 text-sm font-bold text-gold">License No {site.licenseNo}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {site.presence.map((item) => <span key={item} className="rounded-full border border-gold/40 px-3 py-1 text-sm text-gold">{item}</span>)}
          </div>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold">Explore</h3>
          <div className="mt-4 grid gap-2">
            {navItems.slice(0, 10).map((item) => <Link key={item.href} href={item.href} className="text-white/76 hover:text-gold">{item.label}</Link>)}
          </div>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold">Contact</h3>
          <div className="mt-4 grid gap-3 text-white/76">
            <p className="flex gap-2"><Phone className="h-5 w-5 text-gold" />{site.uan} / {site.primaryMobile}</p>
            <p className="flex gap-2"><Mail className="h-5 w-5 text-gold" />{site.email}</p>
            <p className="flex gap-2"><MapPin className="h-5 w-5 text-gold" />Garden Town, Lahore</p>
          </div>
          <Button href={whatsappUrl("I want to contact Deedar E Makkah Travel & Tours")} className="mt-5">WhatsApp Us</Button>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/65">
        Copyright 2026 Deedar E Makkah Travel & Tours Pvt Ltd. Frontend demo with editable content.
      </div>
    </footer>
  );
}
