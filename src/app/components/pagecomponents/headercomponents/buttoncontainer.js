"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MainButtonContainer({ onMenuClick, menuOpen }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token:", token);
    setIsLoggedIn(!!token); // Check if token exists
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token from local storage
    setIsLoggedIn(false); // Update the state
    // Optionally redirect to login page
    window.location.href = "/login"; // Redirect to the login page
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
