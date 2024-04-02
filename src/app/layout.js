import localFont from "next/font/local";

import "@/styles/globals.css";

import Header from "@/components/Sections/Header";

const spaceGrotesk = localFont({
  src: "../../public/fonts/SpaceGrotesk-VariableFont_wght.ttf",
  display: "swap",
});

export const metadata = {
  title: "Evandro Costa - Fullstack Developer",
  description: "Bom tem ver aqui! 👋🏻 Sou Evandro Costa, desenvolvedor fullstack",
  alternates: {
    canonical: "https://evandrocosta.dev.br",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" dir="ltr">
      <body className={spaceGrotesk.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
