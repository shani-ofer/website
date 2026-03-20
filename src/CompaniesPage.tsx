import { cn } from "@/src/lib/utils";
import { Button } from "./Button";
import { Phone, Mail, Linkedin } from "lucide-react";

interface ContactSectionProps {
  variant?: "dark" | "light";
}

export function ContactSection({ variant = "dark" }: ContactSectionProps) {
  const isDark = variant === "dark";
  
  return (
    <section 
      id="contact" 
      className={cn(
        "py-12 md:py-20 px-6 text-center",
        isDark ? "bg-deep-navy text-white" : "bg-warm-white text-deep-navy"
      )}
    >
      <div className="max-w-[1000px] mx-auto flex flex-col items-center">
        <h2 className={cn("mb-3", isDark ? "text-white" : "text-deep-navy")}>
          {isDark ? "רוצים לדבר? אני כאן." : "הצעד הראשון מתחיל כאן"}
        </h2>
        
        <p className={cn("text-[15px] mb-8", isDark ? "text-white/70" : "text-deep-navy/70")}>
          פגישות פרונטליות (אזור מזכרת בתיה) או בזום
        </p>
        
        <Button 
          variant="whatsapp" 
          href="https://wa.me/972545422634"
          className="mb-12 flex items-center gap-2"
        >
          <span>דברו איתי בוואטסאפ</span>
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </Button>
        
        <div className={cn(
          "flex flex-wrap justify-center gap-6 md:gap-10",
          isDark ? "text-white/85" : "text-deep-navy/85"
        )}>
          <a href="tel:+972545422634" className="flex items-center gap-2 hover:opacity-80 transition-opacity" dir="ltr">
            <Phone size={18} />
            <span className="font-medium">054-5422634</span>
          </a>
          
          <a href="mailto:shani.ofer@gmail.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Mail size={18} />
            <span className="font-medium">shani.ofer@gmail.com</span>
          </a>
          
          <a href="https://linkedin.com/in/ofershani" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Linkedin size={18} />
            <span className="font-medium">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
