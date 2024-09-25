import Image from "next/image";
export default function CardOne() {
  return (
    <>
      <div className="subscription-card-one">
        <div className="card-banner">
          <Image
            src="/bear-chess.webp"
            alt="User Icon"
            width={28}
            height={28}
            className="cardone-image"
          />
        </div>
        <div className="card-content-container">
          <h2 className="card-heading">Active Membership</h2>
          <p className="card-para-one">
            The active members of BiellaVita will have the opportunity to
            propose and contribute to a variety of projects. These projects may
            be in the field of education, culture, art, fashion, food and other
            topics in relation with the lifestyle and BiellaVita values. Active
            members can play a hands-on role in the execution of these projects,
            leveraging their own contacts and relationships to support the work
            of BiellaVita.
          </p>
          <p className="card-para-two">
            This active membership is ideal for individuals who wish to take a
            proactive role within the organization and contribute directly to
            its initiatives and activities.
          </p>
          <div className="card-button-container">
            <button className="card-button">Apply now</button>
          </div>
        </div>
      </div>
    </>
  );
}
