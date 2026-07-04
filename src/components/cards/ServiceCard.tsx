import { ArrowRight, BriefcaseBusiness, Bus, Hotel, Landmark, Plane, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

const icons = [Landmark, Plane, Bus, Hotel, ShieldCheck, BriefcaseBusiness];

export function ServiceCard({ title, description, index = 0 }: { title: string; description: string; index?: number }) {
  const Icon = icons[index % icons.length];
  return (
    <article className="rounded-lg border border-gold/20 bg-white p-6 shadow-premium transition hover:-translate-y-1 hover:shadow-glow">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-ink text-gold">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-display text-xl font-bold text-ink">{title}</h3>
      <p className="mt-3 min-h-20 text-sm leading-7 text-charcoal/72">{description}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Button href="/services" variant="ghost" className="px-0 text-gold">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Button>
        <Button href="/contact" variant="outline" className="px-4 py-2">Inquire Now</Button>
      </div>
    </article>
  );
}
