import PatternRings from "@/components/Icons/pattern-rings";
import Contact from "@/components/Contact";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full flex flex-col justify-center items-center md:block gap-6 mb-20 md:mb-14">
      <div className="lg:w-[710px] md:w-3/5 relative flex flex-col items-center md:items-start mt-32 lg:mb-16 md:mb-8">
        <div className="absolute -top-16 -left-[200px]">
          <PatternRings />
        </div>
        <h1 className="text-[40px] leading-10 sm:text-7xl lg:text-[88px] sm:text-pretty text-center md:text-left text-white mb-2">
          <span>Bom te ver aqui! </span>
          <br className="sm:none" />
          <span className="text text-underline">Eu sou Evandro Costa.</span>
        </h1>
        <p className="mt-10 w-full text-balance text-center md:w-2/3 md:text-left">
          Sou um desenvolvedor fullstack no Brasil, <br />
          comprometido em criar soluções digitais inovadoras e eficientes para desafios complexos.
        </p>
      </div>
      <Contact name={"CONTATO"} section={"#contact"} />
    </section>
  );
}
