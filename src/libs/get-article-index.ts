import { getArticleFiles } from "@/libs/get-article-files";
import { getArticleMdx } from "@/libs/get-article-mdx";

type ArticleIndex = {
  chapterId: number;
  href: string;
  slug: string;
  title: string;
  sections: {
    sectionId: number;
    href: string;
    slug: string;
    title: string;
  }[];
};

export async function getArticleIndex() {
  const articleFiles = await getArticleFiles();
  const chapters: ArticleIndex[] = [];

  for (let i = 0; i < articleFiles.length; i++) {
    const mdx = await getArticleMdx(articleFiles[i].slug);
    if (!mdx) continue;

    if (articleFiles[i].sectionId === 0) {
      chapters.push({
        chapterId: articleFiles[i].chapterId,
        href: `/${articleFiles[i].slug}`,
        slug: articleFiles[i].slug,
        title: mdx.metadata.title,
        sections: [],
      });
    } else {
      const chapter = chapters[chapters.length - 1];
      chapter.sections.push({
        sectionId: articleFiles[i].sectionId,
        href: `${chapter.href}/${articleFiles[i].slug}`,
        slug: articleFiles[i].slug,
        title: mdx.metadata.title,
      });
    }
  }

  return chapters;
}
