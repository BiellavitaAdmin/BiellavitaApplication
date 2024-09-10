import ParaOne from "./partnershipsubcomponents/paraone";
import ParaTwo from "./partnershipsubcomponents/paratwo";
import DualPicContiner from "./partnershipsubcomponents/dulapiccontianer";
import ParaThree from "./partnershipsubcomponents/parathree";
import ParaFour from "./partnershipsubcomponents/parafour";
import LargePic from "./partnershipsubcomponents/largepic";
import ParaFive from "./partnershipsubcomponents/parafive";
import ParaSix from "./partnershipsubcomponents/parasix";
import ParaSeven from "./partnershipsubcomponents/paraseven";
import ParaEight from "./partnershipsubcomponents/paraeight";

export default function PartnershipContent() {
  return (
    <>
      <div className="partnership-content">
        <article className="section-content">
          <ParaOne />
          <p className="partnership-page-content-text">
            By embracing the core values that define BiellaVita—such as
            integrity, innovative, education and truthful—these collaborations
            will not only enhance the brand's mission but also create synergies
            that benefit all parties involved.
          </p>
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
