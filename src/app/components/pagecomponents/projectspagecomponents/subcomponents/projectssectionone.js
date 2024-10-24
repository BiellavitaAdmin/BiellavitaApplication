import { useEffect, useState } from "react";
import { Modal, Spin } from "antd";
import Image from "next/image";

export default function ProjectsSectionOne() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/projects");
        const data = await response.json();
        setTimeout(() => {
          setProjects(data);
          setLoading(false);
        }, 3000); // Show the loader for at least 3 seconds
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const showModal = (project) => {
    setSelectedProject(project);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      {/* <div className="projects-hero-section">
      </div> */}

      <div className="projects-content-container">
        {/* <h1 className="projects-first-heading">Our Projects</h1> */}
        {loading ? (
          <div className="projects-content">
            <Spin size="large" className="loading-spinner" />
          </div>
        ) : (
          <div className="projects-content">
            {projects.map((project, index) => (
              <div
                key={project._id}
                className={`project-section ${
                  index % 2 === 0 ? "even-project" : "odd-project"
                }`}
              >
                <div className="project-content">
                  <div className="left-section-project">
                    <h2 className="project-heading">{project.projecttitle}</h2>
                    <p className="project-description">
                      {project.shortdescription}
                    </p>
                    <button
                      className="project-button"
                      onClick={() => showModal(project)}
                    >
                      Discover More
                    </button>
                  </div>
                  <div className="right-section-project">
                    <Image
                      src={project.imagelink}
                      alt={project.projecttitle}
                      width={650}
                      height={435}
                      className="projects-large-image"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Modal
        title="Complete Description"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width="80%"
      >
        <h2 className="project-details-modal-title">
          {selectedProject?.projecttitle}
        </h2>
        <p className="projects-details-text">
          <div className="details-dual-image-container">
            <Image
              src={selectedProject?.detailsimageone}
              alt={selectedProject?.detailsimageone}
              width={650}
              height={435}
              className="details-projects-large-image"
            />
          </div>
          <strong>Project Description:</strong>{" "}
          {selectedProject?.shortdescription}
        </p>
        <p className="projects-details-text">
          <div className="details-dual-image-container">
            <Image
              src={selectedProject?.detailsimagetwo}
              alt={selectedProject?.detailsimagetwo}
              width={650}
              height={435}
              className="details-projects-large-image"
            />
          </div>
          <strong>Project Details:</strong>
          {selectedProject?.details}
        </p>
      </Modal>
    </>
  );
}
