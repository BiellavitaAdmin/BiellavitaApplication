import dynamic from "next/dynamic"; // Import dynamic from Next.js

// Dynamically import the subcomponents
const SourceSection = dynamic(() => import("./sourcesection"), { ssr: false });
const FoundersHeadingSection = dynamic(
  () => import("./foundersheadingsection"),
  { ssr: false }
);
const BelquisPara = dynamic(() => import("./belquispara"), { ssr: false });
const AlbertosPara = dynamic(() => import("./albertospara"), { ssr: false });

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
