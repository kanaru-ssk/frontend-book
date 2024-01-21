import fs from "fs";
import path from "path";

type ArticleFile = {
  chapterId: number;
  sectionId: number;
  fileName: string;
  title: string;
};

export async function getArticleFiles() {
  return fs
    .readdirSync(path.join(process.cwd(), "src", "articles"))
    .reduce<ArticleFile[]>((files, fileName) => {
      if (!fileName.includes(".mdx")) return files;

      const [chapterId, sectionId] = fileName
        .slice(0, 5)
        .split("-")
        .map(Number);
      const title = fileName.slice(6, -4);
      return [...files, { chapterId, sectionId, fileName, title }];
    }, []);
}
