import Social from "@/components/Social/";

export default function Header() {
  return (
    <header
      id="header"
      className="w-auto max-w-screen-xl flex justify-between mx-auto px-4 md:px-7 xl:px-12 pt-4 md:pt-7 lg:pt-10">
      <Social />
    </header>
  );
}
