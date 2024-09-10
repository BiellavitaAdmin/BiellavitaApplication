import ListNonActiveBenefits from "./listnonactivebenefits";
export default function NonActiveMembershipCard() {
  return (
    <>
      <div className="benefits-card-container">
        <div className="benefits-card">
          <h2 className="benefits-card-heading">Non-Active Membership</h2>
          <p className="benefits-card-description">
            Choosing to be a non-active member will represent expressing the
            CHOICE to adhere to a specific lifestyle that is based around the
            core values of BiellaVita, it’s a statement.
          </p>
          <ListNonActiveBenefits />
        </div>
      </div>
    </>
  );
}
