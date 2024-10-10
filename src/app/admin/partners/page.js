import "./partners.css";
import PartnersUpperSection from "./subcomponents/partnersuppersection";
import PartnersTableSection from "./subcomponents/partnerststablesection";
export default function Members() {
  return (
    <>
      <div className="section-content-container">
        <div className="dash-section-content">
          <PartnersUpperSection />
          <PartnersTableSection />
        </div>
      </div>
    </>
  );
}
