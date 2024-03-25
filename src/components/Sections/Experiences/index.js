import PatternRings from "@/components/Icons/pattern-rings";
import ExperienceList from "@/components/Experience/experienceList";

export default function Experiences() {
  return (
    <section
      id="experiences"
      className="overflow-x-visible relative max-w-screen-xl mb-20 lg:mb-36 py-10 md:pt-14 xl:pt-16 border-t border-b md:border-b-0 border-white grid grid-cols-1 place-content-center justify-items-center gap-y-6 md:grid-cols-2 md:justify-items-start lg:grid-cols-3 md:gap-y-14">
      <h1 className="sr-only">Experiências</h1>
      <ExperienceList />
      <div className="absolute md:top-96 lg:top-64 -right-[400px]">
        <PatternRings />
      </div>
    </section>
  );
}
