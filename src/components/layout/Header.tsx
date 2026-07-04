"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, MessageCircle, Phone, X } from "lucide-react";
import { navItems } from "@/data/navigation";
import { site } from "@/data/site";
import { whatsappUrl } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-ivory/96 backdrop-blur">
      <div className="hidden bg-ink text-xs font-bold text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2">
          <span>License No {site.licenseNo}</span>
          <div className="flex gap-4">
            <a href={`tel:${site.uan}`} className="hover:text-gold">UAN {site.uan}</a>
            <a href={whatsappUrl("I want free consultancy")} className="hover:text-gold">WhatsApp {site.primaryMobile}</a>
            <span>{site.city}</span>
          </div>
        </div>
      </div>
      <div className={cn("border-b border-gold/25 transition", scrolled && "shadow-premium")}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex min-w-0 items-center">
            <img src="/assets/brand/deedar-e-makkah-logo.jpeg" alt="Deedar E Makkah Travel & Tours logo" className="max-h-12 w-auto max-w-[172px] object-contain md:max-h-14 md:max-w-[210px]" />
          </Link>

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <div key={item.label} className="group relative flex items-center">
                <Link
                  href={item.href}
                  className="focus-ring inline-flex h-10 items-center gap-1 whitespace-nowrap rounded-md px-2.5 text-[13px] font-extrabold text-ink transition hover:bg-gold/20 xl:px-3"
                  aria-haspopup={item.children ? "menu" : undefined}
                >
                  {item.label}
                  {item.children ? <ChevronDown className="h-3.5 w-3.5 shrink-0 transition group-hover:rotate-180" /> : null}
                </Link>
                {item.children ? (
                  <div className="invisible absolute left-0 top-full z-[80] w-64 translate-y-2 pt-2 opacity-0 transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <div className="rounded-lg border border-gold/30 bg-white p-2 shadow-premium" role="menu">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} className="focus-ring block rounded-md px-3 py-2 text-sm font-bold text-charcoal transition hover:bg-gold/20" role="menuitem">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          <div className="hidden shrink-0 xl:block">
            <Button href="/contact" className="h-10 min-h-10 whitespace-nowrap px-4 py-2 text-xs">Get Free Consultancy</Button>
          </div>

          <button className="focus-ring shrink-0 rounded-md p-2 lg:hidden" aria-label="Open menu" onClick={() => setOpen(true)}>
            <Menu className="h-7 w-7 text-ink" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div className="fixed inset-0 z-50 bg-ink/62 lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="ml-auto h-full w-full max-w-sm overflow-y-auto bg-ivory p-5 shadow-premium" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 28, stiffness: 260 }}>
              <div className="flex items-center justify-between">
                <img src="/assets/brand/deedar-e-makkah-logo.jpeg" alt="Deedar E Makkah logo" className="max-h-12 w-auto max-w-[180px] object-contain" />
                <button className="focus-ring rounded-md p-2" aria-label="Close menu" onClick={() => setOpen(false)}><X /></button>
              </div>
              <div className="mt-6 grid gap-2">
                {navItems.map((item) => (
                  <div key={item.href} className="rounded-md border border-gold/25 bg-white/80">
                    {item.children ? (
                      <>
                        <button
                          className="focus-ring flex w-full items-center justify-between gap-3 px-4 py-3 text-left font-bold text-ink"
                          aria-haspopup="menu"
                          aria-expanded={mobileDropdown === item.label}
                          onClick={() => setMobileDropdown(mobileDropdown === item.label ? null : item.label)}
                        >
                          <span>{item.label}</span>
                          <ChevronDown className={cn("h-4 w-4 shrink-0 transition", mobileDropdown === item.label && "rotate-180")} />
                        </button>
                        <AnimatePresence initial={false}>
                          {mobileDropdown === item.label ? (
                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-gold/20 p-2" role="menu">
                              <Link href={item.href} onClick={() => setOpen(false)} className="focus-ring block rounded-md px-3 py-2 text-sm font-bold text-charcoal hover:bg-gold/20" role="menuitem">
                                All {item.label}
                              </Link>
                              {item.children.map((child) => (
                                <Link key={child.href} href={child.href} onClick={() => setOpen(false)} className="focus-ring block rounded-md px-3 py-2 text-sm font-bold text-charcoal hover:bg-gold/20" role="menuitem">
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          ) : null}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link href={item.href} onClick={() => setOpen(false)} className="focus-ring block px-4 py-3 font-bold text-ink">
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-6 grid gap-3">
                <Button href="/contact">Get Free Consultancy</Button>
                <Button href={whatsappUrl("I want to inquire about Deedar E Makkah packages")} variant="dark"><MessageCircle className="mr-2 h-4 w-4" />WhatsApp Now</Button>
                <Button href={`tel:${site.uan}`} variant="outline"><Phone className="mr-2 h-4 w-4" />Call Now</Button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
