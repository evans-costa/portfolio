import { projects } from "@/lib/projectData";

import FolderIcon from "@/components/Icons/folderIcon";

export default function ProjectList() {
  return projects.map((project) => (
    <div key={project.id} className="flex flex-col items-start">
      <div className="relative p-6 md:h-[300px] lg:h-full md:px-10 md:py-8 lg:px-16 lg:py-20 flex flex-col items-center justify-center border border-gray">
        <div className="w-full z-50 flex justify-between items-center mb-6">
          <span className="hidden lg:block">
            <FolderIcon width={60} height={60} />
          </span>
          <h3 className="link-underline uppercase text-white">{project.title}</h3>
        </div>
        <p className="text-gray text-left line-clamp-5 lg:line-clamp-none">{project.description}</p>
        <div className="hidden lg:flex absolute items-center justify-center bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[#000] bg-fixed lg:opacity-0 transition duration-300 ease-in-out lg:hover:opacity-90 lg:focus-within:opacity-90">
          <div className="flex flex-col items-center gap-y-2 mt-16">
            <a
              aria-label={`Ver Código do projeto ${project.title}`}
              className="pb-3 w-fit text-white font-bold tracking-[2.3px] link link-underline text-base"
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer">
              VER CÓDIGO
            </a>
            {project.page ? (
              <a
                aria-label={`Ver projeto ${project.title}`}
                className="pb-3 w-fit text-white font-bold tracking-[2.3px] link link-underline text-base"
                href={project.page}
                target="_blank"
                rel="noopener noreferrer">
                VER PROJETO
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap h-fit gap-4 mt-2">
        {project.tags.map((tag, index) => (
          <span className="uppercase" key={index}>
            {tag}
          </span>
        ))}
      </div>
      <div className="lg:hidden w-full flex items-center gap-7 mt-4">
        <a
          aria-label={`Ver Código do projeto ${project.title}`}
          className="pb-3 w-fit text-white font-bold tracking-[2.3px] link link-underline text-base"
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer">
          VER CÓDIGO
        </a>
        {project.page ? (
          <a
            aria-label={`Ver projeto ${project.title}`}
            className="pb-3 w-fit text-white font-bold tracking-[2.3px] link link-underline text-base"
            href={project.page}
            target="_blank"
            rel="noopener noreferrer">
            VER PROJETO
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  ));
}
