import Image from "next/image";
import paraData from "./data/SourceSectionParaSixData.json";
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
      <p className="page-content-text">{paraData.paragraph}</p>
    </>
  );
}
