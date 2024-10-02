import dynamic from "next/dynamic";

// Dynamically import the subcomponents
const ThirdProcess = dynamic(() => import("./thirdprocess"), {
  ssr: false, // Disable server-side rendering
});
const FourthProcess = dynamic(() => import("./fourthprocess"), {
  ssr: false,
});

export default function ProcessRowTwo() {
  return (
    <div className="process-row">
      <ThirdProcess />
      <FourthProcess />
    </div>
  );
}
