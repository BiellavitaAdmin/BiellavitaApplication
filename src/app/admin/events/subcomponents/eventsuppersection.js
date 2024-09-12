import Image from "next/image";
import Link from "next/link";
export default function EventsUpperSection() {
  return (
    <>
      <div className="title-button-row">
        <div className="section-title">Events</div>
        <button className="add-button-dash">
          <Link href="/admin/events/addevents" className="button-link">
            <Image
              src="/addsign.png"
              alt="My Awesome Image"
              width={18}
              height={18}
              className="dash-icons"
            />
            Add Events
          </Link>
        </button>
      </div>
    </>
  );
}
