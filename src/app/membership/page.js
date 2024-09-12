"use client";
import "./membership.css";
import MembershipPageCOntent from "../components/pagecomponents/membershippagecomponents/membershippagecontent";
import { useHeroAnimation } from "../hooks/useHeroAnimation";
export default function Membership() {
  useHeroAnimation("membership-hero-section", "membership-hero-heading");
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
