import Image from "next/image";
import Link from "next/link";
export default function SidebarFifthItem() {
  return (
    <>
      <li className="dash-sidebar-item">
        <Image
          src="/partners.png"
          alt="My Awesome Image"
          width={25}
          height={25}
          className="dash-icons"
        />
        <Link href="/admin/partners" className="sidebar-link">
          Partners
        </Link>
      </li>
    </>
  );
}
