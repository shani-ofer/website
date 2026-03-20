import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/src/lib/utils";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "לאנשים פרטיים", href: "/coaching" },
    { name: "לחברות וארגונים", href: "/management" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-200 border-b border-light-gray",
        isScrolled ? "shadow-sm" : ""
      )}
    >
      <div className="max-w-[1000px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center z-50 mix-blend-multiply">
          <img 
            src="/logo3.png" 
            alt="עפר שני - קואצ'ינג וייעוץ" 
            className="h-16 sm:h-20 object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-[16px] font-medium text-deep-navy hover:text-sky-blue transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#contact"
            onClick={scrollToContact}
            className="text-[16px] font-medium text-deep-navy hover:text-sky-blue transition-colors cursor-pointer"
          >
            צור קשר
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 text-deep-navy p-2 -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 pt-20">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-2xl font-medium text-deep-navy"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#contact"
              onClick={scrollToContact}
              className="text-2xl font-medium text-deep-navy"
            >
              צור קשר
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
