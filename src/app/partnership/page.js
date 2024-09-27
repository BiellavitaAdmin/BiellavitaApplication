"use client";

import "./partnership.css";
import PartnershipContent from "../components/pagecomponents/partnershippagecomponents/partnershipcontent";
import { useHeroAnimation } from "../hooks/useHeroAnimation";
export default function Partnership() {
  useHeroAnimation("partnership-hero-section", "partnership-hero-heading");
  return (
    <>
      <div className="partnership-hero-section">
        <h2 className="partnership-hero-heading">Partnerships</h2>
      </div>
      <div className="partnership-content-continer">
        <PartnershipContent />
      </div>
    </>
  );
}
