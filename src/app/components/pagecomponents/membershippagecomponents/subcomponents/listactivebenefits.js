import Image from "next/image";
export default function ListActiveBenefits() {
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

          <div className="list-item-desc spacinglight">
            Propose new projects allowing them to influence initiatives that
            align with their interests and expertise in respect of the core
            values.
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
            Have the opportunity to organise specific thematic events.
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
            Introduce potential new partnerships in a wide spectrum of fields.
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

          <div className="list-item-desc spacinglight">
            Active members have the opportunity to contribute to a lasting
            legacy within BiellaVita, helping shape its future direction. 
          </div>
        </li>
      </ul>
    </>
  );
}
