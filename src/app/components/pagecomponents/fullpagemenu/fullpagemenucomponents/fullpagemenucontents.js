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
        <li>Vision & Mission</li>
        <li>Private Events</li>
        <li>Projects</li>
        <li>Partnerships</li>
        <li>Membership</li>
        <li>Get in Touch</li>
      </ul>
    </div>
  );
}
