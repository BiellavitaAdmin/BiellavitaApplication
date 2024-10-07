import Image from "next/image";
import { useState, useEffect } from "react";
import { Modal, Button } from "antd";

export default function NewPreviousEventSection() {
  const [previousEvents, setPreviousEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null); // To hold the event data for the modal
  const [isModalVisible, setIsModalVisible] = useState(false); // Modal visibility state

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch("/api/events");
      const data = await response.json();
      console.log(data);

      // Get the current date
      const currentDate = new Date();

      // Filter events to only include those with past dates
      const filteredEvents = data.filter((event) => {
        let eventDate;

        // Normalize event date
        if (event.eventdate.includes("/")) {
          // Handle MM/DD/YYYY format
          const [month, day, year] = event.eventdate.split("/").map(Number);
          eventDate = new Date(year, month - 1, day); // Month is 0-indexed
        } else if (event.eventdate.includes("-")) {
          // Handle DD-MM-YYYY format
          const [day, month, year] = event.eventdate.split("-").map(Number);
          eventDate = new Date(year, month - 1, day); // Month is 0-indexed
        }

        // Check if eventDate is valid and in the past
        return (
          eventDate instanceof Date &&
          !isNaN(eventDate) &&
          eventDate < currentDate
        );
      });
      console.log("filtered data....", filteredEvents);
      setPreviousEvents(filteredEvents);
    };

    fetchEvents();
  }, []);

  // Function to handle button click and open the modal
  const handleDiscoverMoreClick = (event) => {
    setSelectedEvent(event); // Set the selected event data for the modal
    setIsModalVisible(true); // Show the modal
  };

  // Function to close the modal
  const handleModalClose = () => {
    setIsModalVisible(false); // Hide the modal
    setSelectedEvent(null); // Clear the selected event data
  };

  return (
    <div className="new-previous-event-section">
      <div className="new-previous-events-container">
        <div className="new-previous-events-label">
          <h3 className="new-previous-events-label-text">Previous Events</h3>
        </div>
        <div className="new-previous-events-card-container">
          {previousEvents.map((event) => {
            return (
              <div className="new-previous-events-card" key={event._id}>
                <div className="new-previous-events-banner-container">
                  <Image
                    src={event.imagelink || "/eventtwo.webp"}
                    alt={event.eventtitle || "previous events image"}
                    width={200}
                    height={200}
                    className="new-previous-large-image"
                  />
                </div>
                <div className="new-previous-events-card-title">
                  {event.eventtitle}
                </div>
                <div className="new-previous-events-card-shortdescription">
                  {event.shortdescription}
                </div>
                <button
                  className="new-previous-event-details-button"
                  onClick={() => handleDiscoverMoreClick(event)} // Handle button click
                >
                  Discover More
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Ant Design Modal to display event details */}
      <Modal
        title={selectedEvent?.eventtitle} // Show event title
        open={isModalVisible} // Control modal visibility
        onCancel={handleModalClose} // Handle modal close
        footer={null} // No footer buttons
        centered // Center the modal
        width="90%" // Set modal width to 90%
      >
        <p>{selectedEvent?.details}</p> {/* Display event details */}
        {/* Close Button */}
        <div style={{ textAlign: "right", marginTop: "20px" }}>
          <Button type="primary" onClick={handleModalClose}>
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
}
