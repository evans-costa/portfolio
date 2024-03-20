import localFont from "next/font/local";
import "../styles/globals.css";

import Footer from "@/components/Sections/Footer";

const spaceGrotesk = localFont({
  src: "../public/fonts/SpaceGrotesk-VariableFont_wght.ttf",
  display: "swap",
});

export const metadata = {
  title: "Evandro Costa - Fullstack Developer",
  description: "Evandro Costa fullstack developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={spaceGrotesk.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
