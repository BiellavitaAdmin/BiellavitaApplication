import { Modal } from "antd";
import Image from "next/image";
import { useState } from "react";

export default function PreviousEventsCards({ event }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div className="previous-events-card">
        <div className="previous-event-large-pic">
          <Image
            src={event.imagelink}
            alt={event.eventtitle}
            width={450}
            height={320}
            className="previous-event-large-image-settings"
          />
        </div>
        <h2 className="previous-card-heading space-left">{event.eventtitle}</h2>
        <div className="previous-event-description space-left">
          {event.shortdescription}
        </div>
        <button
          className="previous-event-details-button space-left"
          onClick={showModal}
        >
          Discover More
        </button>
      </div>

      {/* Modal for displaying event details */}
      <Modal
        title={event.eventtitle}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <div>
          <p>{event.details}</p>
        </div>
      </Modal>
    </>
  );
}
