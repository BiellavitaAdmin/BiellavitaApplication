import Image from "next/image";
export default function FoundersHeadingSection() {
  return (
    <>
      <div className="large-pic-continer-club-page">
        <Image
          src="/clubpage-tri-image.png"
          alt="My Awesome Image"
          width={100}
          height={835}
          className="club-page-large-image-settings"
        />
      </div>
      <h2 className="clubpage-heading">Founders</h2>
    </>
  );
}
