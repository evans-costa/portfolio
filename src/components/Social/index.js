import GitHubIcon from "@/components/Icons/githubIcon";
import LinkedInIcon from "@/components/Icons/linkedinIcon";
import FrontendMentorIcon from "@/components/Icons/frontendMentorIcon";

import Link from "next/link";

export default function Social() {
  return (
    <div className="flex flex-col mx-auto gap-4 md:flex-row justify-between items-center w-min sm:w-full max-w-screen-xl">
      <span className="text-white text-2xl md:text-3xl tracking-[0.5px] font-bold px-5">
        <Link aria-label="Link para retornar a home" href="/">
          evandrocosta.dev
        </Link>
      </span>
      <div className="relative z-20 flex flex-col justify-center items-center gap-4">
        <span className="flex gap-8 lg:pr-4">
          <a
            className="text-white hover:text-green"
            aria-label="Ícone Perfil Github"
            href="https://github.com/evans-costa"
            target="_blank"
            rel="noopener noreferrer">
            <GitHubIcon />
          </a>
          <a
            className="text-white hover:text-green"
            aria-label="Ícone Perfil LinkedIn"
            href="https://www.linkedin.com/in/evandro-souzac/"
            target="_blank"
            rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
          <a
            className="text-white hover:text-green"
            aria-label="Ícone Perfil Frontend Mentor"
            href="https://www.frontendmentor.io/profile/evans-costa"
            target="_blank"
            rel="noopener noreferrer">
            <FrontendMentorIcon />
          </a>
        </span>
      </div>
    </div>
  );
}
