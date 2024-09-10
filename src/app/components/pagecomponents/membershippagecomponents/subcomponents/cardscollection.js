import ActiveMembershipCard from "./activemembershipcard";
import NonActiveMembershipCard from "./nonactivemembershipcard";

export default function CardsCollection() {
  return (
    <>
      <div className="the-cards-collection">
        <ActiveMembershipCard />
        <NonActiveMembershipCard />
      </div>
    </>
  );
}
