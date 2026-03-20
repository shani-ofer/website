import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/src/lib/utils";
import { MessageCircle } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary-blue" | "primary-navy" | "whatsapp" | "outline";
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export function Button({ variant = "primary-blue", href, className, children, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-lg px-8 py-3.5 text-[16px] md:text-[17px] font-medium transition-colors duration-200 text-center";
  
  const variants = {
    "primary-blue": "bg-sky-blue text-white hover:bg-sky-blue-hover",
    "primary-navy": "bg-deep-navy text-white hover:bg-deep-navy-hover",
    "whatsapp": "bg-whatsapp text-white hover:bg-[#20bd5a]",
    "outline": "bg-transparent text-deep-navy border-[1.5px] border-deep-navy hover:bg-gray-50",
  };

  const classes = cn(baseStyles, variants[variant], className);

  if (href) {
    if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return (
        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
// At the bottom of Layout.tsx
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}
