import "./layout.css";
import AdminFooter from "./components/adminfooter";
import AdminHeader from "./components/adminheader";
import AdminSidebar from "./components/adminsidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="admin-container">
      <AdminHeader />
      <div className="dashboard-container">
        <AdminSidebar />
        <main className="main-content">{children}</main>
      </div>
      <AdminFooter />
    </div>
  );
}
