import { Fragment } from "react";

import { Analytics } from "@vercel/analytics/react";

import "@/styles/globals.css";

import Footer from "@/components/Sections/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      {children}
      <Footer />
      <Analytics />
    </Fragment>
  );
}
