"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./fullpagemenucontents.css";

export default function FullPageMenuContainer({ closeMenu }) {
  const [animate, setAnimate] = useState(false);

  // Trigger animation when the component mounts (menu opens)
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 50); // Small delay to ensure smooth animation
    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <div className="pagemenu-content-container">
      <ul className="menu-content-list">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`menu-content-item ${animate ? "slide-in" : ""}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <Link
              href={item.href}
              onClick={closeMenu}
              className="menu-content-link"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Sample array for menu items to make it dynamic
const menuItems = [
  { text: "The Club", href: "/club" },
  { text: "Vision & Mission", href: "/visionandmission" },
  { text: "Private Events", href: "/privateevents" },
  { text: "Projects", href: "/projects" },
  { text: "Partnerships", href: "/partnership" },
  { text: "Membership", href: "/membership" },
  { text: "Connect", href: "/getintouch" },
];
