import dynamic from "next/dynamic";

// Dynamically import the ListActiveBenefits component
const ListActiveBenefits = dynamic(() => import("./listactivebenefits"), {
  ssr: false, // Disable server-side rendering
});

export default function ActiveMembershipCard() {
  return (
    <>
      <div className="benefits-card-container">
        <div className="benefits-card">
          <h2 className="benefits-card-heading">Active Membership</h2>
          <p className="benefits-card-description">
            Choosing to be an active member will mean wanting to play a crucial
            role in the development and support of BiellaVita’s vision and will
            come with some additional benefits.
          </p>
          <ListActiveBenefits />
        </div>
      </div>
    </>
  );
}
