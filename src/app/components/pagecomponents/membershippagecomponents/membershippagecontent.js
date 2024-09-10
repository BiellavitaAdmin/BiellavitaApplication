import MembershipCards from "./membershipcards";
import ProcessSection from "./processsection";
import BenefitsSection from "./benefitssection";
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
