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
    <div className="menu-content-container">
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={animate ? "slide-in" : ""}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <Link href={item.href} onClick={closeMenu}>
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
  { text: "Get in Touch", href: "/getintouch" },
];
