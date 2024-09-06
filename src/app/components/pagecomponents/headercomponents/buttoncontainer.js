"use client";
import { useState } from "react";
import Image from "next/image";
// import "./buttoncontainer.css";

export default function ButtonContainer({ onMenuClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    onMenuClick();
  };

  return (
    <>
      <div className="button-group-container">
        <button className="circular-button">
          <Image
            src="/user.png"
            alt="My Awesome Image"
            width={28}
            height={28}
          />
        </button>
        <button className="circular-button" onClick={toggleMenu}>
          <Image
            src={menuOpen ? "/cross.png" : "/dots.png"}
            alt={menuOpen ? "Close menu" : "Open menu"}
            width={28}
            height={28}
          />
        </button>
      </div>
    </>
  );
}
