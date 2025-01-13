import Image from "next/image";
export default function LargePic() {
  return (
    <>
      <div className="large-pic-container">
        <Image
          src="https://i.postimg.cc/Lsk0Trg4/partnerhip-two.webp"
          alt="My Awesome Image"
          width={990}
          height={585}
          className="largepic-partnership"
        />
      </div>
    </>
  );
}
