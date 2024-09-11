"use client";
import Link from "next/link";
import Image from "next/image";
import "./fullscreenmenuheader.css";

export default function FullScreenMenuHeader({ closeMenu }) {
  return (
    <header className="header">
      <div className="header-container-left">
        <Link href="/" onClick={closeMenu}>
          <Image
            src="/Monogram.webp" // The path relative to the "public" folder
            alt="My Awesome Image"
            width={55} // Width of the image
            height={55} // Height of the image
          />
        </Link>
      </div>

      <div className="header-container-right">
        <div className="button-group-container">
          <button className="circular-button">
            <Link href="/login" onClick={closeMenu}>
              <Image src="/user.png" alt="User Icon" width={28} height={28} />
            </Link>
          </button>
          <button className="circular-button" onClick={closeMenu}>
            <Image src="/cross.png" alt="Close Menu" width={28} height={28} />
          </button>
        </div>
      </div>
    </header>
  );
}
