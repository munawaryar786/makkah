import { images } from "./images";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-compare-umrah-packages",
    title: "How to Choose an Umrah Package",
    excerpt: "Compare duration, hotel distance and room type quickly.",
    category: "Umrah Guide",
    readTime: "5 min read",
    image: images.blog.umrahGuide
  },
  {
    slug: "hotel-distance-and-room-sharing",
    title: "Hotel Distance Guide",
    excerpt: "What Makkah and Madinah distance means for comfort.",
    category: "Hotels",
    readTime: "4 min read",
    image: images.blog.hotelDistance
  },
  {
    slug: "group-umrah-with-emirates",
    title: "Before Group Umrah",
    excerpt: "Schedules, baggage, hotels and Saudi transport in one view.",
    category: "Group Umrah",
    readTime: "5 min read",
    image: images.blog.groupUmrah
  },
  {
    slug: "baku-tour-planning-guide",
    title: "Baku Travel Guide",
    excerpt: "Visa, hotel, breakfast, transfers and city highlights.",
    category: "Baku Tour",
    readTime: "4 min read",
    image: images.blog.bakuGuide
  },
  {
    slug: "uzbekistan-group-tour-guide",
    title: "Uzbekistan Tour Guide",
    excerpt: "Tashkent, Samarkand and Bukhara planning basics.",
    category: "Uzbekistan",
    readTime: "5 min read",
    image: images.blog.uzbekistanGuide
  },
  {
    slug: "lahore-multan-sialkot-umrah-departures",
    title: "Departure City Guide",
    excerpt: "How city, airline and schedule affect your trip.",
    category: "Departures",
    readTime: "4 min read",
    image: images.blog.departures
  }
];
