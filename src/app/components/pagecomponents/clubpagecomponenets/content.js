import SourceSection from "./sourcesection";
import FoundersHeadingSection from "./foundersheadingsection";
import BelquisPara from "./belquispara";
import AlbertosPara from "./albertospara";
export default function Content() {
  return (
    <div className="content">
      <SourceSection />
      <FoundersHeadingSection />
      <BelquisPara />
      <AlbertosPara />
    </div>
  );
}
