import ProjectList from "@/components/Project/projectList";
import Contact from "@/components/ContactLink";

export default function Projects() {
  return (
    <section id="projects" className="w-full flex flex-col justify-between mb-20 sm:mb-24 xl:mb-32">
      <div className="flex justify-between items-center mb-10 sm:mb-14 lg:mb-36">
        <h2 className="text-[40px] sm:text-[60px] md:text-[72px] text-white">Projetos</h2>
        <Contact name={"CONTATO"} section={"#contact"} />
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 place-content-between gap-x-7 gap-y-10 sm:gap-y-14 xl:gap-y-15">
        <ProjectList />
      </div>
    </section>
  );
}
