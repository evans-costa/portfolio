import GitHubIcon from "../app/ui/github-icon";
import LinkedInIcon from "../app/ui/linkedin-icon";
import PatternRings from "../app/ui/pattern-rings";
import ExperienceList from "../app/components/experienceList";
import Link from "next/link";
import { gitHubData } from "./lib/github-data";

export default async function Home() {
  const repositoriesData = await gitHubData();

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

        <Link
          href="#projects"
          className="cursor-pointer pb-3 w-fit text-white font-bold tracking-[2.3px] link link-underline text-base">
          CONTATO
        </Link>
      </header>

      <section className="relative h-fit mt-24 mb-36 pt-20 border-t border-white grid grid-cols-3 content-start gap-y-14">
        <ExperienceList />
        <div className="absolute top-64 -right-[380px]">
          <PatternRings />
        </div>
      </section>

      <section className="flex justify-between items-center">
        <h1 className="text-white">Projects</h1>
        <Link
          href="#projects"
          className="cursor-pointer pb-3 w-fit text-white font-bold tracking-[0.15em] link link-underline text-base">
          CONTATO
        </Link>
      </section>
    </main>
  );
}
