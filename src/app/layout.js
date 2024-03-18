import localFont from "next/font/local";
import "../styles/globals.css";

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
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}
