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

export default function MembershipPageContent() {
  return (
    <>
      <article className="section-content">
        <p className="membership-page-content-text">
          Membership at BiellaVita is an invitation-only privilege, with two
          categories: Active and Non-Active members.
        </p>
        <MembershipCards />
        <ProcessSection />
        <BenefitsSection />
      </article>
    </>
  );
}
