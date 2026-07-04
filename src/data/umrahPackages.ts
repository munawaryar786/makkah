export type RoomPrices = {
  sharing?: string;
  quad?: string;
  triple?: string;
  double?: string;
};

export type UmrahPackage = {
  slug: string;
  name: string;
  category: "Umrah" | "Group Umrah" | "Seasonal Umrah";
  departureCity: "Lahore" | "Multan" | "Sialkot";
  duration: string;
  airline: string;
  badge: string;
  flightSummary: string;
  travelWindow: string;
  makkahHotel: string;
  madinahHotel: string;
  distanceInfo: string;
  prices: RoomPrices;
  startingPrice: string;
  inclusions: string[];
  notes: string[];
  image: string;
};

const commonInclusions = ["Visa Included", "Quality Hotels", "Comfortable Shuttle Service", "Experienced Guides", "24/7 Support"];
const childNotes = ["Infant Package: PKR 70,000", "Child Package Without Bed: PKR 207,000", "Child With Bed: package rate less PKR 20,000", "Baggage guidance shown per airline" ];

export const umrahPackages: UmrahPackage[] = [
  {
    slug: "lahore-saudia-21-days-marzam-fursan",
    name: "Lahore 21 Days Umrah - Marzam & Fursan",
    category: "Umrah",
    departureCity: "Lahore",
    duration: "21 Days",
    airline: "Saudia Airlines",
    badge: "Umrah Package 1448-H",
    flightSummary: "SV735 / SV739 departures with SV738 / SV734 returns across July and August windows.",
    travelWindow: "11 Jul to 19 Aug departure windows",
    makkahHotel: "Fundaq Marzam Hotel (Shuttle)",
    madinahHotel: "Fundaq Fursan Hotel (Shuttle)",
    distanceInfo: "Shuttle hotel combination",
    prices: { sharing: "264,500", quad: "269,500", triple: "277,000", double: "293,000" },
    startingPrice: "From PKR 264,500",
    inclusions: commonInclusions,
    notes: ["11 Jul window marked sold out in source data.", "Baggage: 23kg / 46kg / 7kg", ...childNotes],
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1400&q=80"
  },
  {
    slug: "lahore-saudia-21-days-warda-waqar",
    name: "Lahore 21 Days Umrah - Warda & Waqar",
    category: "Umrah",
    departureCity: "Lahore",
    duration: "21 Days",
    airline: "Saudia Airlines",
    badge: "Nearer Hotel Option",
    flightSummary: "Multiple SV739 and SV735 July departure choices.",
    travelWindow: "20 Jul to 30 Jul departures",
    makkahHotel: "Warda Al Wafa Hotel (700m)",
    madinahHotel: "Fundaq Waqar Hotel (400m)",
    distanceInfo: "Makkah 700m / Madinah 400m",
    prices: { sharing: "277,000", quad: "290,000", triple: "308,000", double: "343,000" },
    startingPrice: "From PKR 277,000",
    inclusions: commonInclusions,
    notes: ["Rates vary by availability and exchange rate.", ...childNotes],
    image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1400&q=80"
  },
  {
    slug: "lahore-air-arabia-fly-jinnah-21-days",
    name: "Lahore 21 Days Umrah - Air Arabia / Fly Jinnah",
    category: "Umrah",
    departureCity: "Lahore",
    duration: "21 Days",
    airline: "Air Arabia / Fly Jinnah",
    badge: "17 Jul Route",
    flightSummary: "17 Jul 9P502 and G9145 outbound, 06 Aug G9146 and 9P501 return.",
    travelWindow: "17 Jul to 06 Aug 2026",
    makkahHotel: "Deyar Al Matar (1200m)",
    madinahHotel: "Ruk Al Daudia Hotel, Quba Road (900m)",
    distanceInfo: "Makkah 1200m / Madinah 900m",
    prices: { sharing: "265,000", quad: "273,000", triple: "285,000", double: "309,000" },
    startingPrice: "From PKR 265,000",
    inclusions: commonInclusions,
    notes: ["Baggage: 23kg / 46kg / 7kg", ...childNotes],
    image: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=1400&q=80"
  },
  {
    slug: "multan-airblue-28-days-shuttle",
    name: "Multan 28 Days Umrah - Airblue Shuttle",
    category: "Umrah",
    departureCity: "Multan",
    duration: "28 Days",
    airline: "airblue",
    badge: "B2B Special Rates",
    flightSummary: "24 Jul MUX to JED PA-872, return 20 Aug JED to MUX PA-873.",
    travelWindow: "24 Jul to 20 Aug 2026",
    makkahHotel: "Fundaq Marzam / Sharaq Hotel (Shuttle)",
    madinahHotel: "Wasam Misk / Fundaq Fursan (Shuttle)",
    distanceInfo: "17 nights Makkah / 10 nights Madinah",
    prices: { sharing: "267,000", quad: "275,000", triple: "288,000", double: "313,000" },
    startingPrice: "From PKR 267,000",
    inclusions: [...commonInclusions, "20kg Checked + 7kg Cabin", "Best Rates / Best Services"],
    notes: ["Terminal HJ, aircraft A320 in source schedule."],
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1400&q=80"
  },
  {
    slug: "multan-airblue-28-days-shaza-zahbi",
    name: "Multan 28 Days Umrah - Shaza & Zahbi",
    category: "Umrah",
    departureCity: "Multan",
    duration: "28 Days",
    airline: "airblue",
    badge: "Closer Hotel Option",
    flightSummary: "24 Jul departure and 20 Aug return with Airblue.",
    travelWindow: "24 Jul to 20 Aug 2026",
    makkahHotel: "Shaza Al Mesk Hotel (300-350m, Ghaza Side)",
    madinahHotel: "Nuzul Al Karar Al Zahbi (450-500m)",
    distanceInfo: "Makkah 300-350m / Madinah 450-500m",
    prices: { sharing: "301,000", quad: "317,000", triple: "344,000", double: "398,000" },
    startingPrice: "From PKR 301,000",
    inclusions: [...commonInclusions, "20kg Checked + 7kg Cabin"],
    notes: ["Best for travelers prioritizing hotel distance."],
    image: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?auto=format&fit=crop&w=1400&q=80"
  },
  {
    slug: "sialkot-emirates-21-days-group",
    name: "Sialkot 21 Days Group Umrah - Emirates",
    category: "Group Umrah",
    departureCity: "Sialkot",
    duration: "21 Days",
    airline: "Emirates Airlines",
    badge: "Group Departure",
    flightSummary: "EK619 Sialkot-Dubai, EK805 Dubai-Jeddah. Return EK806 and EK618.",
    travelWindow: "12 Jul to 02 Aug 2026",
    makkahHotel: "Fundaq Marzam / Sharaq Hotel (Shuttle)",
    madinahHotel: "Wasam Misk / Fundaq Fursan (Shuttle)",
    distanceInfo: "Group shuttle arrangement",
    prices: { sharing: "250,000", quad: "256,000", triple: "266,000", double: "287,000" },
    startingPrice: "From PKR 250,000",
    inclusions: ["Umrah Visa", "Emirates Air Ticket", "Hotel Accommodation", "Transport in Saudi Arabia", "Best Hotels", "Best Locations", "Best Service"],
    notes: ["Baggage: 23kg / 46kg / 7kg", ...childNotes],
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1400&q=80"
  }
];

export const facilities = [
  "Umrah Visa",
  "Quality Hotels",
  "Shuttle Service",
  "Air Ticket",
  "Transport in Saudi Arabia",
  "Experienced Guides",
  "Daily Support",
  "Family Support",
  "Group Handling",
  "Baggage Guidance",
  "Hotel Distance Guidance",
  "Ziyarat Support",
  "Airport Transfers",
  "Best Rates / Consultation"
];
