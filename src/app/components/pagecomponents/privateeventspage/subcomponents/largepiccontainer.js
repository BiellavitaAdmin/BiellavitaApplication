import Image from "next/image";

export default function LargePicContainer({ imageUrl }) {
  return (
    <div className="privateevents-large-pic-container">
      <Image
        src={imageUrl}
        alt="Event Image"
        width={1550}
        height={785}
        className="upcoming-large-image"
      />
    </div>
  );
}
