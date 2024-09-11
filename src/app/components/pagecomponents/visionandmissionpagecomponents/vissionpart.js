import Image from "next/image";

export default function Vissionpart() {
  return (
    <>
      <h2 className="visionandmission-heading">Vision</h2>
      <p className="visionandmission-page-content-text">
        BiellaVita vision is to become a reference label that embodies the
        epitome of a specific lifestyle in line with its core values that are :
      </p>
      <div className="motto-container">
        <Image
          src="/Biellamotto.webp" // The path relative to the "public" folder
          alt="My Awesome Image"
          width={360} // Width of the image
          height={635} // Height of the image
        />
      </div>
    </>
  );
}
