import { ImageGallery } from "@/components/sections/ImageGallery";
import { PageHero } from "@/components/shared/PageHero";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";
import { gallery } from "@/data/gallery";
import { images } from "@/data/images";

export const metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="Travel Gallery" text="Makkah, Madinah, hotels, transport, Baku, Uzbekistan and travel moments." image={images.hero.madinah} />
      <SectionContainer>
        <SectionHeading eyebrow="Images" title="Browse by Category" />
        <ImageGallery items={gallery} />
      </SectionContainer>
    </>
  );
}
