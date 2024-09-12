import Image from "next/image";
import Link from "next/link";
export default function HeaderLeftSection() {
  return (
    <>
      <div className="header-left-section">
        <Link href="/">
          <Image
            src="/Monogram.webp"
            alt="My Awesome Image"
            width={85}
            height={85}
          />
        </Link>
      </div>
    </>
  );
}
