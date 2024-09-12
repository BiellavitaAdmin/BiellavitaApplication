import "./partners.css";
import ProjectsTableSection from "./subcomponents/projectstablesection";
import ProjectsUpperSection from "./subcomponents/projectsuppersection";
export default function Members() {
  return (
    <>
      <div className="section-content-container">
        <div className="dash-section-content">
          <ProjectsUpperSection />
          <ProjectsTableSection />
        </div>
      </div>
    </>
  );
}
