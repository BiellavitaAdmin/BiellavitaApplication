import Image from "next/image";
import { useState, useEffect } from "react";
import { Modal, Button } from "antd";

export default function NewPreviousEventSection() {
  const [previousEvents, setPreviousEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch("/api/events");
      const data = await response.json();

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

      setPreviousEvents(filteredEvents);
    };

    fetchEvents();
  }, []);

  return (
    <div className="new-previous-event-section">
      <div className="new-previous-events-container">
        <div className="new-previous-events-label">
          <h3 className="new-previous-events-label-text">Previous Events</h3>
        </div>
        <div className="new-previous-events-card-container">
          {previousEvents.length > 0 ? (
            previousEvents.map((event) => (
              <div className="new-previous-events-card" key={event._id}>
                <div className="new-previous-events-banner-container">
                  <Image
                    src={event.imageUrl || "eventtwo.webp"} // Use event image URL or fallback image
                    alt={event.title || "previous events image"}
                    width={20}
                    height={20}
                    className="new-previous-large-image"
                  />
                </div>
                <div className="new-previous-events-card-title">
                  {event.title}
                </div>
                <div className="new-previous-events-card-shortdescription">
                  {event.shortDescription}
                </div>
                <button className="new-upcoming-event-details-button">
                  Discover More
                </button>
              </div>
            ))
          ) : (
            <p>No previous events found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
