import GitHubIcon from "@/components/Icons/github-icon";
import LinkedInIcon from "@/components/Icons/linkedin-icon";

export default function Social() {
  return (
    <div className="flex flex-col gap-4 md:flex-row justify-between items-center w-full max-w-screen-xl">
      <span className="text-white text-2xl md:text-3xl tracking-[0.5px] font-bold">
        evandrocosta.dev
      </span>
      <span className="flex gap-8">
        <a
          className="text-white hover:text-green"
          aria-label="Ícone Perfil Github"
          aria-describedby="Ícone para acessar o perfil do Github de Evandro Costa"
          href="https://github.com/evans-costa"
          target="_blank"
          rel="noopener noreferrer">
          <GitHubIcon />
        </a>
        <a
          className="text-white hover:text-green"
          aria-label="Ícone Perfil LinkedIn"
          aria-describedby="Ícone para acessar o perfil do LinkedIn de Evandro Costa"
          href="https://www.linkedin.com/in/evandro-souzac/"
          target="_blank"
          rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
      </span>
    </div>
  );
}
