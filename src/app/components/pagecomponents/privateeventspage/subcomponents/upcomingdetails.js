import { useState } from "react";
import { Modal, Button } from "antd";
// import "antd/dist/antd.css"; // Ensure Ant Design styles are imported

export default function UpcomingDetails({ title, description, details }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false); // Close the modal when called
  };

  return (
    <div className="upcoming-event-details-container">
      <div className="upcoming-event-large-heading-container">
        <h2 className="upcoming-event-large-heading">{title}</h2>
      </div>
      <div className="upcoming-event-description">{description}</div>
      <div className="upcoming-event-section-button-container">
        <button className="upcoming-event-details-button" onClick={showModal}>
          Discover More
        </button>
      </div>
      <Modal
        title={title}
        visible={isModalVisible}
        onCancel={handleClose} // Close modal on backdrop click or pressing 'ESC'
        footer={null} // Disable the default footer to customize it
        width="90%" // Set modal width to 90%
        style={{ top: "50%", transform: "translateY(-50%)" }} // Center the modal vertically
      >
        <p>{details}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "20px",
          }}
        >
          <Button onClick={handleClose} type="primary">
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
}
