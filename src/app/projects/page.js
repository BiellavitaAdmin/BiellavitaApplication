import "./projects.css";
import ProjectsContent from "../components/pagecomponents/projectspagecomponents/projectscontent";
export default function Projects() {
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
