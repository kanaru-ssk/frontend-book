import type { Metadata } from "next";
import { getArticleFiles } from "@/libs/get-article-files";

type Mdx = {
  metadata: Omit<Metadata, "title"> & { title: string };
} & typeof import("*.mdx");

export async function getArticleMdx(slug: string): Promise<Mdx | null> {
  const articleFiles = await getArticleFiles();
  const file = articleFiles.find(({ fileName }) => fileName.includes(slug));
  if (!file) return null;

  return await import(`@/articles/${file.fileName}`);
}
