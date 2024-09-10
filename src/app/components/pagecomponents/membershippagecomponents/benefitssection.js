import CardsCollection from "./subcomponents/cardscollection";
export default function BenefitsSection() {
  return (
    <>
      <div className="benefits-container">
        <div className="benefits-heading-continer">
          <h2 className="benefits-heading">Benefits</h2>
        </div>
        <CardsCollection />
      </div>
    </>
  );
}
