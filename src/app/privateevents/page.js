import "./privateevents.css";
import UpcomingEvent from "../components/pagecomponents/privateeventspage/upcomingevent";
import PreviousEvents from "../components/pagecomponents/privateeventspage/previousevents";

export default function PrivateEvents() {
  return (
    <>
      <div className="privateevents-hero-section">
        <h2 className="privateevents-hero-heading">Private Events</h2>
      </div>
      <div className="privateevents-content-continer">
        <div className="privateevents-content">
          <UpcomingEvent />
          <PreviousEvents />
        </div>
      </div>
    </>
  );
}
