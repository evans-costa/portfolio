import Link from "next/link";

export default function Contact({ section, name }: { section: string; name: string }) {
  return (
    <Link
      aria-label="Link para contato"
      href={section}
      className="cursor-pointer pb-3 w-fit text-white font-bold tracking-[2.3px] text-base link-underline">
      {name}
    </Link>
  );
}
