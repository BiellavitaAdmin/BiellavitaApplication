import Image from "next/image";
export default function FirstProcess() {
  return (
    <>
      <div className="process-one-container bottomspacing">
        <div className="process-number-pic">
          <Image
            src="/process-label-one.png" // The path relative to the "public" folder
            alt="My Awesome Image"
            width={95} // Width of the image
            height={95} // Height of the image
          />
        </div>
        <h2 className="process-heading">Receive a Warm Invitation</h2>
        <p className="process-description">
          Our club thrives on connections! You’ll need an invitation from a
          current member who believes you would be a great fit for our
          community.
        </p>
      </div>
    </>
  );
}
