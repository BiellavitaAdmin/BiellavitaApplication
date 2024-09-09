"use client";
import Image from "next/image";
import Link from "next/link";
// import "./buttoncontainer.css";

export default function ButtonContainer({ onMenuClick, menuOpen }) {
  return (
    <>
      <div className="button-group-container">
        <button className="circular-button">
          <Link href="/login">
            <Image src="/user.png" alt="User Icon" width={28} height={28} />
          </Link>
        </button>
        <button className="circular-button" onClick={onMenuClick}>
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
