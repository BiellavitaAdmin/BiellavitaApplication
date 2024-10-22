import "./footer.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content-container">
        <h5 className="rights-line-homepage">
          © 2024 BiellaVita. All Rights Reserved.
        </h5>
        <div className="social-media-links-button-continer-footer">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkdin-circularbutton"
          >
            <Image
              src="/instagramred.png"
              alt="Instagram Icon"
              width={35}
              height={35}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/pier-alberto-furno-318944183/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkdin-circularbutton"
          >
            <Image
              src="/linkedinred.png"
              alt="LinkedIn Icon"
              width={35}
              height={35}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
