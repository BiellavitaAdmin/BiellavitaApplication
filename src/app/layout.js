"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Use 'usePathname' for route change detection
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname(); // Detect pathname changes

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  // Authentication logic (unchanged)
  useEffect(() => {
    const checkAuth = () => {
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token); // Set isLoggedIn to true if token exists
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  // Disable browser's scroll restoration
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Disable the browser's automatic scroll restoration
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Scroll to top when pathname changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0); // Scroll to top of the page when route changes
    }
  }, [pathname]); // This will fire every time the pathname changes

  // Redirect to login if accessing restricted pages without being logged in
  const restrictedPages = [
    "/privateevents",
    "/projects",
    "/partnership",
    "/changepassword",
  ];
  useEffect(() => {
    if (!loading && restrictedPages.includes(pathname) && !isLoggedIn) {
      router.push("/login");
    }
  }, [loading, pathname, isLoggedIn]);

  const showFooterOn = [
    "/club",
    "/getintouch",
    "/visionandmission",
    "/login",
    "/partnership",
    "/membership",
    "/projects",
    "/privateevents",
    "/changepassword",
  ];

  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.16.13/antd.min.css"
        />
      </head>
      <body className={playfairDisplay.className}>
        {!isAdminRoute && (
          <>
            <Header onMenuClick={toggleMenu} menuOpen={menuOpen} />
            {menuOpen && <FullScreenMenu closeMenu={toggleMenu} />}
          </>
        )}
        {children}
        {showFooterOn.includes(pathname) && <PageFooter />}
      </body>
    </html>
  );
}
