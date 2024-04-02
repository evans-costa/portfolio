import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[calc(100vh-90px)] relative flex flex-col justify-center items-center text-white gap-5">
      <div className="flex items-center justify-center gap-4">
        <h2 className="text-[42px] sm:text-[48px]">404</h2>
        <span className="border-l-[1px] border-gray opacity-50 h-16 w-0"></span>
        <h3 className="text-[38px] sm:text-[42px]">Opa... 😥</h3>
      </div>
      <p className="text-xl sm:text-3xl">Página não encontrada</p>
      <Link
        className="mt-4 text-lg sm:text-xl underline decoration-green underline-offset-4 hover:text-green"
        href="/">
        Retornar à tela inicial
      </Link>
    </div>
  );
}
