import { GoogleTagManager } from "@next/third-parties/google";
import localFont from "next/font/local";

import "@/styles/globals.css";

import Footer from "@/components/Sections/Footer";
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
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      <body className={spaceGrotesk.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
