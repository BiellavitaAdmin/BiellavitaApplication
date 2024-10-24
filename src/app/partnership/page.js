"use client";
import { useEffect, useState } from "react";
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

  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && isFixed) {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFixed]);

  return (
    <>
      <div
        className={`partnership-hero-section ${isFixed ? "fixed" : "relative"}`}
      >
        <h2 className="partnership-hero-heading">Partnerships</h2>
      </div>
      <div className="partnership-content-continer">
        <PartnershipContent />
      </div>
    </>
  );
}
