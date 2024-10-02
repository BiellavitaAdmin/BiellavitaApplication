import dynamic from "next/dynamic";

// Dynamically import the subcomponents
const FirstProcess = dynamic(() => import("./firstprocess"), {
  ssr: false, // Disable server-side rendering
});
const SecondProcess = dynamic(() => import("./secondprocess"), {
  ssr: false,
});

export default function ProcessRowOne() {
  return (
    <>
      <div className="process-row">
        <FirstProcess />
        <SecondProcess />
      </div>
    </>
  );
}
