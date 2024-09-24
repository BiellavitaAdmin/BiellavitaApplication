import SourceSectionParaOne from "./sourcesectionparaone";
import SourceSectionParaTwo from "./sourcesectionparatwo";
import SourceSectionParaThree from "./sourcesectionparathree";
import SourceSectionParaFour from "./sourcesectionparafour";
import SourceSectionParaFive from "./sourcesectionparafive";
import SourceSectionParaSix from "./sourcesectionparasix";
import SourceSectionParaSeven from "./sourcesectionparaseven";
import BiellaLargePic from "./biellalargepic";
export default function SourceSection() {
  return (
    <>
      <article className="section-content">
        <SourceSectionParaOne />
        <SourceSectionParaTwo />
        <BiellaLargePic />
        <SourceSectionParaThree />
        <SourceSectionParaFour />
        <SourceSectionParaFive />
        <SourceSectionParaSix />
        <SourceSectionParaSeven />
      </article>
    </>
  );
}
