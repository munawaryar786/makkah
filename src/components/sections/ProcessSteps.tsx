import { CheckCircle2 } from "lucide-react";

export function ProcessSteps() {
  const steps = ["Select Package", "Confirm Travel Dates", "Submit Documents", "Complete Booking", "Prepare for Departure", "Travel with Support"];
  return (
    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
      {steps.map((step, index) => (
        <div key={step} className="rounded-lg border border-gold/20 bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-ink text-gold">
            <CheckCircle2 className="h-5 w-5" />
          </div>
          <p className="text-xs font-black uppercase text-gold">Step {index + 1}</p>
          <h3 className="mt-2 font-bold text-ink">{step}</h3>
        </div>
      ))}
    </div>
  );
}
