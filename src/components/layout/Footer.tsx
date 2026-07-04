import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { site } from "@/data/site";
import { navItems } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { whatsappUrl } from "@/lib/utils";

const footerServices = ["Umrah Packages", "Group Umrah", "Visa & Ticketing", "Hotels & Transport", "Baku Tour", "Uzbekistan Tour"];

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.7fr_0.8fr_1fr] lg:px-8">
        <div>
          <img src="/assets/brand/deedar-e-makkah-logo.jpeg" alt="Deedar E Makkah logo" className="max-h-14 w-auto max-w-[220px] rounded bg-white object-contain p-1" />
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/76">Premium Umrah, tours, ticketing and travel support from Garden Town Lahore.</p>
          <p className="mt-3 text-sm font-bold text-gold">License No {site.licenseNo}</p>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold">Quick Links</h3>
          <div className="mt-4 grid gap-2">
            {navItems.map((item) => <Link key={item.href} href={item.href} className="text-sm text-white/76 hover:text-gold">{item.label}</Link>)}
          </div>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold">Services</h3>
          <div className="mt-4 grid gap-2">
            {footerServices.map((item) => <span key={item} className="text-sm text-white/76">{item}</span>)}
          </div>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold">Contact</h3>
          <div className="mt-4 grid gap-2 text-sm leading-6 text-white/76">
            <a href={`tel:${site.uan}`} className="hover:text-gold">UAN {site.uan}</a>
            <a href={`tel:${site.primaryMobile}`} className="hover:text-gold">WhatsApp {site.primaryMobile}</a>
            <a href={`mailto:${site.email}`} className="hover:text-gold">{site.email}</a>
            <p>{site.address}</p>
          </div>
          <Button href={whatsappUrl("I want to contact Deedar E Makkah Travel & Tours")} className="mt-5"><MessageCircle className="mr-2 h-4 w-4" />WhatsApp</Button>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/65">
        Copyright 2026 {site.companyName}. Editable frontend demo.
      </div>
    </footer>
  );
}
