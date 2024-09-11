import LargePicContainer from "./subcomponents/largepiccontainer";
import UpcomingDetails from "./subcomponents/upcomingdetails";
export default function UpcomingEvent() {
  return (
    <>
      <div className="upcoming-container">
        <div className="upcoming-section">
          <div className="upcoming-section-heading-container">
            <h2 className="upcoming-heading">Upcoming Event &#8594;</h2>
          </div>
          <LargePicContainer />
          <UpcomingDetails />
        </div>
      </div>
    </>
  );
}
