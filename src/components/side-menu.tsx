import Link from "next/link";
import { getArticleIndex } from "@/libs/get-article-index";

export async function SideMenu() {
  const articleIndex = await getArticleIndex();

  return (
    <nav>
      <ol className="ml-4 list-decimal">
        {articleIndex.map((chapter) => (
          <li key={chapter.chapterId} className="my-2">
            <Link
              href={chapter.href}
              className="hover:text-neutral-500 hover:underline"
            >
              {chapter.title}
            </Link>
            <ol className="ml-4 list-decimal">
              {chapter.sections.map((section) => (
                <li key={section.sectionId} className="my-1">
                  <Link
                    href={section.href}
                    className="hover:text-neutral-500 hover:underline"
                  >
                    {section.title}
                  </Link>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </nav>
  );
}
