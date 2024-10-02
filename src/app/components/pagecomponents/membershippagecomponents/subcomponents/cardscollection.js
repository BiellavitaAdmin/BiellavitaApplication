import dynamic from "next/dynamic";

// Dynamically import the ActiveMembershipCard and NonActiveMembershipCard components
const ActiveMembershipCard = dynamic(() => import("./activemembershipcard"), {
  ssr: false, // Disable server-side rendering
});
const NonActiveMembershipCard = dynamic(
  () => import("./nonactivemembershipcard"),
  {
    ssr: false,
  }
);

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
