import "./layout.css";
import AdminFooter from "./components/adminfooter";
import AdminHeader from "./components/adminheader";
import AdminSidebar from "./components/adminsidebar";
export default function AdminLayout({ children }) {
  return (
    <div className="admin-container">
      <AdminHeader />
      {/* Sidebar */}
      <div className="dashboard-container">
        <AdminSidebar />
        {/* Main content area */}
        <main className="main-content">{children}</main>
      </div>
      {/* Footer */}
      <AdminFooter />
    </div>
  );
}
