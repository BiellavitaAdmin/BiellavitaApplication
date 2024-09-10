import Vissionpart from "./vissionpart";
import Missionpart from "./missionpart";

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
