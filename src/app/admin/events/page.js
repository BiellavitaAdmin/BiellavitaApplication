import "./events.css";
import EventsUpperSection from "./subcomponents/eventsuppersection";
import EventsTableSection from "./subcomponents/eventstablesection";
export default function Members() {
  return (
    <>
      <div className="section-content-container">
        <div className="dash-section-content">
          <EventsUpperSection />
          <EventsTableSection />
        </div>
      </div>
    </>
  );
}
