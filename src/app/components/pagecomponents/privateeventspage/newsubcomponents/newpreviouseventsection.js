import Image from "next/image";
import { useState, useEffect } from "react";
import { Modal, Button } from "antd";

export default function NewPreviousEventSection() {
  const [previousEvents, setPreviousEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null); // To hold the event data for the modal
  const [isModalVisible, setIsModalVisible] = useState(false); // Modal visibility state

  // Function to format the date in "01/Month Full Name/YYYY" format
  const formatDate = (dateString) => {
    let eventDate;
    if (dateString.includes("/")) {
      const [month, day, year] = dateString.split("/").map(Number);
      eventDate = new Date(year, month - 1, day);
    } else if (dateString.includes("-")) {
      const [day, month, year] = dateString.split("-").map(Number);
      eventDate = new Date(year, month - 1, day);
    }

    const options = { day: "2-digit", month: "long", year: "numeric" };
    return eventDate.toLocaleDateString("en-US", options); // Format the date as "01/Month Full Name/YYYY"
  };

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch("/api/events");
      const data = await response.json();

      const currentDate = new Date();

      // Filter events to only include those with past dates
      const filteredEvents = data.filter((event) => {
        let eventDate;

        if (event.eventdate.includes("/")) {
          const [month, day, year] = event.eventdate.split("/").map(Number);
          eventDate = new Date(year, month - 1, day);
        } else if (event.eventdate.includes("-")) {
          const [day, month, year] = event.eventdate.split("-").map(Number);
          eventDate = new Date(year, month - 1, day);
        }

        return (
          eventDate instanceof Date &&
          !isNaN(eventDate) &&
          eventDate < currentDate
        );
      });

      // Sort events by date, most recent first
      const sortedEvents = filteredEvents.sort((a, b) => {
        const aDate = new Date(a.eventdate.split("-").reverse().join("-"));
        const bDate = new Date(b.eventdate.split("-").reverse().join("-"));
        return bDate - aDate; // Sort descending by date
      });

      // Get the last three previous events
      const lastThreeEvents = sortedEvents.slice(0, 3);
      setPreviousEvents(lastThreeEvents);
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
                <div className="new-previous-events-card-date">
                  {formatDate(event.eventdate)}
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
        title={"Previous Event Details"} // Show event title
        open={isModalVisible} // Control modal visibility
        onCancel={handleModalClose} // Handle modal close
        footer={null} // No footer buttons
        centered // Center the modal
        width="90%" // Set modal width to 90%
      >
        {selectedEvent && (
          <>
            <div className="details-dual-image-container">
              <Image
                src={selectedEvent.imagelink}
                alt={selectedEvent.imagelink}
                width={650}
                height={435}
                className="details-projects-large-image"
              />
            </div>
            <h2 className="project-details-modal-title">
              {selectedEvent.eventtitle}
            </h2>
            <p className="projects-details-text">
              <strong>Dated: </strong> {formatDate(selectedEvent.eventdate)}
            </p>
            <p className="projects-details-text">
              <strong>Event Details: </strong> {selectedEvent.details}
            </p>
          </>
        )}
        <div style={{ textAlign: "right", marginTop: "20px" }}>
          <Button type="primary" onClick={handleModalClose}>
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
}
