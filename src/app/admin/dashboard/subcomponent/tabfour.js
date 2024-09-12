import Image from "next/image";
export default function TabFour() {
  return (
    <div className="members-tab-container">
      <div className="tab-left-section">
        <Image
          src="/events.png"
          alt="My Awesome Image"
          width={28}
          height={28}
          className="tab-icons"
        />
        <h3 className="tab-title">Events</h3>
      </div>
      <div className="tab-right-section">
        <h2 className="tab-numeric-value">3</h2>
      </div>
    </div>
  );
}
