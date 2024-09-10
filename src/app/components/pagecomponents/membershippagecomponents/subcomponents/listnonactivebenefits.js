import Image from "next/image";
export default function ListNonActiveBenefits() {
  return (
    <>
      <ul className="benefits-list">
        <li className="benefits-list-item">
          <div className="bullet-container">
            {" "}
            <Image
              src="/listbullet.png" // The path relative to the "public" folder
              alt="My Awesome Image"
              width={25} // Width of the image
              height={25} // Height of the image
            />
          </div>
          <div className="list-item-desc spacingrightcard">
            Invitation to the club events
          </div>
        </li>
        <li className="benefits-list-item">
          <div className="bullet-container">
            {" "}
            <Image
              src="/listbullet.png" // The path relative to the "public" folder
              alt="My Awesome Image"
              width={25} // Width of the image
              height={25} // Height of the image
            />
          </div>
          <div className="list-item-desc spacingrightcard">
            Access to our partnership’s facilities, products, and services
          </div>
        </li>
        <li className="benefits-list-item">
          <div className="bullet-container">
            {" "}
            <Image
              src="/listbullet.png" // The path relative to the "public" folder
              alt="My Awesome Image"
              width={25} // Width of the image
              height={25} // Height of the image
            />
          </div>
          <div className="list-item-desc spacingrightcard">
            Being amongst like-minded people
          </div>
        </li>
        <li className="benefits-list-item">
          <div className="bullet-container">
            {" "}
            <Image
              src="/listbullet.png" // The path relative to the "public" folder
              alt="My Awesome Image"
              width={25} // Width of the image
              height={25} // Height of the image
            />
          </div>
          <div className="list-item-desc spacingrightcard">
            First access to the club products and merchandise.
          </div>
        </li>
      </ul>
    </>
  );
}
