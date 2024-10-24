"use client";
import { useEffect, useState } from "react";
import "./visionandmission.css";
import Vmcontent from "../components/pagecomponents/visionandmissionpagecomponents/vmcontent";
import { useHeroAnimation } from "../hooks/useHeroAnimation";

export default function VisionAndMission() {
  useHeroAnimation(
    "visionandmission-hero-section",
    "missionvision-hero-heading"
  );

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
        className={`visionandmission-hero-section ${
          isFixed ? "fixed" : "relative"
        }`}
      >
        <h2 className="missionvision-hero-heading">Vision & Mission</h2>
      </div>
      <Vmcontent />
    </>
  );
}
