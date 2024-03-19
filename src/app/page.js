import GitHubIcon from "@/components/Icons/github-icon";
import LinkedInIcon from "@/components/Icons/linkedin-icon";
import PatternRings from "@/components/Icons/pattern-rings";

import ExperienceList from "@/components/Experience/experienceList";
import ProjectList from "@/components/Project/projectList";
import Contact from "@/components/Contact";


export default async function Home() {
  return (
    <main className="mx-auto overflow-x-hidden max-w-screen-xl min-h-screen flex-col items-center justify-between px-12 py-10 text-gray">
      <header className="w-auto flex flex-col justify-between">
        <div className="flex flex-row justify-between w-full">
          <span className="text-white text-3xl tracking-[0.5px] font-bold">
            evandrocosta.dev
          </span>
          <span className="flex gap-8">
            <a className="text-white hover:text-green" href="https://github.com/evans-costa" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a className="text-white hover:text-green" href="https://www.linkedin.com/in/evandro-souzac/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </span>
        </div>
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

      <footer>

      </footer>

    </main>
  );
}
