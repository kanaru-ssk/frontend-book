import { getArticleParams } from "@/libs/get-article-params";
import { getArticleMdx } from "@/libs/get-article-mdx";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const articleParams = await getArticleParams();
  return articleParams.map(({ slug }) => ({ slug }));
}

type Params = {
  params: { slug: string[] };
};

export async function generateMetadata({ params }: Params) {
  const mdx = await getArticleMdx(params.slug);
  if (!mdx) return notFound();

  return mdx.metadata;
}

export default async function Article({ params }: Params) {
  const mdx = await getArticleMdx(params.slug);
  if (!mdx) return notFound();

  const MDXComponent = mdx.default;
  return <MDXComponent />;
}
