import ProjectsSectionOne from "./subcomponents/projectssectionone";
import ProjectsSectionTwo from "./subcomponents/projectssectiontwo";
import ProjectsSectionThree from "./subcomponents/projectssectionthree";
export default function ProjectsContent() {
  return (
    <>
      <div className="projects-content">
        <ProjectsSectionOne />
        <ProjectsSectionTwo />
        <ProjectsSectionThree />
      </div>
    </>
  );
}
