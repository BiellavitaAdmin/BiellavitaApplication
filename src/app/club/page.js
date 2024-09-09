import "./club.css";
import ParagraphOne from "../components/pagecomponents/clubpagecomponenets/paragraphon";
import ParagraphTwo from "../components/pagecomponents/clubpagecomponenets/paragraphtwo";
import ParagraphSix from "../components/pagecomponents/clubpagecomponenets/paragraphSix";
import ParagraphSeven from "../components/pagecomponents/clubpagecomponenets/paragraphSeven";
import ParagraphNine from "../components/pagecomponents/clubpagecomponenets/paragraphNine";
import ParagraphTen from "../components/pagecomponents/clubpagecomponenets/paragraphTen";
import ParagraphEleven from "../components/pagecomponents/clubpagecomponenets/paragraphEleven";
import ParagraphTwelve from "../components/pagecomponents/clubpagecomponenets/paragraphTwelve";

export default function Club() {
  return (
    <>
      <div className="hero-section">
        <h2 className="clubpage-hero-heading">The Club</h2>
      </div>
      <div className="content-continer">
        <div className="content">
          <article className="section-content">
            <ParagraphOne />
            <ParagraphTwo />
            <h2 className="clubpage-heading">The source of the idea</h2>
            <p className="page-content-text">
              … is the inspirational city of Biella.
            </p>
            <p className="page-content-text">
              Nestled between Milan and Turin, this small city has become a
              symbol of excellence, exclusivity, and timeless values.
            </p>
            <p className="page-content-text">
              Named the “Capital of Wool” its picturesque valleys are adorned
              with renowned woolen mills.
            </p>
            <ParagraphSix />
            <ParagraphSeven />
            <h2 className="clubpage-heading">Founders</h2>

            <p className="page-content-text">
              Alberto and Belqis shared a passion for integrity and quality that
              led them to establish BiellaVita.
            </p>
          </article>

          <article className="Belquis-paragraph">
            <h2 className="Belquis-paragraph-heading">Belqis’s journey </h2>
            <ParagraphNine />
            <ParagraphTen />
          </article>

          <article className="Alberto-paragraph">
            <h2 className="Alberto-paragraph-heading">Alberto’s path</h2>
            <ParagraphEleven />
            <ParagraphTwelve />
          </article>
        </div>
      </div>
    </>
  );
}
