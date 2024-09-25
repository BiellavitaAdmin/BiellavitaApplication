import Image from "next/image";
export default function BiellaLargePic() {
  return (
    <>
      <div className="large-pic-continer-club-page">
        <Image
          src="/Biella-lake.webp"
          alt="My Awesome Image"
          width={100}
          height={835}
          className="club-page-large-image-settings"
        />
      </div>
      <h2 className="clubpage-heading">The source of the idea</h2>
      <p className="page-content-text">
        … is the inspirational city of Biella.
      </p>
    </>
  );
}
