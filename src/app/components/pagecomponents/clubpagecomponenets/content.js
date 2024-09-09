import ParagraphOne from "./paragraphon";
import ParagraphTwo from "./paragraphtwo";
import ParagraphSix from "./paragraphSix";
import ParagraphSeven from "./paragraphSeven";
import ParagraphNine from "./paragraphNine";
import ParagraphTen from "./paragraphTen";
import ParagraphEleven from "./paragraphEleven";
import ParagraphTwelve from "./paragraphTwelve";

export default function Content() {
  return (
    <div className="content">
      <article className="section-content">
        <ParagraphOne />
        <ParagraphTwo />
        <h2 className="clubpage-heading">The source of the idea</h2>
        <p className="page-content-text">
          … is the inspirational city of Biella.
        </p>
        <p className="page-content-text">
          Nestled between Milan and Turin, this small city has become a symbol
          of excellence, exclusivity, and timeless values.
        </p>
        <p className="page-content-text">
          Named the “Capital of Wool” its picturesque valleys are adorned with
          renowned woolen mills.
        </p>
        <ParagraphSix />
        <ParagraphSeven />
        <h2 className="clubpage-heading">Founders</h2>
        <p className="page-content-text">
          Alberto and Belqis shared a passion for integrity and quality that led
          them to establish BiellaVita.
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
  );
}
