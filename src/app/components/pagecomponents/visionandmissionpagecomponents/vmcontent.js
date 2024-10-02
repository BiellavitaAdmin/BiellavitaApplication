import dynamic from "next/dynamic";

// Dynamically import the components
const Vissionpart = dynamic(() => import("./vissionpart"), {
  ssr: false, // Optional: Disable server-side rendering if not required
});
const Missionpart = dynamic(() => import("./missionpart"), {
  ssr: false, // Optional: Disable server-side rendering if not required
});

export default function Vmcontent() {
  return (
    <div className="visionandmission-content-continer">
      <div className="visionandmission-content">
        <article className="section-content">
          <Vissionpart />
          <Missionpart />
        </article>
      </div>
    </div>
  );
}
