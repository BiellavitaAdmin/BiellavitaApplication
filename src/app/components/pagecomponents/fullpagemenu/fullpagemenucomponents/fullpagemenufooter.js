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
          <a
            href="https://www.linkedin.com/in/pier-alberto-furno-318944183/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/linkdin.png" alt="User Icon" width={28} height={28} />
          </a>
        </button>
      </div>
    </div>
  );
}
