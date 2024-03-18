import { projects } from "@/lib/project-data";

import FolderIcon from "@/components/Icons/folder-icon";
import Contact from "@/components/Contact";

export default function ProjectList() {
  return projects.map((project) => (
    <div key={project.id} className="flex flex-col items-start">
      <div className="relative h-full px-16 py-20 flex flex-col items-center justify-center border border-gray">
        <div className="w-full z-50 flex justify-between items-center mb-6">
          <FolderIcon width={60} height={60} />
          <h3 className="link-underline uppercase text-white">
            {project.title}
          </h3>
        </div>
        <p className="text-gray text-left">{project.description}</p>
        <div className="absolute flex items-center justify-center bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[#000] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-90">
          <div className="flex flex-col items-center gap-y-2 mt-16">
            <Contact section={project.repo} name={"VER CÓDIGO"} />
            {project.page ? (
              <Contact section={project.page} name={"VER DOCUMENTAÇÃO"} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap flex-1 gap-4 mt-2">
        {project.tags.map((tag, index) => (
          <span className="uppercase" key={index}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  ));
}
