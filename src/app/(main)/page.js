import Hero from "@/components/Sections/Hero";
import Experiences from "@/components/Sections/Experiences";
import Projects from "@/components/Sections/Projects";

export default async function Home() {
  return (
    <main className="mx-auto overflow-x-hidden w-full max-w-screen-xl min-h-screen flex-col items-center justify-center md:justify-between px-4 md:px-7 xl:px-12 text-gray">
      <Hero />
      <Experiences />
      <Projects />
    </main>
  );
}
