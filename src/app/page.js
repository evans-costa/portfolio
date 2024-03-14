import GitHubIcon from "../app/ui/github-icon";
import LinkedInIcon from "../app/ui/linkedin-icon";
import PatternRings from "../app/ui/pattern-rings";
import ExperienceList from "../app/components/experienceList";

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-xl min-h-screen flex-col items-center justify-between px-12 py-10">
      <header className="w-auto flex flex-col justify-between">
        <div className="flex flex-row justify-between w-full">
          <span className="text-white text-3xl tracking-[0.5px] font-bold">
            evandrocosta.dev
          </span>
          <span className="flex gap-8">
            <GitHubIcon />
            <LinkedInIcon />
          </span>
        </div>

        <div className="w-[710px] relative flex flex-col items-start my-32">
          <div className="absolute -top-16 -left-[130px]">
            <PatternRings />
          </div>
          <h1 className="text-white mb-2">
            Bom te ver aqui! <br />
            <span className="text text-underline">Eu sou Evandro Costa.</span>
          </h1>
          <p className="text-gray">
            Sou um desenvolvedor fullstack no Brasil, <br />
            comprometido em criar soluções digitais inovadoras <br /> e
            eficientes para desafios complexos.
          </p>
        </div>

        <span className="pb-3 w-fit text-white font-bold tracking-[0.15em] link link-underline text-base">
          CONTATO
        </span>
      </header>

      <section className="relative mt-24 mb-36 pt-20 border-t border-white grid grid-cols-3 gap-y-14">
        <ExperienceList />
        <div className="absolute top-64 -right-[380px]">
          <PatternRings />
        </div>
      </section>
    </main>
  );
}
