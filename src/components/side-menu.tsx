"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { ArticleChapter } from "@/libs/load-article-chapters";

type Props = {
  articleChapters: ArticleChapter[];
};

export function SideMenu({ articleChapters }: Props) {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
  const [open, setOpen] = useState(false);

  return (
    <aside>
      <input
        id="menu-button"
        checked={open}
        onChange={() => setOpen(!open)}
        type="checkbox"
        className="peer fixed left-1 top-0 z-10 h-16 w-16 cursor-pointer appearance-none before:absolute before:right-5 before:top-8 before:block before:h-0.5 before:w-6 before:-translate-y-1 before:bg-black before:duration-300 after:absolute after:right-5 after:top-8 after:block after:h-0.5 after:w-6 after:translate-y-1 after:bg-black after:duration-300 checked:before:translate-y-0 checked:before:rotate-45 checked:after:translate-y-0 checked:after:-rotate-45 lg:left-6 lg:hidden"
      />
      <label
        htmlFor="menu-button"
        className="fixed top-16 hidden h-full w-full peer-checked:block"
      />
      <nav className="fixed top-16 z-10 h-[calc(100%-4rem)] w-64 -translate-x-64 overflow-y-auto bg-white px-10 py-10 shadow-2xl duration-300 peer-checked:translate-x-0 lg:translate-x-0 lg:shadow-none">
        <ul>
          {articleChapters.map((chapter) => (
            <li key={chapter.chapterId}>
              <Link
                href={chapter.href}
                data-active={chapter.slug === slug}
                onClick={() => setOpen(false)}
                className="my-1 inline-block font-semibold text-neutral-500 hover:text-neutral-600 data-[active=true]:text-blue-600"
              >
                {chapter.title}
              </Link>
              <ul>
                {chapter.sections.map((section) => (
                  <li key={section.sectionId}>
                    <Link
                      href={section.href}
                      data-active={section.slug === slug}
                      onClick={() => setOpen(false)}
                      className="ml-1 inline-block border-l border-l-neutral-300 py-1 pl-4 text-neutral-500 hover:border-l-neutral-400 hover:text-neutral-600 data-[active=true]:border-l-blue-600 data-[active=true]:text-blue-600"
                    >
                      {section.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
