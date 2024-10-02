import dynamic from "next/dynamic";

// Dynamically import the subcomponents
const ParaOne = dynamic(() => import("./partnershipsubcomponents/paraone"), {
  ssr: false,
});
const DualPicContainer = dynamic(
  () => import("./partnershipsubcomponents/dulapiccontianer"),
  {
    ssr: false,
  }
);
const ParaThree = dynamic(
  () => import("./partnershipsubcomponents/parathree"),
  {
    ssr: false,
  }
);
const ParaFour = dynamic(() => import("./partnershipsubcomponents/parafour"), {
  ssr: false,
});
const LargePic = dynamic(() => import("./partnershipsubcomponents/largepic"), {
  ssr: false,
});
const ParaFive = dynamic(() => import("./partnershipsubcomponents/parafive"), {
  ssr: false,
});
const ParaSix = dynamic(() => import("./partnershipsubcomponents/parasix"), {
  ssr: false,
});
const ParaSeven = dynamic(
  () => import("./partnershipsubcomponents/paraseven"),
  {
    ssr: false,
  }
);
const ParaEight = dynamic(
  () => import("./partnershipsubcomponents/paraeight"),
  {
    ssr: false,
  }
);

export default function PartnershipContent() {
  return (
    <>
      <div className="partnership-content">
        <article className="section-content">
          <ParaOne />
          <p className="partnership-page-content-text">
            By embracing the core values that define BiellaVita—such as
            integrity, innovation, education, and truthfulness—these
            collaborations will not only enhance the brand's mission but also
            create synergies that benefit all parties involved.
          </p>
          <DualPicContainer />
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
