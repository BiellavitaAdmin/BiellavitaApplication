import Image from "next/image";
import { useEffect, useState } from "react";
import { Modal, Button } from "antd";

export default function NewUpcomingEventsSection() {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [noEventsFound, setNoEventsFound] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null); // To hold selected event details

  const showModal = (event) => {
    setSelectedEvent(event); // Set the selected event
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events");
        const data = await response.json();
        const today = new Date();

        // Filter for upcoming events
        const filteredEvents = data.filter((event) => {
          let eventDate;

          // Handle DD-MM-YYYY format
          if (event.eventdate.includes("-")) {
            const [day, month, year] = event.eventdate.split("-").map(Number);
            eventDate = new Date(year, month - 1, day); // Month is 0-indexed
          }

          // Log parsed event date for debugging
          console.log(
            `Event: ${event.eventdate}, Parsed Event Date: ${eventDate}, Current Date: ${today}`
          );

          return eventDate >= today; // Check if eventDate is today or in the future
        });

        if (filteredEvents.length > 0) {
          setUpcomingEvents(filteredEvents);
          setNoEventsFound(false);
        } else {
          setNoEventsFound(true);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="new-upcoming-events-container">
      <div className="new-upcoming-events-label">
        <h3 className="new-upcoming-events-label-text">Upcoming Events</h3>
      </div>

      {noEventsFound ? (
        <div>No upcoming events found</div>
      ) : (
        upcomingEvents.map((event) => (
          <div
            key={event._id}
            className="new-upcoming-event-description-container"
          >
            <div className="new-upcoming-events-image-container">
              <Image
                src={event.imagelink} // Use the event's image link
                alt={event.eventtitle} // Use the event title for the alt text
                width={20}
                height={20}
                className="new-upcoming-large-image"
              />
            </div>
            <div className="new-upcoming-events-heading">
              <h2 className="new-upcoming-events-larger-heading">
                {event.eventtitle}
              </h2>
              <h2 className="new-upcoming-events-larger-heading">
                ({event.eventdate})
              </h2>
            </div>
            <div className="new-upcoming-events-shortdescription">
              {event.shortdescription}
            </div>
            <button
              className="new-upcoming-event-details-button"
              onClick={() => showModal(event)} // Pass the event to the modal
            >
              Discover More
            </button>
          </div>
        ))
      )}

      {/* Ant Design Modal */}
      <Modal
        title={selectedEvent ? selectedEvent.eventtitle : "Event Details"} // Display selected event title
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width="90%"
        centered
        footer={null}
      >
        {selectedEvent && (
          <>
            <h2>{selectedEvent.eventtitle}</h2>
            <p>{selectedEvent.details}</p> {/* Display event details */}
          </>
        )}
        <div style={{ textAlign: "right" }}>
          <Button onClick={handleCancel} type="primary">
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
}
