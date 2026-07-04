import { umrahPackages } from "./umrahPackages";

export const groupUmrahPackages = umrahPackages.filter((item) => item.category === "Group Umrah");

export const groupUmrahHighlight = {
  title: "Sialkot 21 Days Group Umrah with Emirates",
  travelDates: "12 Jul 2026 to 02 Aug 2026",
  airline: "Emirates Airlines",
  price: "PKR 250,000",
  schedule: [
    "EK 619 - Sialkot to Dubai - 02:40 to 04:55",
    "EK 805 - Dubai to Jeddah - 06:55 to 08:45",
    "EK 806 - Jeddah to Dubai - 10:45 to 14:40",
    "EK 618 - Dubai to Sialkot - 20:55 to 01:10 (+1 Day)"
  ],
  inclusions: ["Umrah Visa", "Emirates Air Ticket", "Hotel Accommodation", "Saudi Transport", "Best Hotels", "Best Service"]
};
