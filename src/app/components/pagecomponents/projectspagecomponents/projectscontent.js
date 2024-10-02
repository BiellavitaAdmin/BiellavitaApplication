import dynamic from "next/dynamic";

// Dynamically import the ProjectsSectionOne component
const ProjectsSectionOne = dynamic(
  () => import("./subcomponents/projectssectionone"),
  {
    ssr: false, // Disable server-side rendering if the component relies on client-side behavior
  }
);

export default function ProjectsContent() {
  return (
    <>
      <div className="projects-content">
        <ProjectsSectionOne />
      </div>
    </>
  );
}
