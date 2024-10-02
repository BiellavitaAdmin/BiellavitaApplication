import dynamic from "next/dynamic";

// Dynamically import the subcomponents
const ProcessRowOne = dynamic(() => import("./subcomponents/processrowone"), {
  ssr: false, // Disable server-side rendering
});
const ProcessRowTwo = dynamic(() => import("./subcomponents/processrowtwo"), {
  ssr: false,
});

export default function ProcessSection() {
  return (
    <>
      <div className="process-container">
        <div className="process-main-heading-container">
          <h2 className="process-main-heading">Membership Process</h2>
        </div>
        <ProcessRowOne />
        <ProcessRowTwo />
      </div>
    </>
  );
}
