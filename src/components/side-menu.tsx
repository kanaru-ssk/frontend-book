"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ArticleIndex } from "@/libs/get-article-indexes";

type Props = {
  articleIndexes: ArticleIndex[];
};

export function SideMenu({ articleIndexes }: Props) {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();

  return (
    <nav>
      <ul>
        {articleIndexes.map((chapter) => (
          <li key={chapter.chapterId}>
            <Link
              href={chapter.href}
              data-active={chapter.slug === slug}
              className="my-1 inline-block font-semibold text-neutral-500 hover:text-neutral-600 data-[active=true]:text-black"
            >
              {chapter.title}
            </Link>
            <ul>
              {chapter.sections.map((section) => (
                <li key={section.sectionId}>
                  <Link
                    href={section.href}
                    data-active={section.slug === slug}
                    className="ml-1 inline-block border-l border-l-neutral-300 py-1 pl-4 text-neutral-500 hover:border-l-neutral-400 hover:text-neutral-600 data-[active=true]:border-l-black data-[active=true]:text-black"
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
  );
}
