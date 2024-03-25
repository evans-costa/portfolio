import Link from "next/link";

export default function Contact({ section, name }) {
  return (
    <Link
      aria-label="Link para contato"
      href={section}
      className="cursor-pointer pb-3 w-fit text-white font-bold tracking-[2.3px] link link-underline text-base">
      {name}
    </Link>
  );
}
