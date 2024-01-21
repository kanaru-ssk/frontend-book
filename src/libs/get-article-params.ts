import { getArticleFiles } from "@/libs/get-article-files";

export async function getArticleParams() {
  const articleFiles = await getArticleFiles();
  return articleFiles.map((file, i) => {
    const chapterRoot = articleFiles.find(
      ({ chapterId }) => chapterId === file.chapterId,
    );
    const slug = [file.title];
    if (file.chapterId && file.sectionId && chapterRoot)
      slug.unshift(chapterRoot.title);

    return { slug };
  }, []);
}
