import Image from "next/image";
import Link from "next/link";
export default function ProjectsUpperSection() {
  return (
    <>
      <div className="title-button-row">
        <div className="section-title">Partners</div>
        <button className="add-button-dash">
          <Link href="/admin/partners/addpartners" className="button-link">
            <Image
              src="/addsign.png"
              alt="My Awesome Image"
              width={18}
              height={18}
              className="dash-icons"
            />
            Add Partners
          </Link>
        </button>
      </div>
    </>
  );
}
