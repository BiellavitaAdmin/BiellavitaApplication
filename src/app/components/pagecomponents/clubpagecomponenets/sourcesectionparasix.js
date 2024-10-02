import paraData from "./data/SourceSectionParaSixData.json";
import Image from "next/image";

export default function SourceSectionParaSix() {
  return (
    <>
      <div className="large-pic-continer-club-page">
        <Image
          src={paraData.image.src}
          alt={paraData.image.alt}
          width={paraData.image.width}
          height={paraData.image.height}
          className={paraData.image.className}
        />
      </div>
      <p className="page-content-text">{paraData.paragraph}</p>
    </>
  );
}
