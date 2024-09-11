import Image from "next/image";
export default function LargePicContainer() {
  return (
    <>
      <div className="privateevents-large-pic-container">
        <Image
          src="/partnerhip_two.webp"
          alt="My Awesome Image"
          width={1550}
          height={785}
        />
      </div>
    </>
  );
}
