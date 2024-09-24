import Image from "next/image";
export default function SourceSectionParaFour() {
  return (
    <>
      <div className="dual-pic-continer-club-page">
        <Image
          src="/clubpage-left.png"
          alt="My Awesome Image"
          width={100}
          height={835}
          className="club-page-dual-image-settings-one"
        />
        <Image
          src="/clubpage-right.png"
          alt="My Awesome Image"
          width={100}
          height={835}
          className="club-page-dual-image-settings-two"
        />
      </div>

      <p className="page-content-text">
        Named the “Capital of Wool” its picturesque valleys are adorned with
        renowned woolen mills.
      </p>
    </>
  );
}
