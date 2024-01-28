import { getArticleFiles } from "@/libs/get-article-files";

export function getArticleParams() {
  const articleFiles = getArticleFiles();
  return articleFiles.map((file) => {
    const chapterRoot = articleFiles.find(
      ({ chapterId }) => chapterId === file.chapterId,
    );
    const slug = [file.slug];
    if (file.chapterId && file.sectionId && chapterRoot)
      slug.unshift(chapterRoot.slug);

    return { slug };
  }, []);
}
