import Image from "next/image";
import { Tooltip } from "antd"; // Import Tooltip from Ant Design
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
        <Tooltip
          title="Connect with us on LinkedIn"
          placement="left"
          zIndex={20000}
        >
          {" "}
          {/* Add higher zIndex if needed */}
          <a
            href="https://www.linkedin.com/in/pier-alberto-furno-318944183/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="circular-button-menu">
              <Image
                src="https://i.postimg.cc/wTpKhcGk/instagramred.png"
                alt="LinkedIn Icon"
                width={28}
                height={28}
              />
            </button>
          </a>
        </Tooltip>

        <Tooltip title="Follow us on Instagram" zIndex={20000}>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="circular-button-menu">
              <Image
                src="https://i.postimg.cc/1zL7yyxK/linkedinred.png"
                alt="Instagram Icon"
                width={28}
                height={28}
              />
            </button>
          </a>
        </Tooltip>
      </div>
    </div>
  );
}
