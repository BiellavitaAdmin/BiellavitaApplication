import React, { useEffect, useState } from "react";
import PreviousEventsCards from "./subcomponents/previouseventscards";

export default function PreviousEvents() {
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

        // Log parsed dates for debugging
        console.log(
          `Event: ${event.eventdate}, Parsed Event Date: ${eventDate}, Current Date: ${currentDate}`
        );

        // Check if eventDate is valid and in the past
        return (
          eventDate instanceof Date &&
          !isNaN(eventDate) &&
          eventDate < currentDate
        );
      });

      console.log("Filtered Events:", filteredEvents);
      setPreviousEvents(filteredEvents);
    };

    fetchEvents();
  }, []);

  return (
    <div className="previous-events-container">
      <h2 className="previous-events-heading">Previous Events &#8594;</h2>
      <div className="previous-events-cards-container">
        {previousEvents.map((event) => (
          <PreviousEventsCards key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
}
