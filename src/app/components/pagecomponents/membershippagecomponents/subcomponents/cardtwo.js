import Image from "next/image";
export default function CardTwo() {
  return (
    <>
      <div className="subscription-card-one">
        <div className="card-banner">
          <Image
            src="https://i.postimg.cc/8zNyCZnq/bear-book.webp"
            alt="User Icon"
            width={28}
            height={28}
            className="cardtwo-image"
          />
        </div>
        <div className="card-content-container">
          <h2 className="card-heading">Non-Active Membership</h2>
          <p className="card-para-one">
            On the other hand, Non-Active members are those who have accepted
            our invitation to join BiellaVita based on their alignment with our
            values and vision. While they may not have the time or desire to
            take on an active role, Non-Active members are welcome to attend
            various events and activities organized by the organization.
          </p>
          {/* <br /> */}
          <p className="card-para-two">
            This Non-Active membership allows individuals to stay connected with
            BiellaVita, participate in select events, and support the
            organization's mission, without the need for a significant time
            commitment or active involvement
          </p>
          {/* <div className="card-button-container">
            <button className="card-button">Apply now</button>
          </div> */}
        </div>
      </div>
    </>
  );
}
