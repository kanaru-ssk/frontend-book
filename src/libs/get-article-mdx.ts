import type { Metadata } from "next";
import { getArticleFiles } from "@/libs/get-article-files";

type Mdx = {
  metadata: Metadata;
} & typeof import("*.mdx");

export async function getArticleMdx(slug: string[]): Promise<Mdx | null> {
  const articleFiles = await getArticleFiles();
  const file = articleFiles.find(({ fileName }) =>
    fileName.includes(slug[slug.length - 1]),
  );
  if (!file) return null;

  return await import(`@/articles/${file.fileName}`);
}
