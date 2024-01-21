import { getArticleFiles } from "@/libs/get-article-files";

type ArticleIndex = {
  chapterId: number;
  title: string;
  href: string;
  sections: {
    sectionId: number;
    title: string;
    href: string;
  }[];
};

export async function getArticleIndex() {
  const articleFiles = await getArticleFiles();
  const chapters: ArticleIndex[] = [];

  for (let i = 0; i < articleFiles.length; i++) {
    if (articleFiles[i].sectionId === 0) {
      chapters.push({
        chapterId: articleFiles[i].chapterId,
        title: articleFiles[i].title,
        href: `/${articleFiles[i].title}`,
        sections: [],
      });
    } else {
      const chapter = chapters[chapters.length - 1];
      chapter.sections.push({
        sectionId: articleFiles[i].sectionId,
        title: articleFiles[i].title,
        href: `${chapter.href}/${articleFiles[i].title}`,
      });
    }
  }

  return chapters;
}
