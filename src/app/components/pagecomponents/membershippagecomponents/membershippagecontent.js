import dynamic from "next/dynamic";

// Dynamically import the components
const MembershipCards = dynamic(() => import("./membershipcards"), {
  ssr: false, // Disable server-side rendering if these are client-side only
});
const ProcessSection = dynamic(() => import("./processsection"), {
  ssr: false,
});
const BenefitsSection = dynamic(() => import("./benefitssection"), {
  ssr: false,
});
const MembershipTopPara = dynamic(() => import("./memebrshiptoppara"), {
  ssr: false,
});

export default function MembershipPageContent() {
  return (
    <>
      <article className="section-content">
        <MembershipTopPara /> {/* Use the new dynamic component */}
        <MembershipCards />
        <ProcessSection />
        <BenefitsSection />
      </article>
    </>
  );
}
