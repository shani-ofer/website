import React from "react";
import { cn } from "@/src/lib/utils";

export function Card({ title, text, className, icon }: { title: string; text: string; className?: string; icon?: React.ReactNode }) {
  return (
    <div className={cn("bg-white border border-light-gray rounded-xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)]", className)}>
      {icon && <div className="mb-4 text-soft-teal">{icon}</div>}
      <h3 className="text-[18px] font-bold text-deep-navy mb-3">{title}</h3>
      <p className="text-[15px] font-normal text-[#555] leading-[1.65]">{text}</p>
    </div>
  );
}

export function DomainTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-warm-white border border-light-gray rounded-full px-4 py-1.5 text-[14px] font-medium text-deep-navy">
      {children}
    </span>
  );
}

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-[#4DB8A4]/12 text-soft-teal text-[13px] font-semibold rounded-full px-3.5 py-1 mb-6">
      {children}
    </span>
  );
}
