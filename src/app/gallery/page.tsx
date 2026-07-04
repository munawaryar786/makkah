import { PageHero } from "@/components/shared/PageHero";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";
import { gallery } from "@/data/gallery";

export const metadata = { title: "Gallery" };

export default function GalleryPage() {
  const categories = Array.from(new Set(gallery.map((item) => item.category)));
  return (
    <>
      <PageHero eyebrow="Gallery" title="Elegant Travel Gallery" text="A premium visual gallery using replaceable travel imagery instead of raw poster dumps." />
      <SectionContainer>
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => <span key={category} className="rounded-full border border-gold/30 bg-white px-4 py-2 text-sm font-bold">{category}</span>)}
        </div>
        <div className="grid auto-rows-[250px] gap-4 md:grid-cols-3">
          {gallery.map((item, index) => (
            <article key={item.title} className={index === 0 || index === 5 ? "group relative overflow-hidden rounded-lg shadow-premium md:row-span-2" : "group relative overflow-hidden rounded-lg shadow-premium"}>
              <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-xs font-black uppercase text-gold">{item.category}</p>
                <h3 className="font-display text-2xl font-bold text-white">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
