import { images } from "./images";

export type GalleryItem = {
  category: string;
  title: string;
  image: string;
};

export const gallery: GalleryItem[] = [
  { category: "Makkah", title: "Masjid al-Haram", image: images.hero.kaaba },
  { category: "Madinah", title: "Masjid Nabawi Journey", image: images.hero.madinah },
  { category: "Hotels", title: "Makkah Hotel Planning", image: images.hotels.makkah },
  { category: "Hotels", title: "Family Room Options", image: images.hotels.familyRoom },
  { category: "Transport", title: "Airport Transfers", image: images.transport.airport },
  { category: "Transport", title: "Shuttle Service", image: images.transport.shuttle },
  { category: "Visa", title: "Passport and Visa Support", image: images.services.visa },
  { category: "Baku", title: "Baku City Tour", image: images.tours.baku },
  { category: "Uzbekistan", title: "Historic Uzbekistan", image: images.tours.uzbekistan },
  { category: "Travel", title: "Family Travel Support", image: images.services.family }
];
