import Link from "next/link";
export default function LeftSectionNav() {
  return (
    <ul className="pagefooter-nav-row">
      <li className="footer-nav-text">
        {" "}
        <Link href="/club">The Club</Link>
      </li>
      <li className="footer-nav-text">
        <Link href="/visionandmission">Vission & Mission</Link>
      </li>
      <li className="footer-nav-text">
        <Link href="/membership">Membership</Link>
      </li>
      <li className="footer-nav-text">
        <Link href="/login">Login</Link>
      </li>
      <li className="footer-nav-text">
        <Link href="/getintouch">Connect</Link>
      </li>
    </ul>
  );
}
