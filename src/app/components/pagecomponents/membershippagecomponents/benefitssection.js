import dynamic from "next/dynamic";

// Dynamically import the CardsCollection component
const CardsCollection = dynamic(
  () => import("./subcomponents/cardscollection"),
  {
    ssr: false, // Disable server-side rendering
  }
);

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
