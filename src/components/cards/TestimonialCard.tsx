export function TestimonialCard({ item }: { item: { name: string; city: string; service: string; text: string } }) {
  return (
    <article className="rounded-lg border border-gold/20 bg-white p-6 shadow-premium">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink font-black text-gold">
          {item.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}
        </div>
        <div>
          <h3 className="font-bold text-ink">{item.name}</h3>
          <p className="text-sm text-taupe">{item.city} - {item.service}</p>
        </div>
      </div>
      <p className="mt-5 leading-7 text-charcoal/75">{item.text}</p>
    </article>
  );
}
