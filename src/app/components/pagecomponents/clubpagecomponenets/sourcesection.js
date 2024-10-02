import dynamic from "next/dynamic";

// Dynamically import each component
const SourceSectionParaOne = dynamic(() => import("./sourcesectionparaone"), {
  ssr: false,
});
const SourceSectionParaTwo = dynamic(() => import("./sourcesectionparatwo"), {
  ssr: false,
});
const SourceSectionParaThree = dynamic(
  () => import("./sourcesectionparathree"),
  {
    ssr: false,
  }
);
const SourceSectionParaFour = dynamic(() => import("./sourcesectionparafour"), {
  ssr: false,
});
const SourceSectionParaFive = dynamic(() => import("./sourcesectionparafive"), {
  ssr: false,
});
const SourceSectionParaSix = dynamic(() => import("./sourcesectionparasix"), {
  ssr: false,
});
const SourceSectionParaSeven = dynamic(
  () => import("./sourcesectionparaseven"),
  {
    ssr: false,
  }
);
const BiellaLargePic = dynamic(() => import("./biellalargepic"), {
  ssr: false,
});

export default function SourceSection() {
  return (
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
  );
}
