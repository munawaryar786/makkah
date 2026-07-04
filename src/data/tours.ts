import { images } from "./images";

export type Tour = {
  slug: string;
  title: string;
  destination: string;
  duration: string;
  startingPrice: string;
  summary: string;
  inclusions: string[];
  highlights: string[];
  image: string;
};

export const tours: Tour[] = [
  {
    slug: "baku",
    title: "Baku 5D / 4N",
    destination: "Baku, Azerbaijan",
    duration: "5 Days / 4 Nights",
    startingPrice: "From PKR 220,000",
    summary: "Flights, visa, hotel, breakfast, transport and city experiences.",
    inclusions: ["Return Tickets", "Visa", "4 Star Hotel", "Breakfast", "Transport"],
    highlights: ["Baku Boulevard", "Old City", "Heydar Aliyev Center", "Flame Towers"],
    image: images.tours.baku
  },
  {
    slug: "uzbekistan",
    title: "Uzbekistan 8D / 7N",
    destination: "Tashkent, Samarkand, Bukhara",
    duration: "8 Days / 7 Nights",
    startingPrice: "From PKR 270,000",
    summary: "A group journey with hotels, transfers, breakfast, visa and return ticket.",
    inclusions: ["4 Star Hotels", "Airport Transfers", "Daily Breakfast", "Visa", "Return Air Ticket"],
    highlights: ["Po-i-Kalyan Complex", "Registan Square", "Minor Mosque", "Kalta Minor Minaret"],
    image: images.tours.uzbekistan
  }
];

export const destinations = [
  { title: "Saudi Arabia / Umrah", image: images.hero.kaaba, href: "/umrah-packages" },
  { title: "Baku / Azerbaijan", image: images.tours.baku, href: "/tours/baku" },
  { title: "Uzbekistan", image: images.tours.uzbekistan, href: "/tours/uzbekistan" },
  { title: "UAE", image: images.tours.uae, href: "/tours" },
  { title: "Turkey", image: images.tours.turkey, href: "/tours" },
  { title: "Malaysia", image: images.tours.malaysia, href: "/tours" }
];
