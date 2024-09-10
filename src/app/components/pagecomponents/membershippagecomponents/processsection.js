import ProcessRowOne from "./subcomponents/processrowone";
import ProcessRowTwo from "./subcomponents/processrowtwo";
export default function ProcessSection() {
  return (
    <>
      <div className="process-container">
        <div className="process-main-heading-container">
          <h2 className="process-main-heading">Membership Process</h2>
        </div>
        <ProcessRowOne />
        <ProcessRowTwo />
      </div>
    </>
  );
}
