"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import { Playfair_Display } from "next/font/google";
import Header from "./components/sharedcomponents/header";
import FullScreenMenu from "./components/pagecomponents/fullpagemenu/fullscreenmenu";
import "./styles/globals.css";
import PageFooter from "./components/pagecomponents/pagefooter/pagefooter";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  useEffect(() => {
    // Function to handle menu closing after pathname changes
    const closeMenu = () => {
      setMenuOpen(false);
    };

    // Call closeMenu whenever pathname changes
    closeMenu();
  }, [pathname]); // Dependency on pathname

  const showFooterOn = [
    "/club",
    "/getintouch",
    "/visionandmission",
    "/login",
    "/partnership",
    "/membership",
    "/projects",
    "/privateevents",
  ];

  return (
    <html lang="en">
      <body className={playfairDisplay.className}>
        {/* Header will be present on all pages */}
        <Header onMenuClick={toggleMenu} menuOpen={menuOpen} />

        {/* Full Screen Menu will be present on all pages */}
        {menuOpen && <FullScreenMenu closeMenu={toggleMenu} />}

        {/* Render the rest of the page content */}
        {children}

        {showFooterOn.includes(pathname) && <PageFooter />}
      </body>
    </html>
  );
}
