import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";
import { whatsappUrl } from "@/lib/utils";

export function CTASection({
  title = "Ready to Start Your Journey?",
  text = "Get clear guidance for Umrah packages, tours, tickets, hotels and visa support."
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-ink py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-black uppercase text-gold">Consultation</p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-5xl">{title}</h2>
          <p className="mt-3 max-w-2xl leading-7 text-white/76">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="/contact">Get Free Consultancy</Button>
          <Button href={whatsappUrl("I am ready to start my journey with Deedar E Makkah")} variant="dark" className="bg-white text-ink"><MessageCircle className="mr-2 h-4 w-4" />WhatsApp Now</Button>
          <Button href={`tel:${site.uan}`} variant="outline" className="border-white/40 text-white hover:text-ink"><Phone className="mr-2 h-4 w-4" />Call Now</Button>
        </div>
      </div>
    </section>
  );
}
