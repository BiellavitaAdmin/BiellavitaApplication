import Image from "next/image";
export default function SecondProcess() {
  return (
    <>
      <div className="process-one-container topspacing">
        <div className="process-number-pic">
          <Image
            src="/process-label-two.png" // The path relative to the "public" folder
            alt="My Awesome Image"
            width={95} // Width of the image
            height={95} // Height of the image
          />
        </div>
        <h2 className="process-heading">
          Fill Out Your Membership Application
        </h2>
        <p className="process-description">
          Once you have your invitation, we invite you to complete a simple
          membership application. Share a bit about yourself, your interests,
          and what draws you to our club.
        </p>
      </div>
    </>
  );
}
