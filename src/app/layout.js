"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation"; // Import usePathname and useRouter
import { Playfair_Display } from "next/font/google";
import Header from "./components/sharedcomponents/header";
import FullScreenMenu from "./components/pagecomponents/fullpagemenu/fullscreenmenu";
import "./styles/globals.css";
import PageFooter from "./components/pagecomponents/pagefooter/pagefooter";
// import "antd/dist/antd.css"; // You can keep this for local imports

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state
  const pathname = usePathname(); // Get the current pathname
  const router = useRouter(); // Initialize router

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      if (token) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setLoading(false); // Set loading to false after check
    };

    checkAuth(); // Check authentication on component mount

    // Function to handle menu closing after pathname changes
    const closeMenu = () => {
      setMenuOpen(false);
    };

    // Call closeMenu whenever pathname changes
    closeMenu();
  }, [pathname]); // Dependency on pathname

  // List of pages that require authentication
  const restrictedPages = ["/privateevents", "/projects", "/partnership"];

  // Check if the current page is restricted and the user is not logged in
  if (restrictedPages.includes(pathname) && !isLoggedIn) {
    router.push("/login"); // Redirect to login if not authenticated
    return null; // Prevent rendering of children while redirecting
  }

  const showFooterOn = [
    "/club",
    "/getintouch",
    "/visionandmission",
    "/login",
    "/partnership",
  ];

  const isAdminRoute = pathname.startsWith("/admin");

  if (loading) {
    return <p>Loading...</p>; // Show loading message while checking auth
  }

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
