import fs from "fs";
import path from "path";
import type { Metadata } from "next";

type Mdx = {
  metadata: Omit<Metadata, "title"> & { title: string };
} & typeof import("*.mdx");

type Article = {
  fileName: string;
  chapterId: number;
  sectionId: number;
  slug: string;
  href: string;
  mdx: Mdx;
};

export async function loadArticles() {
  const fileNames = fs.readdirSync(path.join(process.cwd(), "src", "articles"));

  const articles: Article[] = [];
  let chapterSlug: string = "";

  for (let i = 0; i < fileNames.length; i++) {
    const fileName = fileNames[i];
    if (!fileName.endsWith(".mdx")) continue;

    const [chapterId, sectionId] = fileName.slice(0, 5).split("-").map(Number);
    const slug = fileName.slice(6, -4);
    if (sectionId === 0) chapterSlug = slug;

    const href = sectionId === 0 ? `/${slug}` : `/${chapterSlug}/${slug}`;
    const mdx = (await import(`@/articles/${fileName}`)) as Mdx;

    articles.push({ fileName, chapterId, sectionId, slug, href, mdx });
  }

  return articles;
}
