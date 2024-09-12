import Image from "next/image";
import Link from "next/link";
export default function SidebarFirstItem() {
  return (
    <>
      <li className="dash-sidebar-item">
        <Image
          src="/dashboard.png"
          alt="My Awesome Image"
          width={25}
          height={25}
          className="dash-icons"
        />
        <Link href="/admin/dashboard" className="sidebar-link">
          Dashboard
        </Link>
      </li>
    </>
  );
}
