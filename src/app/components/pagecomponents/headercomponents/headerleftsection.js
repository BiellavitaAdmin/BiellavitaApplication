import Image from "next/image";
import Link from "next/link";

export default function HeaderLeftSection() {
  return (
    <div className="header-container-left">
      {" "}
      <Link href="/">
        <Image
          src="/Monogram.png" // The path relative to the "public" folder
          alt="My Awesome Image"
          width={55} // Width of the image
          height={55} // Height of the image
        />
      </Link>
    </div>
  );
}
