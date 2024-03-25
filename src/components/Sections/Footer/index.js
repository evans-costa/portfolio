import ContactForm from "@/components/ContactForm";
import PatternRings from "@/components/Icons/pattern-rings";
import Social from "@/components/Social";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col justify-between items-center px-4 pb-14 sm:pb-10 sm:px-8 xl:py-20 xl:px-40">
      <div className="w-full xl:max-w-screen-xl mx-auto mb-10 sm:mb-12 border-b border-gray">
        <div className="relative max-w-screen-xl flex flex-col xl:flex-row justify-between items-center xl:items-start gap-12 xl:gap-52 xl:pb-24 md:mx-40 mb-20 md:mb-24 lg:mb-12 xl:mx-auto">
          <div className="w-full xl:w-1/2 flex flex-col items-center xl:items-start mt-14 xl:mt-0">
            <h1 className="text-[40px] sm:text-[72px] text-white mb-9">Contato</h1>
            <p className="text-gray text-center text-balance xl:text-left">
              Se você quiser tirar seu projeto do papel, ou só mandar um "alô" para conversarmos,
              fique a vontade para preencher esse formulário. Eu adoraria ouvir o que você tem a
              dizer e irei retornar seu contato o mais breve que eu puder!
            </p>
            <div className="absolute top-3/4 right-3/4 xl:top-3/4 xl:right-3/4 md:top-[650px] md:right-[400px] lg:top-[550px] lg:right-[600px]">
              <PatternRings />
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
      <Social />
    </footer>
  );
}
