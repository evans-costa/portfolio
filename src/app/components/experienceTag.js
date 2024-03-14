export default function ExperienceTag({ name, years }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-white">{name}</h2>
      <span className="text-gray">
        {years} {years > 1 ? "anos" : "ano"} de Experiência
      </span>
    </div>
  );
}
