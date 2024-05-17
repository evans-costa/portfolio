import Contact from "@/components/ContactLink";
import PatternCircle from "@/components/Icons/patternCircle";
import PatternRings from "@/components/Icons/patternRings";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full flex flex-col justify-center items-center mb-16 md:mb-14 -mt-20 sm:-mt-10">
      <div className="relative flex flex-col md:flex-row-reverse items-center md:items-start lg:justify-stretch mt-32 lg:mb-16 md:mb-8">
        <div className="relative w-full h-full mb-10 lg:w-3/4">
          <div className="absolute right-56 md:right-[400px] lg:right-[700px] z-40">
            <PatternRings />
          </div>
          <div className="relative mx-12 md:mx-0 bg-gradient-to-t from-[#242424] z-40 md:absolute md:-top-24 md:-left-8 md:w-[350px] md:h-[560px] lg:w-[420px] lg:left-3">
            <Image
              src="/profile.png"
              width={600}
              height={1000}
              alt="Evandro Costa profile picture"
              priority={true}
              className="md:absolute bottom-0"
            />
          </div>
          <div className="z-50 absolute bottom-0 -right-24 md:-top-8 lg:top-[18rem] lg:-left-[54px]">
            <PatternCircle />
          </div>
        </div>
        <div className="z-50 flex flex-col items-center md:items-start gap-6 md:gap-8">
          <h1 className="text-[40px] leading-10 sm:text-7xl lg:text-[88px] sm:text-pretty text-center md:text-left text-white mb-2">
            <span>Bom te ver aqui! </span>
            <span className="text text-underline ">Eu sou Evandro Costa.</span>
          </h1>
          <p className="w-full text-balance text-center md:text-left lg:mb-16 lg:w-3/4">
            Sou um desenvolvedor fullstack no Brasil, comprometido em criar soluções digitais
            inovadoras e eficientes para desafios complexos.
          </p>
          <Contact name={"CONTATO"} section={"#contact"} />
        </div>
      </div>
    </section>
  );
}
