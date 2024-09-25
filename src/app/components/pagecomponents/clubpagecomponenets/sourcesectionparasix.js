import Image from "next/image";
export default function SourceSectionParaSix() {
  return (
    <>
      <div className="large-pic-continer-club-page">
        <Image
          src="/clubpage-third.webp"
          alt="My Awesome Image"
          width={100}
          height={835}
          className="club-page-large-image-settings"
        />
      </div>
      <p className="page-content-text">
        In the most unexpected of circumstances, two paths from vastly different
        backgrounds crossed to create a space that celebrates excellence and
        brings like-minded people together.
      </p>
    </>
  );
}
