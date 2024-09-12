import Image from "next/image";
export default function TabThree() {
  return (
    <>
      <div className="members-tab-container">
        <div className="tab-left-section">
          <Image
            src="/partners.png"
            alt="My Awesome Image"
            width={28}
            height={28}
            className="tab-icons"
          />
          <h3 className="tab-title">Partners</h3>
        </div>
        <div className="tab-right-section">
          <h2 className="tab-numeric-value">7</h2>
        </div>
      </div>
    </>
  );
}
