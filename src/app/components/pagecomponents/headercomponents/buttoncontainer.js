"use client";
import { useState } from "react";
import Image from "next/image";
import FullScreenMenu from "../fullpagemenu/fullscreenmenu";

export default function ButtonContainer() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="button-group-container">
        <button className="cicular-button">
          {" "}
          <Image
            src="/user.png" // The path relative to the "public" folder
            alt="My Awesome Image"
            width={28} // Width of the image
            height={28} // Height of the image
          />
        </button>
        <button className="cicular-button" onClick={toggleMenu}>
          <Image
            src={menuOpen ? "/cross.png" : "/dots.png"}
            alt={menuOpen ? "Close menu" : "Open menu"}
            width={28}
            height={28}
          />
        </button>
      </div>
      {menuOpen && <FullScreenMenu closeMenu={toggleMenu} />}
    </>
  );
}
