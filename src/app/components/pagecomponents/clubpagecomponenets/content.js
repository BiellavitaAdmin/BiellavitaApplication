import ParagraphOne from "./paragraphon";
import ParagraphTwo from "./paragraphtwo";
import ParagraphSix from "./paragraphSix";
import ParagraphSeven from "./paragraphSeven";
import ParagraphNine from "./paragraphNine";
import ParagraphTen from "./paragraphTen";
import ParagraphEleven from "./paragraphEleven";
import ParagraphTwelve from "./paragraphTwelve";
import Image from "next/image";

export default function Content() {
  return (
    <div className="content">
      <article className="section-content">
        <ParagraphOne />
        <br />
        <br />
        <ParagraphTwo />
        <br />
        <br />
        <br />
        <br />
        <section>
          <h2 className="clubpage-heading">The source of the idea</h2>
          <p className="page-content-text">
            … is the inspirational city of Biella.
          </p>
        </section>
        <br />
        <br />
        <br />
        <br />
        <p className="page-content-text">
          Nestled between Milan and Turin, this small city has become a symbol
          of excellence, exclusivity, and timeless values.
        </p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p className="page-content-text">
          Named the “Capital of Wool” its picturesque valleys are adorned with
          renowned woolen mills.
        </p>
        <br />
        <br />
        <ParagraphSix />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <ParagraphSeven />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <p className="page-content-text">
          In the most unexpected of circumstances, two paths from vastly
          different backgrounds crossed to create a space that celebrates
          excellence and brings like-minded people together.
        </p>
        <br />
        <br />
        <p className="page-content-text">
          Alberto and Belqis shared a passion for integrity and quality that led
          them to establish BiellaVita.
        </p>
        <br />
        <br />
        <br />
        <br />
      </article>
      <h2 className="clubpage-heading">Founders</h2>
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
