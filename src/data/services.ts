import { images } from "./images";

export type Service = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export const services: Service[] = [
  {
    title: "Umrah Packages",
    description: "City-wise Umrah options with hotels and clear prices.",
    image: images.services.umrah,
    href: "/umrah-packages"
  },
  {
    title: "Group Umrah",
    description: "Coordinated departures for families and groups.",
    image: images.services.group,
    href: "/group-umrah"
  },
  {
    title: "Seasonal Offers",
    description: "Limited 21 and 28 day Umrah offers.",
    image: images.services.seasonal,
    href: "/seasonal-offers"
  },
  {
    title: "Air Ticketing",
    description: "Route, fare and baggage guidance before booking.",
    image: images.services.ticketing,
    href: "/visa-ticketing#ticketing"
  },
  {
    title: "Visa Support",
    description: "Document-led guidance for travel applications.",
    image: images.services.visa,
    href: "/visa-ticketing"
  },
  {
    title: "Hotel Booking",
    description: "Makkah, Madinah and tour hotel support.",
    image: images.services.hotel,
    href: "/hotels-transport"
  },
  {
    title: "Transport",
    description: "Airport transfer, shuttle and private transport.",
    image: images.services.transport,
    href: "/hotels-transport#transport"
  },
  {
    title: "Ziyarat",
    description: "Makkah and Madinah Ziyarat planning.",
    image: images.services.ziyarat,
    href: "/services#ziyarat"
  },
  {
    title: "Baku Tour",
    description: "Azerbaijan tour with hotel and transfers.",
    image: images.tours.baku,
    href: "/tours/baku"
  },
  {
    title: "Uzbekistan Tour",
    description: "Tashkent, Samarkand and Bukhara group trip.",
    image: images.tours.uzbekistan,
    href: "/tours/uzbekistan"
  },
  {
    title: "Family Travel Support",
    description: "Practical support for family travel decisions.",
    image: images.services.family,
    href: "/contact"
  },
  {
    title: "24/7 Customer Support",
    description: "Fast call and WhatsApp assistance.",
    image: images.services.support,
    href: "/contact"
  }
];

export const bestServices = services.slice(0, 6);
