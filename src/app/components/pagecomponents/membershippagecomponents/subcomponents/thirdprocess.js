import Image from "next/image";

export default function ThirdProcess() {
  return (
    <div className="process-one-container bottomspacing">
      <div className="process-number-pic">
        <Image
          src="/process-label-three.png" // The path relative to the "public" folder
          alt="Join Us for a Welcome Meeting"
          width={95} // Width of the image
          height={95} // Height of the image
        />
      </div>
      <h2 className="process-heading">Join Us for a Welcome Meeting</h2>
      <p className="process-description">
        After reviewing your application, we’ll invite you to a casual welcome
        meeting with some of our members. This is a fantastic opportunity to get
        to know our club and share your passions.
      </p>
    </div>
  );
}
