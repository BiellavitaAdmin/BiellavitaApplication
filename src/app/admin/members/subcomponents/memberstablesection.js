import Image from "next/image";
export default function MembersTableSection() {
  return (
    <>
      <div className="section-table-section">
        <div className="section-not-found">
          <Image
            src="/nodataicon.png"
            alt="My Awesome Image"
            width={110}
            height={80}
            className="dash-icons"
          />
        </div>
      </div>
    </>
  );
}
