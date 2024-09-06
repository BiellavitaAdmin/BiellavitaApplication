"use client";
import Image from "next/image";
import "./fullscreenmenuheader.css";

export default function FullScreenMenuHeader({ closeMenu }) {
  return (
    <header className="header">
      <div className="header-container-left">
        <Image src="/Monogram.png" alt="Logo" width={55} height={55} />
      </div>

      <div className="header-container-right">
        <div className="button-group-container">
          <button className="circular-button">
            <Image src="/user.png" alt="User Icon" width={28} height={28} />
          </button>
          <button className="circular-button" onClick={closeMenu}>
            <Image src="/cross.png" alt="Close Menu" width={28} height={28} />
          </button>
        </div>
      </div>
    </header>
  );
}
