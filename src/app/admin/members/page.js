import "./members.css";
import MembersUpperSection from "./subcomponents/membersuppersection";
import MembersTableSection from "./subcomponents/memberstablesection";
export default function Members() {
  return (
    <>
      <div className="section-content-container">
        <div className="dash-section-content">
          <MembersUpperSection />
          <MembersTableSection />
        </div>
      </div>
    </>
  );
}
