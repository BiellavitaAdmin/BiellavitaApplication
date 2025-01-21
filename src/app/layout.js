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
  const [userRole, setUserRole] = useState(null); // Store the user's role
  const [loading, setLoading] = useState(true);
  const pathname = usePathname(); // Detect pathname changes
  const router = useRouter(); // Use the updated useRouter from next/navigation

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  useEffect(() => {
    const checkAuth = () => {
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("token");
        if (token) {
          try {
            // Decode the token to get the user's role
            const decodedToken = JSON.parse(atob(token.split(".")[1])); // Decode JWT payload
            setIsLoggedIn(true);
            setUserRole(decodedToken.role); // Set the user's role
          } catch (error) {
            console.error("Error decoding token:", error);
            setIsLoggedIn(false);
            setUserRole(null);
          }
        } else {
          setIsLoggedIn(false);
        }
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

  // Redirect to login or not authorized based on role
  const restrictedPages = [
    "/privateevents",
    "/partnership",
    "/changepassword",
    "/admin/dashboard",
  ];
  useEffect(() => {
    if (!loading) {
      if (restrictedPages.includes(pathname) && !isLoggedIn) {
        router.push("/login"); // Redirect to login if not logged in
      } else if (pathname === "/admin/dashboard" && userRole !== "admin") {
        router.push("/not-authorized"); // Redirect non-admin users
      }
    }
  }, [loading, pathname, isLoggedIn, userRole, router]);

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
        <link
          rel="icon"
          href="https://i.postimg.cc/90f7Sqxg/Biellavita-red.webp"
          type="image/webp"
        />
        <meta
          name="google-site-verification"
          content="iJgyaSgYOIRODru2tZogWJSY2P-cEkNFXem9wrbgPbQ"
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
