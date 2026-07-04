import { BlogImageCard } from "@/components/cards/BlogImageCard";
import { PageHero } from "@/components/shared/PageHero";
import { SectionContainer, SectionHeading } from "@/components/shared/Section";
import { blogPosts } from "@/data/blogPosts";
import { images } from "@/data/images";

export const metadata = { title: "Blog & Travel Guides" };

export default function BlogPage() {
  return (
    <>
      <PageHero eyebrow="Travel Guides" title="Helpful Guides for Umrah and International Travel" text="Short visual guides for Umrah, hotels, Baku, Uzbekistan and departure planning." image={images.blog.umrahGuide} />
      <SectionContainer>
        <SectionHeading eyebrow="Latest Guides" title="Blog and Travel Guides" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{blogPosts.map((post) => <BlogImageCard key={post.slug} post={post} />)}</div>
      </SectionContainer>
    </>
  );
}
