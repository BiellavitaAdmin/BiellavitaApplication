import Image from "next/image";

export default function RightSection() {
  return (
    <div className="pagefooter-right-section">
      <div className="BiellaVita-logo-container">
        <Image
          src="/Biellavita-red.png"
          alt="Biellavita_red"
          width={350}
          height={350}
        />
      </div>
    </div>
  );
}
