import SecondProcess from "./secondprocess";
import FirstProcess from "./firstprocess";
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
