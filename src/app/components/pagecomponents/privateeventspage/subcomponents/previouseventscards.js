import Image from "next/image";
export default function PreviousEventsCards() {
  return (
    <>
      <div className="previous-events-card">
        <div className="previous-event-large-pic">
          <Image
            src="/partnerhip_two.webp"
            alt="My Awesome Image"
            width={450}
            height={320}
          />
        </div>
        <h2 className="previous-card-heading">Previous Event</h2>
        <div className="previous-event-description">
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries
        </div>
        <button className="previous-event-details-button">Discover More</button>
      </div>
      <div className="previous-events-card">
        <div className="previous-event-large-pic">
          <Image
            src="/partnerhip_two.webp"
            alt="My Awesome Image"
            width={450}
            height={320}
          />
        </div>
        <h2 className="previous-card-heading">Previous Event</h2>
        <div className="previous-event-description">
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries
        </div>
        <button className="previous-event-details-button">Discover More</button>
      </div>

      <div className="previous-events-card">
        <div className="previous-event-large-pic">
          <Image
            src="/partnerhip_two.webp"
            alt="My Awesome Image"
            width={450}
            height={320}
          />
        </div>
        <h2 className="previous-card-heading">Previous Event</h2>
        <div className="previous-event-description">
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries
        </div>
        <button className="previous-event-details-button">Discover More</button>
      </div>
    </>
  );
}
