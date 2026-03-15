import { Outlet, useLocation } from "react-router-dom";
import { Navigation } from "@/src/components/Navigation";
import { ContactSection } from "@/src/components/ContactSection";
import { useEffect } from "react";

export function Layout() {
  const location = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isHomepage = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navigation />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <ContactSection variant={isHomepage ? "dark" : "light"} />
    </div>
  );
}
