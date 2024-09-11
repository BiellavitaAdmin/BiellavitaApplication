"use client";

import "./projects.css";
import ProjectsContent from "../components/pagecomponents/projectspagecomponents/projectscontent";
import { useEffect } from "react";
export default function Projects() {
  useEffect(() => {
    const heroSection = document.querySelector(".projects-hero-section");
    const heroHeading = document.querySelector(".projects-hero-heading");

    // Function to handle animations
    const handleAnimation = () => {
      if (heroSection && heroHeading) {
        heroSection.classList.add("show");
        heroHeading.classList.add("show");
      }
    };

    // Trigger animations on load
    handleAnimation();

    // Optionally add scroll event to trigger animation when scrolled into view
    window.addEventListener("scroll", handleAnimation);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleAnimation);
    };
  }, []);
  return (
    <>
      <div className="projects-hero-section">
        <h2 className="projects-hero-heading">Projects</h2>
      </div>
      <div className="projects-content-continer">
        <ProjectsContent />
      </div>
    </>
  );
}
