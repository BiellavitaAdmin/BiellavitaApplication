import Link from "next/link";
export default function LeftSectionNav() {
  return (
    <ul className="pagefooter-nav-row">
      <li className="footer-nav-text">
        {" "}
        <Link href="/club" className="footer-links">
          The Club
        </Link>
      </li>
      <li className="footer-nav-text">
        <Link href="/visionandmission" className="footer-links">
          Vision & Mission
        </Link>
      </li>
      <li className="footer-nav-text">
        <Link href="/membership" className="footer-links">
          Membership
        </Link>
      </li>
      <li className="footer-nav-text">
        <Link href="/login" className="footer-links">
          Login
        </Link>
      </li>
      <li className="footer-nav-text">
        <Link href="/getintouch" className="footer-links">
          Connect
        </Link>
      </li>
    </ul>
  );
}
