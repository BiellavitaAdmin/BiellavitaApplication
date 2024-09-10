import Image from "next/image";
export default function ProcessRowTwo() {
  return (
    <>
      <div className="process-row">
        <div className="process-one-container bottomspacing">
          <div className="process-number-pic">
            <Image
              src="/process-label-three.png" // The path relative to the "public" folder
              alt="My Awesome Image"
              width={95} // Width of the image
              height={95} // Height of the image
            />
          </div>
          <h2 className="process-heading">Join Us for a Welcome Meeting</h2>
          <p className="process-description">
            After reviewing your application, we’ll invite you to a casual
            welcome meeting with some of our members. This is a fantastic
            opportunity to get to know our club and share your passions.
          </p>
        </div>
        <div className="process-one-container topspacing">
          <div className="process-number-pic">
            <Image
              src="/process-label-four.png" // The path relative to the "public" folder
              alt="My Awesome Image"
              width={95} // Width of the image
              height={95} // Height of the image
            />
          </div>
          <h2 className="process-heading">Celebrate Your Membership</h2>
          <p className="process-description">
            If all goes well, we would be delighted to officially welcome you as
            a member! You’ll be invited to a special induction ceremony where we
            celebrate new members and their unique contributions to our
            community.
          </p>
        </div>
      </div>
    </>
  );
}
