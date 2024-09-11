import Image from "next/image";
export default function HeaderLeftSection() {
  return (
    <>
      <div className="header-left-section">
        <Image
          src="/Monogram.webp"
          alt="My Awesome Image"
          width={85}
          height={85}
        />
      </div>
    </>
  );
}
