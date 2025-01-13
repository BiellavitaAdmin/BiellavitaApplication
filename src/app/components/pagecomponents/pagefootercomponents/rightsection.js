import Image from "next/image";

export default function RightSection() {
  return (
    <div className="pagefooter-right-section">
      <div className="BiellaVita-logo-container">
        <Image
          src="https://i.postimg.cc/90f7Sqxg/Biellavita-red.webp"
          alt="Biellavita_red"
          width={250}
          height={250}
          className="Biellavita-footer-logo"
        />
      </div>
    </div>
  );
}
