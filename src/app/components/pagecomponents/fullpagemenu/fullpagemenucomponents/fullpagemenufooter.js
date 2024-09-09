import Image from "next/image";
import "./fullpagemenufooter.css";

export default function FullPageMenuFooter() {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <p className="menufooter-text">
          © 2024 BiellaVita. All Rights Reserved.
        </p>
      </div>
      <div className="footer-right">
        <button className="circular-button">
          <Image src="/linkdin.png" alt="User Icon" width={28} height={28} />
        </button>
      </div>
    </div>
  );
}
