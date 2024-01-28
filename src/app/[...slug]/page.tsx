import Link from "next/link";
import { getArticles } from "@/libs/get-articles";
import { notFound } from "next/navigation";
import { getArticleParams } from "@/libs/get-article-params";

export async function generateStaticParams() {
  const param = await getArticleParams();
  return param;
}

type Props = {
  params: { slug: string[] };
};

export async function generateMetadata({ params }: Props) {
  const slug = params.slug.pop();
  if (!slug) return notFound();

  const articles = await getArticles();
  const mdx = articles.find((article) => article.slug === slug)?.mdx;
  if (!mdx) return notFound();

  return mdx.metadata;
}

export default async function Article({ params }: Props) {
  const slug = params.slug.pop();
  if (!slug) return notFound();

  const articles = await getArticles();
  const currentArticleIndex = articles.findIndex(
    (article) => article.slug === slug,
  );
  if (currentArticleIndex === -1) return notFound();

  const currArticle = articles[currentArticleIndex];
  const prevArticle = articles[currentArticleIndex - 1];
  const nextArticle = articles[currentArticleIndex + 1];

  const MDX = currArticle.mdx.default;

  return (
    <>
      <article className="prose prose-neutral max-w-none break-all">
        <MDX />
      </article>
      <nav className="mt-16 grid grid-cols-2">
        {prevArticle ? (
          <Link
            href={prevArticle.href}
            className="relative rounded px-8 py-5 before:absolute before:left-4 before:top-1/2 before:h-2 before:w-2 before:rotate-45 before:border-b-2 before:border-l-2 before:border-neutral-500 hover:bg-neutral-100"
          >
            <p className="mb-1 text-sm text-neutral-500">前のページ</p>
            <p>{prevArticle.mdx.metadata.title}</p>
          </Link>
        ) : (
          <span></span>
        )}
        {nextArticle ? (
          <Link
            href={nextArticle.href}
            className="relative rounded px-8 py-5 text-right before:absolute before:right-4 before:top-1/2 before:h-2 before:w-2 before:-rotate-45 before:border-b-2 before:border-r-2 before:border-neutral-500 hover:bg-neutral-100"
          >
            <p className="mb-1 text-sm text-neutral-500">次のページ</p>
            <p>{nextArticle.mdx.metadata.title}</p>
          </Link>
        ) : (
          <span></span>
        )}
      </nav>
    </>
  );
}
