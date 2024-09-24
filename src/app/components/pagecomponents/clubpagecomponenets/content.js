import SourceSection from "./sourcesection";
import BelquisPara from "./belquispara";
import AlbertosPara from "./albertospara";
export default function Content() {
  return (
    <div className="content">
      <SourceSection />
      <h2 className="clubpage-heading">Founders</h2>
      <BelquisPara />
      <AlbertosPara />
    </div>
  );
}
