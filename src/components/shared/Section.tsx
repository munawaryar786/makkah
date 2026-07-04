import { cn } from "@/lib/utils";

export function SectionContainer({
  children,
  className,
  dark = false,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <section {...props} className={cn(dark ? "dark-pattern text-white" : "premium-pattern", "py-16 sm:py-20", className)}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  light = false
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={cn("mb-10 max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <p className="mb-3 text-sm font-black uppercase tracking-normal text-gold">{eyebrow}</p> : null}
      <h2 className={cn("font-display text-3xl font-bold leading-tight sm:text-5xl", light ? "text-white" : "text-ink")}>
        {title}
      </h2>
      {text ? <p className={cn("mt-4 text-base leading-8", light ? "text-white/75" : "text-charcoal/75")}>{text}</p> : null}
    </div>
  );
}
