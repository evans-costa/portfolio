import PatternRings from "@/components/Icons/pattern-rings";
import Social from "@/components/Social";

export default function Footer() {
  return (
    <footer className="flex-col justify-between items-center py-20 px-40">
      <div className="max-w-screen-xl mx-auto px-12">
        <div className="max-w-screen-xl flex justify-between items-center gap-52 pb-24 mb-12 border-b border-gray">
          <div className="w-1/2 flex flex-col items-start">
            <h1 className="text-white mb-9">Contact</h1>
            <p className="text-gray">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus similique eveniet, saepe quisquam corrupti cupiditate
              itaque non harum minima omnis doloremque quas rerum,
              exercitationem animi! Voluptatum quidem cumque quod corrupti!
            </p>
          </div>

          <form className="w-1/2 flex flex-col gap-8">
            <div className="bg-[#242424]">
              <label htmlFor="name" className="sr-only"></label>
              <input
                required
                type="text"
                id="name"
                placeholder="NOME"
                className="bg-[#242424] w-full pl-6 pb-4 outline-none border-b border-gray text-input uppercase text-white placeholder:text-gray text-base -tracking-[0.22px] focus:border-green"></input>
            </div>
            <div className="bg-[#242424]">
              <label htmlFor="email" className="sr-only"></label>
              <input
                required
                type="email"
                id="email"
                placeholder="EMAIL"
                className="bg-[#242424] w-full pl-6 pb-4 outline-none border-b border-gray text-input uppercase text-white placeholder:text-gray text-base -tracking-[0.22px] focus:border-green"></input>
            </div>
            <div className="bg-[#242424]">
              <label htmlFor="message" className="sr-only"></label>
              <textarea
                required
                type="text"
                id="message"
                placeholder="MENSAGEM"
                className="bg-[#242424] w-full min-h-[110px] pl-6 pb-4 outline-none border-b border-gray text-input uppercase text-white placeholder:text-gray text-base -tracking-[0.22px] resize-none focus:border-green"></textarea>
            </div>
            <input
              type="submit"
              value="ENVIAR MENSAGEM"
              className="self-end cursor-pointer pb-3 w-fit text-white font-bold tracking-[2.3px] link link-underline text-base"></input>
          </form>
        </div>
        <Social />
      </div>
    </footer>
  );
}
