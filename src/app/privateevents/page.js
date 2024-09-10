import "./privateevents.css";
import Image from "next/image";
export default function PrivateEvents() {
  return (
    <>
      <div className="privateevents-hero-section">
        <h2 className="privateevents-hero-heading">Private Events</h2>
      </div>
      <div className="privateevents-content-continer">
        <div className="privateevents-content">
          <div className="upcoming-container">
            <div className="upcoming-section">
              <div className="upcoming-section-heading-container">
                <h2 className="upcoming-heading">Upcoming Event &#8594;</h2>
              </div>
              <div className="large-pic-container">
                <Image
                  src="/partnerhip_two.png"
                  alt="My Awesome Image"
                  width={1550}
                  height={785}
                />
              </div>
              <div className="upcoming-event-details-container">
                <div className="upcoming-event-large-heading-container">
                  <h2 className="upcoming-event-large-heading">
                    Upcoming Private Event
                  </h2>
                </div>
                <div className="upcoming-event-description">
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries
                </div>
                <div className="upcoming-event-section-button-container">
                  <button className="upcoming-event-details-button">
                    DiscoverMore
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="previous-events-container">
            <h2 className="previous-events-heading">Previous Event &#8594;</h2>
            <div className="previous-events-cards-container">
              <div className="previous-events-card">
                <div className="previous-event-large-pic">
                  <Image
                    src="/partnerhip_two.png"
                    alt="My Awesome Image"
                    width={450}
                    height={320}
                  />
                </div>
                <h2 className="previous-card-heading">Previous Event</h2>
                <div className="previous-event-description">
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries
                </div>
                <button className="previous-event-details-button">
                  Discover More
                </button>
              </div>
              <div className="previous-events-card">
                <div className="previous-event-large-pic">
                  <Image
                    src="/partnerhip_two.png"
                    alt="My Awesome Image"
                    width={450}
                    height={320}
                  />
                </div>
                <h2 className="previous-card-heading">Previous Event</h2>
                <div className="previous-event-description">
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries
                </div>
                <button className="previous-event-details-button">
                  Discover More
                </button>
              </div>

              <div className="previous-events-card">
                <div className="previous-event-large-pic">
                  <Image
                    src="/partnerhip_two.png"
                    alt="My Awesome Image"
                    width={450}
                    height={320}
                  />
                </div>
                <h2 className="previous-card-heading">Previous Event</h2>
                <div className="previous-event-description">
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries
                </div>
                <button className="previous-event-details-button">
                  Discover More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
