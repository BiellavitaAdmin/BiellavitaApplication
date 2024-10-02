import Image from "next/image";

export default function ListItem({ bulletSrc, description }) {
  return (
    <li className="benefits-list-item">
      <div className="bullet-container">
        <Image
          src={bulletSrc} // Image source passed as prop
          alt="List Bullet"
          width={25} // Width of the image
          height={25} // Height of the image
        />
      </div>

      <div className="list-item-desc">{description}</div>
    </li>
  );
}
