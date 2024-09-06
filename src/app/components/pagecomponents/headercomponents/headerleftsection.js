import Image from "next/image";

export default function HeaderLeftSection() {
  return (
    <div className="header-container-left">
      {" "}
      <Image
        src="/images/Monogram.png" // The path relative to the "public" folder
        alt="My Awesome Image"
        width={55} // Width of the image
        height={55} // Height of the image
      />
    </div>
  );
}
