"use client";
import { usePathname } from "next/navigation";
import { Playfair_Display } from "next/font/google";
import Header from "./components/sharedcomponents/header";
import FullScreenMenu from "./components/pagecomponents/fullpagemenu/fullscreenmenu";
import { useState } from "react";
import "./styles/globals.css";
import PageFooter from "./components/pagecomponents/pagefooter/pagefooter";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const showFooterOn = [
    "/club",
    "/getintouch",
    "/visionandmission",
    "/login",
    "/partnership",
    "/membership",
    "/projects",
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
