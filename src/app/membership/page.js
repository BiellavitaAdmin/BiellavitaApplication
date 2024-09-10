import "./membership.css";
import MembershipPageCOntent from "../components/pagecomponents/membershippagecomponents/membershippagecontent";

export default function Membership() {
  return (
    <>
      <div className="membership-hero-section">
        <h2 className="membership-hero-heading">Membership</h2>
      </div>
      <div className="membership-content-continer">
        <div className="membership-content">
          <MembershipPageCOntent />
        </div>
      </div>
    </>
  );
}
