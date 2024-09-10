// import ParaOne from "./partnershipsubcomponents/paraone";
// import ParaTwo from "./partnershipsubcomponents/paratwo";
// import DualPicContiner from "./partnershipsubcomponents/dulapiccontianer";
// import ParaThree from "./partnershipsubcomponents/parathree";
// import ParaFour from "./partnershipsubcomponents/parafour";
// import LargePic from "./partnershipsubcomponents/largepic";
// import ParaFive from "./partnershipsubcomponents/parafive";
// import ParaSix from "./partnershipsubcomponents/parasix";
// import ParaSeven from "./partnershipsubcomponents/paraseven";
// import ParaEight from "./partnershipsubcomponents/paraeight";

import ParaOne from "../partnershippagecomponents/partnershipsubcomponents/paraone";

export default function PartnershipContent() {
  return (
    <>
      <div className="partnership-content">
        <article className="section-content">
          <ParaOne />
          <ParaTwo />
          <DualPicContiner />
          <ParaThree />
          <ParaFour />
          <LargePic />
          <ParaFive />
          <ParaSix />
          <ParaSeven />
          <ParaEight />
        </article>
      </div>
    </>
  );
}
