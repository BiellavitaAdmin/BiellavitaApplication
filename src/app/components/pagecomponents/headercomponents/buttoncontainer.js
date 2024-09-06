import Image from "next/image";

export default function ButtonContainer() {
  return (
    <div className="button-group-container">
      <button className="cicular-button">
        {" "}
        <Image
          src="/images/user.png" // The path relative to the "public" folder
          alt="My Awesome Image"
          width={28} // Width of the image
          height={28} // Height of the image
        />
      </button>
      <button className="cicular-button">
        {" "}
        <Image
          src="/images/dots.png" // The path relative to the "public" folder
          alt="My Awesome Image"
          width={28} // Width of the image
          height={28} // Height of the image
        />
      </button>
    </div>
  );
}
