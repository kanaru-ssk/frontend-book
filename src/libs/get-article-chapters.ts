import { loadArticles } from "@/libs/load-articles";

export type ArticleChapter = {
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

export async function getArticleChapters() {
  const articles = await loadArticles();

  const chapters: ArticleChapter[] = [];

  for (let i = 0; i < articles.length; i++) {
    if (articles[i].sectionId === 0) {
      chapters.push({
        chapterId: articles[i].chapterId,
        href: articles[i].href,
        slug: articles[i].slug,
        title: articles[i].mdx.metadata.title,
        sections: [],
      });
    } else {
      const chapter = chapters[chapters.length - 1];
      chapter.sections.push({
        sectionId: articles[i].sectionId,
        href: articles[i].href,
        slug: articles[i].slug,
        title: articles[i].mdx.metadata.title,
      });
    }
  }

  return chapters;
}
