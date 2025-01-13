import Image from "next/image";
export default function SourceSectionParaSix() {
  return (
    <>
      <div className="large-pic-continer-club-page">
        <Image
          src="https://i.postimg.cc/Y0gfC7x1/IMG-0108.webp"
          alt="My Awesome Image"
          width={100}
          height={835}
          className="club-page-large-image-settings"
        />
      </div>
      <h2 className="clubpage-heading">Founders</h2>
      <p className="page-content-text">
        In the most unexpected of circumstances, two paths from vastly different
        backgrounds crossed to create a space that celebrates excellence and
        brings like-minded people together.
      </p>
    </>
  );
}
