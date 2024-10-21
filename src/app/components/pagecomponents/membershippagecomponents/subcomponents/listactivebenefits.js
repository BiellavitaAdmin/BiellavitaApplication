import ListItem from "./listitem";

export default function ListActiveBenefits() {
  return (
    <>
      <ul className="benefits-list">
        <ListItem
          bulletSrc="/redbiella.png"
          description="Propose new projects allowing them to influence initiatives that align with their interests and expertise in respect of the core values."
        />
        <ListItem
          bulletSrc="/redbiella.png"
          description="Have the opportunity to organise specific thematic events."
        />
        <ListItem
          bulletSrc="/redbiella.png"
          description="Introduce potential new partnerships in a wide spectrum of fields."
        />
        <ListItem
          bulletSrc="/redbiella.png"
          description="Active members have the opportunity to contribute to a lasting legacy within BiellaVita, helping shape its future direction."
        />
      </ul>
    </>
  );
}
