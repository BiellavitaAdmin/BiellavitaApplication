import "./pagefooter.css";
import Image from "next/image";

export default function PageFooter() {
  return (
    <>
      <div className="pagefooter-container">
        <div className="pagefooter-left-section">
          <ul className="pagefooter-nav-row">
            <li className="footer-nav-text">The Club</li>
            <li className="footer-nav-text">Vission & Mission</li>
            <li className="footer-nav-text">Membership</li>
            <li className="footer-nav-text">Login</li>
            <li className="footer-nav-text">Connect</li>
          </ul>
          <div className="address-section">
            <p className="address-text">53 Davies Street</p>
            <p className="address-text">London</p>
            <p className="address-text">W1K 5JH</p>
          </div>
          <div className="social-media-container">
            <ul className="social-media-row">
              <li className="social-media-icon">Linding</li>
            </ul>
          </div>
        </div>
        <div className="pagefooter-right-section">
          <div className="BiellaVita-logo-container">
            <Image
              src="/Biellavita-red.png"
              alt="Biellavita_red"
              width={350}
              height={350}
            />
          </div>
        </div>
      </div>
      <div className="pagefooter-rights-section">
        <p className="pagefooter-rights-text">
          © 2024 BiellaVita. All rights reserved. Unauthorized reproduction or
          distribution of any material from this site is strictly prohibited.
          BiellaVita and its logo are trademarks of BiellaVita, Inc. All other
          trademarks are the property of their respective owners.
        </p>
      </div>
    </>
  );
}
