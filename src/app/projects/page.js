"use client";

import "./projects.css";
import ProjectsContent from "../components/pagecomponents/projectspagecomponents/projectscontent";
import { useHeroAnimation } from "../hooks/useHeroAnimation";
export default function Projects() {
  useHeroAnimation();
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
