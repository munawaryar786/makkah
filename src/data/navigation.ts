export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Umrah Packages",
    href: "/umrah-packages",
    children: [
      { label: "Lahore Departures", href: "/umrah-packages?city=lahore" },
      { label: "Multan Departures", href: "/umrah-packages?city=multan" },
      { label: "Sialkot Group Umrah", href: "/group-umrah" },
      { label: "Seasonal Offers", href: "/seasonal-offers" }
    ]
  },
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
      { label: "Visa & Ticketing", href: "/visa-ticketing" },
      { label: "Hotels & Transport", href: "/hotels-transport" },
      { label: "Group Umrah", href: "/group-umrah" },
      { label: "Seasonal Offers", href: "/seasonal-offers" }
    ]
  },
  { label: "Trust", href: "/trust" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];
