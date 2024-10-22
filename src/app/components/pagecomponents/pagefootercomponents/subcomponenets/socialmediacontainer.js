import Image from "next/image";
import { Tooltip } from "antd";
export default function SocialMediaContainer() {
  return (
    <div className="social-media-container">
      <ul className="social-media-row">
        <li className="social-media-icon">
          <Tooltip
            title="Connect with us on LinkedIn"
            placement="bottom"
            zIndex={20000}
          >
            <a
              href="https://www.linkedin.com/in/pier-alberto-furno-318944183/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedinfooter.webp"
                alt="Biellavita_red"
                width={50}
                height={50}
              />
            </a>
          </Tooltip>
        </li>
        <li className="social-media-icon">
          <Tooltip
            title="Join us on Instagram"
            placement="right"
            zIndex={20000}
          >
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/instagramfooter.png"
                alt="Biellavita_red"
                width={50}
                height={50}
                style={{ marginLeft: "0.4rem" }}
              />
            </a>
          </Tooltip>
        </li>
      </ul>
    </div>
  );
}
