"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
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
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  useEffect(() => {
    const checkAuth = () => {
      // Ensure we're only running this on the client side
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token); // Set isLoggedIn to true if token exists
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  // Redirect to login if trying to access restricted pages without being logged in
  const restrictedPages = ["/privateevents", "/projects", "/partnership"];
  useEffect(() => {
    if (!loading && restrictedPages.includes(pathname) && !isLoggedIn) {
      router.push("/login");
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
  ];

  const isAdminRoute = pathname.startsWith("/admin");

  // if (loading) {
  //   return <div>Loading...</div>; // Display a loading state
  // }

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
