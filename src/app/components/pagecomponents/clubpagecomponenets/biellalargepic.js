import Image from "next/image";
export default function BiellaLargePic() {
  return (
    <>
      <div className="large-pic-continer-club-page">
        <Image
          src="https://i.postimg.cc/sD6bh9P1/Biella-lake.webp"
          alt="My Awesome Image"
          width={100}
          height={835}
          className="club-page-large-image-settings"
        />
      </div>
      <h2 className="clubpage-heading">
        The source of the idea is the inspirational city of Biella.
      </h2>
      {/* <p className="page-content-text">
        … is the inspirational city of Biella.
      </p> */}
    </>
  );
}
