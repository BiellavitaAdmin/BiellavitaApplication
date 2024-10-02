import belquisData from "./data/belquisData";

export default function BelquisPara() {
  return (
    <article className="Belquis-paragraph">
      <h2 className="Belquis-paragraph-heading">{belquisData.heading}</h2>
      {belquisData.paragraphs.map((para, index) => (
        <p key={index} className="para-intro">
          {para}
        </p>
      ))}
    </article>
  );
}
