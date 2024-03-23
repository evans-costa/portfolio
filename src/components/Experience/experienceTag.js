export default function ExperienceTag({ name, years }) {
  return (
    <div className="flex flex-col md:justify-start md:items-start justify-center items-center gap-1 md:gap-3">
      <h2 className="text-3xl text-white md:text-[48px]">{name}</h2>
      <span className="text-gray">
        {years} {years > 1 ? "anos" : "ano"} de Experiência
      </span>
    </div>
  );
}
