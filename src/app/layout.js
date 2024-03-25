import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";

import "../styles/globals.css";

import Footer from "@/components/Sections/Footer";
import Header from "@/components/Sections/Header";

const spaceGrotesk = localFont({
  src: "../public/fonts/SpaceGrotesk-VariableFont_wght.ttf",
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
        <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
