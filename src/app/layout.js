"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation"; // Use useRouter and usePathname from next/navigation
import { Playfair_Display } from "next/font/google";
import Header from "./components/sharedcomponents/header";
import FullScreenMenu from "./components/pagecomponents/fullpagemenu/fullscreenmenu";
import "./styles/globals.css";
import PageFooter from "./components/pagecomponents/pagefooter/pagefooter";
import Head from "next/head";

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
  const router = useRouter(); // Use the updated useRouter from next/navigation

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

  const heroPages = ["/membership"];

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && !heroPages.includes(pathname)) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  // Redirect to login if accessing restricted pages without being logged in
  const restrictedPages = [
    "/privateevents",
    "/projects",
    "/partnership",
    "/changepassword",
  ];
  useEffect(() => {
    if (!loading && restrictedPages.includes(pathname) && !isLoggedIn) {
      router.push("/login"); // Use router.push for navigation
    }
  }, [loading, pathname, isLoggedIn, router]);

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
        {/* <title>BiellaVita</title> */}
        {/* <meta
          name="description"
          content="BiellaVita is a community focused on well-being, aesthetics, and spiritual dimensions of life."
        /> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.16.13/antd.min.css"
        />
        <link
          rel="icon"
          href="https://i.imgur.com/5sQQ2bY.png"
          type="image/png"
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
