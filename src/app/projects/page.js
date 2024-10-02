"use client";

import "./projects.css";
import dynamic from "next/dynamic";

// Dynamically import the ProjectsContent component
const ProjectsContent = dynamic(
  () =>
    import(
      "../components/pagecomponents/projectspagecomponents/projectscontent"
    ),
  {
    ssr: false, // Disable server-side rendering if the component relies on client-side behavior
  }
);

import { useHeroAnimation } from "../hooks/useHeroAnimation";

export default function Projects() {
  useHeroAnimation("projects-hero-section", "projects-hero-heading");
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
