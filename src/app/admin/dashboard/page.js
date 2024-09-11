import "./dashboard.css";
import Image from "next/image";
export default function Admin() {
  return (
    <>
      <div className="dashboard-content">
        <div className="stats-tabs-container">
          <div className="members-tab-container">
            <div className="tab-left-section">
              <Image
                src="/members.png"
                alt="My Awesome Image"
                width={28}
                height={28}
                className="tab-icons"
              />
              <h3 className="tab-title">Members</h3>
            </div>
            <div className="tab-right-section">
              <h2 className="tab-numeric-value">45</h2>
            </div>
          </div>

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

          <div className="members-tab-container">
            <div className="tab-left-section">
              <Image
                src="/projects.png"
                alt="My Awesome Image"
                width={28}
                height={28}
                className="tab-icons"
              />
              <h3 className="tab-title">Projects</h3>
            </div>
            <div className="tab-right-section">
              <h2 className="tab-numeric-value">5</h2>
            </div>
          </div>

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
        </div>
      </div>
    </>
  );
}
