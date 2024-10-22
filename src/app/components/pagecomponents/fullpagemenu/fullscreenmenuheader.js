"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import Cookies from "js-cookie"; // Import Cookies
import { Tooltip } from "antd";
import "./fullscreenmenuheader.css";

export default function FullScreenMenuHeader({ closeMenu }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Check if token exists
  }, []);

  const handleLogout = () => {
    // Clear localStorage and cookies
    localStorage.removeItem("token");
    Cookies.remove("token"); // Remove the token cookie
    router.push("/login"); // Redirect to login page
  };

  return (
    <header className="header">
      <div className="header-container-left">
        <Link href="/" onClick={closeMenu}>
          <Image
            src="/redbiella.png" // The path relative to the "public" folder
            alt="My Awesome Image"
            width={55} // Width of the image
            height={55} // Height of the image
          />
        </Link>
      </div>

      <div className="header-container-right">
        <div className="button-group-container">
          {isLoggedIn ? (
            <Tooltip title="Logout" placement="bottom" zIndex={20000}>
              <button className="circular-button-menu" onClick={handleLogout}>
                <Image
                  src="/logoutred.png" // Change image when logged in
                  alt="Logout Icon"
                  width={28}
                  height={28}
                />
              </button>
            </Tooltip>
          ) : (
            <Tooltip title="Login" placement="bottom" zIndex={20000}>
              <button className="circular-button-menu">
                <Link href="/login" onClick={closeMenu}>
                  <Image
                    src="/user.png" // Change image when not logged in
                    alt="User Icon"
                    width={28}
                    height={28}
                  />
                </Link>
              </button>
            </Tooltip>
          )}
          <Tooltip title="Close Menu" placement="bottom" zIndex={20000}>
            <button className="circular-button-menu" onClick={closeMenu}>
              <Image
                src="/closered.png"
                alt="Close Menu"
                width={28}
                height={28}
              />
            </button>
          </Tooltip>
        </div>
      </div>
    </header>
  );
}
