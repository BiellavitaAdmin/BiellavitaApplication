import Image from "next/image";
export default function SocialMediaContainer() {
  return (
    <div className="social-media-container">
      <ul className="social-media-row">
        <li className="social-media-icon">
          <a
            href="https://www.linkedin.com/in/pier-alberto-furno-318944183/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/linkedinfooter.png"
              alt="Biellavita_red"
              width={50}
              height={50}
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
