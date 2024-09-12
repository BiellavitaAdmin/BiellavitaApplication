import Image from "next/image";
import Link from "next/link";
export default function SidebarFourthItem() {
  return (
    <>
      <li className="dash-sidebar-item">
        <Image
          src="/projects.png"
          alt="My Awesome Image"
          width={25}
          height={25}
          className="dash-icons"
        />
        <Link href="/admin/projects" className="sidebar-link">
          Projects
        </Link>
      </li>
    </>
  );
}
