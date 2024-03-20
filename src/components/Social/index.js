import GitHubIcon from "@/components/Icons/github-icon";
import LinkedInIcon from "@/components/Icons/linkedin-icon";

export default function Social() {
  return (
    <div className="flex flex-row justify-between w-full">
      <span className="text-white text-3xl tracking-[0.5px] font-bold">
        evandrocosta.dev
      </span>
      <span className="flex gap-8">
        <a
          className="text-white hover:text-green"
          href="https://github.com/evans-costa"
          target="_blank"
          rel="noreferrer">
          <GitHubIcon />
        </a>
        <a
          className="text-white hover:text-green"
          href="https://www.linkedin.com/in/evandro-souzac/"
          target="_blank"
          rel="noreferrer">
          <LinkedInIcon />
        </a>
      </span>
    </div>
  );
}
