"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const services = ["Umrah Packages", "Group Umrah", "Seasonal Offers", "Baku Tour", "Uzbekistan Tour", "Visa & Ticketing", "Hotels & Transport"];
const cities = ["Lahore", "Multan", "Sialkot", "Other"];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      className="rounded-lg border border-gold/25 bg-white p-6 shadow-premium"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-bold text-ink">
          Full Name
          <input className="focus-ring mt-2 h-12 w-full rounded-md border border-ink/10 bg-ivory px-4" required />
        </label>
        <label className="text-sm font-bold text-ink">
          Phone
          <input className="focus-ring mt-2 h-12 w-full rounded-md border border-ink/10 bg-ivory px-4" required />
        </label>
        <label className="text-sm font-bold text-ink">
          Email
          <input type="email" className="focus-ring mt-2 h-12 w-full rounded-md border border-ink/10 bg-ivory px-4" />
        </label>
        <label className="text-sm font-bold text-ink">
          Interested Service
          <select className="focus-ring mt-2 h-12 w-full rounded-md border border-ink/10 bg-ivory px-4" required>
            {services.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label className="text-sm font-bold text-ink">
          Departure City
          <select className="focus-ring mt-2 h-12 w-full rounded-md border border-ink/10 bg-ivory px-4" required>
            {cities.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label className="text-sm font-bold text-ink md:col-span-2">
          Message
          <textarea rows={5} className="focus-ring mt-2 w-full rounded-md border border-ink/10 bg-ivory px-4 py-3" />
        </label>
      </div>
      {sent ? <p className="mt-4 rounded-md bg-gold/15 px-4 py-3 text-sm font-bold text-ink">Thank you. Your inquiry is ready on this frontend demo. Please call or WhatsApp for live booking confirmation.</p> : null}
      <Button type="submit" className="mt-5">Send Message</Button>
    </form>
  );
}
