import { Button } from "@/components/ui/Button";

export function PageHero({
  title,
  eyebrow,
  text,
  image = "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1600&q=80"
}: {
  title: string;
  eyebrow?: string;
  text: string;
  image?: string;
}) {
  return (
    <section className="relative min-h-[430px] overflow-hidden bg-ink text-white">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-42" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
      <div className="relative mx-auto flex min-h-[430px] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        {eyebrow ? <p className="mb-4 text-sm font-black uppercase tracking-normal text-gold">{eyebrow}</p> : null}
        <h1 className="max-w-4xl font-display text-4xl font-bold leading-tight sm:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/76">{text}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/contact">Get Consultation</Button>
          <Button href="/umrah-packages" variant="outline" className="border-white/35 text-white hover:text-ink">View Packages</Button>
        </div>
      </div>
    </section>
  );
}
