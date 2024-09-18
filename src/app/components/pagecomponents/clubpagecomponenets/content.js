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
        <ParagraphTwo />
        <div className="clubpage-image-one">
          <Image
            src="/Biella-lake.png"
            alt="User Icon"
            width={28}
            height={28}
            className="clubpage-large-image"
          />
        </div>
        <h2 className="clubpage-heading">The source of the idea</h2>
        <p className="page-content-text">
          … is the inspirational city of Biella.
        </p>
        <br />
        <br />
        <br />
        <p className="page-content-text">
          Nestled between Milan and Turin, this small city has become a symbol
          of excellence, exclusivity, and timeless values.
        </p>

        <div className="clubpage-image-two">
          <div className="left-dual-image">
            <Image
              src="/clubpage-left.png"
              alt="User Icon"
              width={28}
              height={28}
              className="clubpage-dual-image"
            />
          </div>
          <div className="right-dual-image">
            <Image
              src="/clubpage-right.png"
              alt="User Icon"
              width={28}
              height={28}
              className="clubpage-dual-image"
            />
          </div>
        </div>
        <p className="page-content-text">
          Named the “Capital of Wool” its picturesque valleys are adorned with
          renowned woolen mills.
        </p>
        <ParagraphSix />
        <div className="clubpage-image-three">
          <br />
          <Image
            src="/clubpage-third.png"
            alt="User Icon"
            width={28}
            height={28}
            className="clubpage-large-image-three"
          />
        </div>
        <ParagraphSeven />
        <div className="clubpage-image-four">
          <Image
            src="/clubpage-tri-image.png"
            alt="User Icon"
            width={28}
            height={28}
            className="clubpage-large-image"
          />
        </div>
        <h2 className="clubpage-heading">Founders</h2>
        <p className="page-content-text">
          In the most unexpected of circumstances, two paths from vastly
          different backgrounds crossed to create a space that celebrates
          excellence and brings like-minded people together.
        </p>
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
