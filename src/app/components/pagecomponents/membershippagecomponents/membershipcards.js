import dynamic from "next/dynamic";

// Dynamically import the subcomponents
const CardOne = dynamic(() => import("./subcomponents/cardone"), {
  ssr: false, // Disable server-side rendering
});
const CardTwo = dynamic(() => import("./subcomponents/cardtwo"), {
  ssr: false,
});

export default function MembershipCards() {
  return (
    <div className="card-container">
      <CardOne />
      <CardTwo />
    </div>
  );
}
