// src/components/UpcomingEvent.js

import { useEffect, useState } from "react";
import LargePicContainer from "./subcomponents/largepiccontainer";
import UpcomingDetails from "./subcomponents/upcomingdetails";

export default function UpcomingEvent() {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [noEventsFound, setNoEventsFound] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events");
        const data = await response.json();
        const today = new Date();

        // Filter for upcoming events
        const filteredEvents = data.filter((event) => {
          const eventDate = new Date(
            event.eventdate.split("/").reverse().join("-")
          );
          return eventDate >= today;
        });

        if (filteredEvents.length > 0) {
          setUpcomingEvents(filteredEvents);
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
    <div className="upcoming-container">
      <div className="upcoming-section">
        <div className="upcoming-section-heading-container">
          <h2 className="upcoming-heading">Upcoming Event &#8594;</h2>
        </div>

        {noEventsFound ? (
          <div>No events found</div>
        ) : (
          upcomingEvents.map((event) => (
            <div key={event._id}>
              <LargePicContainer imageUrl={event.imagelink} />
              <UpcomingDetails
                title={event.eventtitle}
                description={event.shortdescription}
                details={event.details} // Pass details prop here
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
