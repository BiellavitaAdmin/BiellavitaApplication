import "./pagefooter.css";

import LeftSection from "../pagefootercomponents/leftsection";
import RightSection from "../pagefootercomponents/rightsection";
import BottomSection from "../pagefootercomponents/bottomsection";

export default function PageFooter() {
  return (
    <>
      <div className="pagefooter-container">
        <LeftSection />
        <RightSection />
      </div>
      <BottomSection />
    </>
  );
}
