import "./club.css";
import Content from "../components/pagecomponents/clubpagecomponenets/content";

export default function Club() {
  return (
    <>
      <div className="hero-section">
        <h2 className="clubpage-hero-heading">The Club</h2>
      </div>
      <div className="content-continer">
        <Content />
      </div>
    </>
  );
}
