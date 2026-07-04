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
    title: "Baku Azerbaijan Tour",
    destination: "Baku, Azerbaijan",
    duration: "5 Days / 4 Nights",
    startingPrice: "PKR 220,000",
    summary: "A premium short international tour with flights, visa, hotel, breakfast, transport and guided city experiences.",
    inclusions: ["Return Tickets", "Visa", "4 Star Hotel", "Tour", "Breakfast", "Transport"],
    highlights: ["Baku Boulevard", "Old City", "Heydar Aliyev Center", "Flame Towers"],
    image: "https://images.unsplash.com/photo-1603308805028-96a2cf6f273a?auto=format&fit=crop&w=1400&q=80"
  },
  {
    slug: "uzbekistan",
    title: "Explore the Heart of Uzbekistan",
    destination: "Tashkent, Samarkand, Bukhara",
    duration: "8 Days / 7 Nights",
    startingPrice: "PKR 270,000",
    summary: "A group journey through historic Uzbekistan with 4 star hotels, transfers, breakfast, visa and return air ticket.",
    inclusions: ["4 Star Hotels", "Airport to Return Transfer", "Daily Breakfast", "Visa", "Return Air Ticket"],
    highlights: ["Po-i-Kalyan Complex", "Registan Square", "Minor Mosque", "Kalta Minor Minaret"],
    image: "https://images.unsplash.com/photo-1604001038517-97f1c0132a2f?auto=format&fit=crop&w=1400&q=80"
  }
];
