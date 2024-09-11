import Image from "next/image";
import Link from "next/link";
export default function SidebarSecondItem() {
  return (
    <>
      <li className="dash-sidebar-item">
        <Image
          src="/members.png"
          alt="My Awesome Image"
          width={25}
          height={25}
          className="dash-icons"
        />
        <Link href="/admin/members">Members</Link>
      </li>
    </>
  );
}
