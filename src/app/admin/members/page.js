import "./members.css";
import Image from "next/image";
import Link from "next/link";
export default function Members() {
  return (
    <>
      <div className="members-section-content-container">
        <div className="dash-section-content">
          <div className="title-button-row">
            <div className="section-title">Members</div>
            <button className="add-button-dash">
              <Link href="/admin/dashboard" className="button-link">
                <Image
                  src="/addsign.png"
                  alt="My Awesome Image"
                  width={18}
                  height={18}
                  className="dash-icons"
                />
                Add Members
              </Link>
            </button>
          </div>
          <div className="section-table-section"></div>
        </div>
      </div>
    </>
  );
}
