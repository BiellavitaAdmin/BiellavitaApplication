"use client";
import "./fullscreenmenu.css";
import FullScreenMenuHeader from "./fullscreenmenuheader";

export default function FullScreenMenu({ closeMenu }) {
  return (
    <div className="full-screen-menu">
      <FullScreenMenuHeader closeMenu={closeMenu} />
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
