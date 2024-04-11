import localFont from "next/font/local";

import "@/styles/globals.css";

import Header from "@/components/Sections/Header";

const spaceGrotesk = localFont({
  src: "../../public/fonts/SpaceGrotesk-VariableFont_wght.ttf",
  display: "swap",
});

export const metadata = {
  title: "Evandro Costa - Dev Fullstack",
  description: "Bom tem ver aqui! 👋🏻 Sou Evandro Costa, desenvolvedor fullstack",
  alternates: {
    canonical: "https://evandrocosta.dev.br",
  },
  openGraph: {
    title: "Evandro Costa - Dev Fullstack",
    description: "Bom tem ver aqui! 👋🏻 Sou Evandro Costa, desenvolvedor fullstack",
    url: "https://evandrocosta.dev.br",
    siteName: "Evandro Costa - Dev Fullstack",
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
