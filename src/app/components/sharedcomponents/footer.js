import Image from "next/image";
import { Tooltip } from "antd";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content-container">
        <p className="rights-line-homepage">
          © 2024 BiellaVita. All Rights Reserved.
        </p>
        <div className="social-media-links-button-continer-footer">
          <Tooltip
            title="Follow us on Instagram"
            placement="left"
            zIndex={20000}
          >
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkdin-circularbutton"
            >
              <Image
                src="https://i.postimg.cc/wTpKhcGk/instagramred.png"
                alt="Instagram Icon"
                width={35}
                height={35}
              />
            </a>
          </Tooltip>
          <Tooltip
            title="Connect with us on LinkedIn"
            placement="top"
            zIndex={20000}
          >
            <a
              href="https://www.linkedin.com/in/pier-alberto-furno-318944183/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkdin-circularbutton"
            >
              <Image
                src="https://i.postimg.cc/1zL7yyxK/linkedinred.png"
                alt="LinkedIn Icon"
                width={35}
                height={35}
              />
            </a>
          </Tooltip>
        </div>
      </div>
    </footer>
  );
}
