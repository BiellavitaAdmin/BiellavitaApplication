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
            <button className="circular-button" onClick={handleLogout}>
              <Tooltip title="Logout">
                <Image
                  src="/logout.png" // Change image when logged in
                  alt="Logout Icon"
                  width={28}
                  height={28}
                />
              </Tooltip>
            </button>
          ) : (
            <button className="circular-button">
              <Link href="/login" onClick={closeMenu}>
                <Tooltip title="Login">
                  <Image
                    src="/user.png" // Change image when not logged in
                    alt="User Icon"
                    width={28}
                    height={28}
                  />
                </Tooltip>
              </Link>
            </button>
          )}

          <button className="circular-button" onClick={closeMenu}>
            <Tooltip title="Close Menu">
              <Image src="/cross.png" alt="Close Menu" width={28} height={28} />
            </Tooltip>
          </button>
        </div>
      </div>
    </header>
  );
}
