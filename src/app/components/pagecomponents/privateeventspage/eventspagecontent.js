import "./eventspagecontent.css";

import NewUpcomingEventsSection from "./newsubcomponents/newupcomingeventssection";
import NewPreviousEventSection from "./newsubcomponents/newpreviouseventsection";
export default function EventsPageContent() {
  return (
    <>
      <div className="new-events-content-container">
        <NewUpcomingEventsSection />
        <NewPreviousEventSection />
      </div>
    </>
  );
}
