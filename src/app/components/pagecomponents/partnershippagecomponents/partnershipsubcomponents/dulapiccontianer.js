import Image from "next/image";
export default function DualPicContiner() {
  return (
    <>
      <div className="dual-pic-container">
        <Image
          src="/dualpicpartership.png"
          alt="My Awesome Image"
          width={1100}
          height={835}
        />
      </div>
    </>
  );
}
