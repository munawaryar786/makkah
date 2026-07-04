export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Umrah Packages",
    href: "/umrah-packages",
    children: [
      { label: "Lahore Departures", href: "/umrah-packages?city=lahore" },
      { label: "Multan Departures", href: "/umrah-packages?city=multan" },
      { label: "Sialkot Departures", href: "/group-umrah" },
      { label: "Seasonal Offers", href: "/seasonal-offers" },
      { label: "Group Umrah", href: "/group-umrah" }
    ]
  },
  { label: "Group Umrah", href: "/group-umrah" },
  {
    label: "Tours",
    href: "/tours",
    children: [
      { label: "Baku Tour", href: "/tours/baku" },
      { label: "Uzbekistan Tour", href: "/tours/uzbekistan" },
      { label: "International Tours", href: "/tours" }
    ]
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Visa Support", href: "/visa-ticketing" },
      { label: "Air Ticketing", href: "/visa-ticketing#ticketing" },
      { label: "Hotel Booking", href: "/hotels-transport" },
      { label: "Transport", href: "/hotels-transport#transport" },
      { label: "Ziyarat Support", href: "/services#ziyarat" }
    ]
  },
  { label: "Trust", href: "/trust" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];
