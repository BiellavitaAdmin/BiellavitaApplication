"use client";
import { useEffect, useState } from "react";
import "./membership.css";
import MembershipPageCOntent from "../components/pagecomponents/membershippagecomponents/membershippagecontent";
import { useHeroAnimation } from "../hooks/useHeroAnimation";

export default function Membership() {
  useHeroAnimation("membership-hero-section", "membership-hero-heading");

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
        className={`membership-hero-section ${isFixed ? "fixed" : "relative"}`}
      >
        <h2 className="membership-hero-heading">Membership</h2>
      </div>
      <div className="membership-content-continer">
        <div className="membership-content">
          <MembershipPageCOntent />
        </div>
      </div>
    </>
  );
}
