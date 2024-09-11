import Image from "next/image";
import Link from "next/link";
export default function SidebarThirdItem() {
  return (
    <>
      <li className="dash-sidebar-item">
        <Image
          src="/events.png"
          alt="My Awesome Image"
          width={25}
          height={25}
          className="dash-icons"
        />
        <Link href="/admin/events">Events</Link>
      </li>
    </>
  );
}
