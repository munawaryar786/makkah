import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "dark" | "outline" | "ghost";
  className?: string;
  type?: "button" | "submit";
};

const styles = {
  primary: "bg-gold text-ink shadow-glow hover:bg-gold-soft",
  dark: "bg-ink text-white hover:bg-charcoal",
  outline: "border border-gold/60 text-ink hover:bg-gold hover:text-ink",
  ghost: "text-ink hover:bg-ink/5"
};

export function Button({ href, children, variant = "primary", className, type = "button" }: ButtonProps) {
  const classes = cn(
    "focus-ring inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-sm font-extrabold uppercase tracking-normal transition duration-200 hover:-translate-y-0.5 active:translate-y-0",
    styles[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
