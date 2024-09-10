import Link from "next/link";
import "./fullpagemenucontents.css";

export default function FullPageMenuContainer({ closeMenu }) {
  return (
    <div className="menu-content-container">
      <ul>
        <li>
          <Link href="/club" onClick={closeMenu}>
            The Club
          </Link>
        </li>
        <li>
          <Link href="/visionandmission" onClick={closeMenu}>
            Vision & Mission
          </Link>
        </li>
        <li>
          <Link href="/privateevents" onClick={closeMenu}>
            Private Events
          </Link>
        </li>
        <li>
          <Link href="/projects" onClick={closeMenu}>
            Projects
          </Link>
        </li>
        <li>
          <Link href="/partnership" onClick={closeMenu}>
            Partnerships
          </Link>
        </li>
        <li>
          <Link href="/membership" onClick={closeMenu}>
            Membership
          </Link>
        </li>
        <li>
          <Link href="/getintouch" onClick={closeMenu}>
            Get in Touch
          </Link>
        </li>
      </ul>
    </div>
  );
}
