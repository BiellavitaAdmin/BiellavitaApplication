"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import Cookies from "js-cookie"; // Import Cookies

export default function MainButtonContainer({ onMenuClick, menuOpen }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter(); // Initialize router

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token:", token);
    setIsLoggedIn(!!token); // Check if token exists
  }, []);

  const handleLogout = () => {
    // Clear localStorage and cookies
    localStorage.removeItem("token");
    Cookies.remove("token"); // Remove the token cookie
    router.push("/login"); // Redirect to login page
  };

  return (
    <div className="main-button-group-container">
      {isLoggedIn ? (
        <button className="circular-button" onClick={handleLogout}>
          <Image src="/logout.png" alt="Logout Icon" width={28} height={28} />
        </button>
      ) : (
        <button className="circular-button">
          <Link href="/login">
            <Image src="/user.png" alt="User Icon" width={28} height={28} />
          </Link>
        </button>
      )}
      <button className="circular-button" onClick={onMenuClick}>
        <Image
          src={menuOpen ? "/cross.png" : "/dots.png"}
          alt={menuOpen ? "Close menu" : "Open menu"}
          width={28}
          height={28}
        />
      </button>
    </div>
  );
}
