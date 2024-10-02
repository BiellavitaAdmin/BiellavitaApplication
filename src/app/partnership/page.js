"use client";

import "./partnership.css";
import dynamic from "next/dynamic"; // Import dynamic from Next.js
import { useHeroAnimation } from "../hooks/useHeroAnimation";

// Dynamically import PartnershipContent
const PartnershipContent = dynamic(
  () =>
    import(
      "../components/pagecomponents/partnershippagecomponents/partnershipcontent"
    ),
  {
    ssr: false, // Disable server-side rendering
  }
);

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
