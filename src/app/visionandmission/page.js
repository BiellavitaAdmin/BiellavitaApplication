"use client";

import "./visionandmission.css";
import Vmcontent from "../components/pagecomponents/visionandmissionpagecomponents/vmcontent";
import { useHeroAnimation } from "../hooks/useHeroAnimation";
export default function VisionAndMission() {
  useHeroAnimation(
    "visionandmission-hero-section",
    "missionvision-hero-heading"
  );
  return (
    <>
      <div className="visionandmission-hero-section">
        <h2 className="missionvision-hero-heading">Vision & Mission</h2>
      </div>
      <Vmcontent />
    </>
  );
}
