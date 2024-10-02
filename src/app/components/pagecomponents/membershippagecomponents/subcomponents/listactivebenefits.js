import ListItem from "./listitem";

export default function ListActiveBenefits() {
  return (
    <>
      <ul className="benefits-list">
        <ListItem
          bulletSrc="/listbullet.png"
          description="Propose new projects allowing them to influence initiatives that align with their interests and expertise in respect of the core values."
        />
        <ListItem
          bulletSrc="/listbullet.png"
          description="Have the opportunity to organise specific thematic events."
        />
        <ListItem
          bulletSrc="/listbullet.png"
          description="Introduce potential new partnerships in a wide spectrum of fields."
        />
        <ListItem
          bulletSrc="/listbullet.png"
          description="Active members have the opportunity to contribute to a lasting legacy within BiellaVita, helping shape its future direction."
        />
      </ul>
    </>
  );
}
