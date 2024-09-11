import HeaderLeftSection from "./subcomponents/headerleftsection";
import HeaderRightSection from "./subcomponents/headerrightsection";
export default function AdminHeader() {
  return (
    <>
      <div className="admin-header">
        <HeaderLeftSection />
        <HeaderRightSection />
      </div>
    </>
  );
}
