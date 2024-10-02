import Image from "next/image";

export default function FourthProcess() {
  return (
    <div className="process-one-container topspacing">
      <div className="process-number-pic">
        <Image
          src="/process-label-four.png" // The path relative to the "public" folder
          alt="Celebrate Your Membership"
          width={95} // Width of the image
          height={95} // Height of the image
        />
      </div>
      <h2 className="process-heading">Celebrate Your Membership</h2>
      <p className="process-description">
        If all goes well, we would be delighted to officially welcome you as a
        member! You’ll be invited to a special induction ceremony where we
        celebrate new members and their unique contributions to our community.
      </p>
    </div>
  );
}
