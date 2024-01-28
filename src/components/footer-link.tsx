import Link from "next/link";

type Props = {
  type: "prev" | "next";
  href: string;
  title: string;
};

export function FooterLink({ type, href, title }: Props) {
  const text = { prev: "前のページ", next: "次のページ" };

  return (
    <Link
      href={href}
      className={`${
        type === "prev"
          ? "before:left-4 before:rotate-45 before:border-l-2"
          : "text-right before:right-4 before:-rotate-45 before:border-r-2"
      } relative break-all rounded px-8 py-5 before:absolute before:top-1/2 before:h-2 before:w-2  before:border-b-2 before:border-neutral-500 hover:bg-neutral-100`}
    >
      <p className="mb-1 text-sm text-neutral-500">{text[type]}</p>
      <p>{title}</p>
    </Link>
  );
}
