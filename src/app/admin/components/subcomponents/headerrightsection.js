import Image from "next/image";
export default function HeaderRightSection() {
  return (
    <>
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
    </>
  );
}
