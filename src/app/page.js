import PatternRings from "@/components/Icons/pattern-rings";

import ExperienceList from "@/components/Experience/experienceList";
import ProjectList from "@/components/Project/projectList";
import Contact from "@/components/Contact";
import Social from "@/components/Social/";

export default async function Home() {
  return (
    <main className="mx-auto overflow-x-hidden max-w-screen-xl min-h-screen flex-col items-center justify-between px-12 pt-10 text-gray">
      <header className="w-auto flex flex-col justify-between">
        <Social />
      </header>

      <section id="hero">
        <div className="w-[710px] relative flex flex-col items-start my-32">
          <div className="absolute -top-16 -left-[300px]">
            <PatternRings />
          </div>
          <h1 className="text-white mb-2">
            Bom te ver aqui! <br />
            <span className="text text-underline">Eu sou Evandro Costa.</span>
          </h1>
          <p>
            Sou um desenvolvedor fullstack no Brasil, <br />
            comprometido em criar soluções digitais inovadoras <br /> e
            eficientes para desafios complexos.
          </p>
        </div>
        <Contact name={"CONTATO"} section={"#contact"} />
      </section>

      <section
        id="experiences"
        className="relative h-fit mt-24 mb-36 pt-20 border-t border-white grid grid-cols-3 content-start gap-y-14">
        <ExperienceList />
        <div className="absolute top-64 -right-[400px]">
          <PatternRings />
        </div>
      </section>

      <section id="projects" className="flex flex-col justify-center my-36">
        <div className="flex justify-between items-center mb-20">
          <h1 className="text-white">Projects</h1>
          <Contact name={"CONTATO"} section={"#contact"} />
        </div>
        <div className="grid grid-cols-2 gap-x-7 gap-y-16">
          <ProjectList />
        </div>
      </section>
    </main>
  );
}
