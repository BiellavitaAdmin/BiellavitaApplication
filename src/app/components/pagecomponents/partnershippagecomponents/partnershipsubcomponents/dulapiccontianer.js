import Image from "next/image";
export default function DualPicContiner() {
  return (
    <>
      <div className="dual-pic-container">
        <Image
          src="https://i.postimg.cc/XqYhXQJj/dualpicpartership.webp"
          alt="My Awesome Image"
          width={100}
          height={835}
          className="dualimage-partnership-top"
        />
      </div>
      <div className="dual-pic-column-container">
        <div className="dual-pic-column">
          <Image
            src="https://i.postimg.cc/kX435X6Q/dualone.webp"
            alt="My Awesome Image"
            width={315}
            height={425}
            className="dualimage-partnership"
          />
          <Image
            src="https://i.postimg.cc/Gm8Wk7j9/dualtwo.webp"
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
