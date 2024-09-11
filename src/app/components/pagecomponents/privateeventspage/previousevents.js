import PreviousEventsCards from "./subcomponents/previouseventscards";
export default function PreviousEvents() {
  return (
    <>
      <div className="previous-events-container">
        <h2 className="previous-events-heading">Previous Event &#8594;</h2>
        <div className="previous-events-cards-container">
          <PreviousEventsCards />
        </div>
      </div>
    </>
  );
}
