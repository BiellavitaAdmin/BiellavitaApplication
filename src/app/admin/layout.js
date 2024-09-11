import Link from "next/link";
import "./layout.css"; // Your custom styles for admin panel
import Image from "next/image";
export default function AdminLayout({ children }) {
  return (
    <div className="admin-container">
      <div className="admin-header">
        <div className="header-left-section">
          <Image
            src="/Monogram.webp"
            alt="My Awesome Image"
            width={85}
            height={85}
          />
        </div>
        <div className="header-right-section">
          <div className="top-section">
            <Image
              src="/dashboard.png"
              alt="My Awesome Image"
              width={25}
              height={25}
              className="dash-icons"
            />
          </div>
          <div className="bottom-section">
            <h2 className="dashboard-title">BiellaVita Admin Panel</h2>
          </div>
        </div>
      </div>
      {/* Sidebar */}
      <div className="dashboard-container">
        <aside className="sidebar">
          <nav className="dashlist-container">
            <ul className="list-dash-item">
              <li className="dash-sidebar-item">
                <Image
                  src="/dashboard.png"
                  alt="My Awesome Image"
                  width={25}
                  height={25}
                  className="dash-icons"
                />
                <Link href="/admin/dashboard">Dashboard</Link>
              </li>
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
              <li className="dash-sidebar-item">
                <Image
                  src="/projects.png"
                  alt="My Awesome Image"
                  width={25}
                  height={25}
                  className="dash-icons"
                />
                <Link href="/admin/projects">Projects</Link>
              </li>
              <li className="dash-sidebar-item">
                <Image
                  src="/partners.png"
                  alt="My Awesome Image"
                  width={25}
                  height={25}
                  className="dash-icons"
                />
                <Link href="/admin/partners">Partners</Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main content area */}
        <main className="main-content">{children}</main>
      </div>
      {/* Footer */}
      <div className="dashboard-footer">
        <h2 className="admin-footer-text">
          © 2024 BiellaVita. All rights reserved. Unauthorized reproduction or
          distribution of any material from this site is strictly prohibited.
          BiellaVita and its logo are trademarks of BiellaVita, Inc. All other
          trademarks are the property of their respective owners.
        </h2>
      </div>
    </div>
  );
}
