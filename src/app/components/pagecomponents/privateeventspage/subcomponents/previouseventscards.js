import Image from "next/image";

export default function PreviousEventsCards({ event }) {
  return (
    <div className="previous-events-card">
      <div className="previous-event-large-pic">
        <Image
          src={event.imagelink}
          alt={event.eventtitle}
          width={450}
          height={320}
        />
      </div>
      <h2 className="previous-card-heading">{event.eventtitle}</h2>
      <div className="previous-event-description">{event.shortdescription}</div>
      <button className="previous-event-details-button">Discover More</button>
    </div>
  );
}
