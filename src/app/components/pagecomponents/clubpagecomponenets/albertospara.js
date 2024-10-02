import albertoData from "./data/albertosData.json";

export default function AlbertosPara() {
  return (
    <article className="Alberto-paragraph">
      <h2 className="Alberto-paragraph-heading">{albertoData.heading}</h2>
      {albertoData.paragraphs.map((para, index) => (
        <p key={index} className="para-intro">
          {para}
        </p>
      ))}
    </article>
  );
}
