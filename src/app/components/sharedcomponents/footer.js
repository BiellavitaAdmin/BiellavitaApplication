import "./footer.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content-container">
        <h5 className="rights-line-homepage">
          © 2024 BiellaVita. All Rights Reserved.
        </h5>
        <button className="linkdin-circularbutton">
          {" "}
          <a
            href="https://www.linkedin.com/in/pier-alberto-furno-318944183/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Linkdin.png" // The path relative to the "public" folder
              alt="My Awesome Image"
              width={35} // Width of the image
              height={35} // Height of the image
            />
          </a>
        </button>
      </div>
    </footer>
  );
}
