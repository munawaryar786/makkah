import { notFound } from "next/navigation";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { SectionContainer } from "@/components/shared/Section";
import { blogPosts } from "@/data/blogPosts";

type RouteParams = Promise<{ slug: string }>;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: RouteParams }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  return { title: post?.title ?? "Travel Guide" };
}

export default async function BlogDetailPage({ params }: { params: RouteParams }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  return (
    <>
      <PageHero eyebrow={post.category} title={post.title} text={post.excerpt} />
      <SectionContainer><article className="mx-auto max-w-3xl rounded-lg border border-gold/20 bg-white p-7 shadow-premium"><p className="text-sm font-black uppercase text-gold">{post.readTime}</p><div className="mt-6 space-y-5 leading-8 text-charcoal/78"><p>Start by confirming your travel objective, preferred dates, departure city, family needs and budget range.</p><p>For Umrah packages, ask about airline, hotel distance, room sharing, baggage and transport. For international tours, confirm visa, hotel category, breakfast, transfers and itinerary highlights.</p><p>Rates can change based on airline fares, hotel availability, exchange rates, season and booking date. Always confirm final pricing before payment.</p></div></article></SectionContainer>
      <CTASection title="Need Personal Travel Guidance?" />
    </>
  );
}
