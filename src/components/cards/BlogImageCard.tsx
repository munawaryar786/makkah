"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { BlogPost } from "@/data/blogPosts";

export function BlogImageCard({ post }: { post: BlogPost }) {
  return (
    <motion.article whileHover={{ y: -7 }} className="group overflow-hidden rounded-lg border border-gold/20 bg-white shadow-premium hover:border-gold">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="aspect-[4/3] overflow-hidden">
          <img src={post.image} alt={post.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
        </div>
        <div className="p-5">
          <p className="text-xs font-black uppercase text-gold">{post.category} - {post.readTime}</p>
          <h3 className="mt-2 font-display text-2xl font-bold text-ink group-hover:text-gold">{post.title}</h3>
          <p className="mt-2 text-sm leading-6 text-charcoal/72">{post.excerpt}</p>
          <span className="mt-4 inline-flex text-sm font-black uppercase text-ink">Read More</span>
        </div>
      </Link>
    </motion.article>
  );
}
