import { Button } from "@/components/ui/Button";
import { images } from "@/data/images";

export function PageHero({
  title,
  eyebrow,
  text,
  image = images.hero.kaaba
}: {
  title: string;
  eyebrow?: string;
  text: string;
  image?: string;
}) {
  return (
    <section className="bg-ivory">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-ink sm:max-h-[560px]">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {eyebrow ? <p className="mb-3 text-sm font-black uppercase text-gold">{eyebrow}</p> : null}
        <h1 className="max-w-4xl font-display text-4xl font-bold leading-tight text-ink sm:text-6xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-charcoal/75 sm:text-lg">{text}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button href="/contact">Get Consultation</Button>
          <Button href="/umrah-packages" variant="outline">View Packages</Button>
        </div>
      </div>
    </section>
  );
}
