import Image from "next/image";
export default function DualPicContiner() {
  return (
    <>
      <div className="dual-pic-container">
        <Image
          src="/dualpicpartership.webp"
          alt="My Awesome Image"
          width={100}
          height={835}
          className="dualimage-partnership-top"
        />
      </div>
      <div className="dual-pic-column-container">
        <div className="dual-pic-column">
          <Image
            src="/dualone.webp"
            alt="My Awesome Image"
            width={315}
            height={425}
            className="dualimage-partnership"
          />
          <Image
            src="/dualtwo.webp"
            alt="My Awesome Image"
            width={315}
            height={425}
            className="dualimage-partnership"
          />
        </div>
      </div>
    </>
  );
}
