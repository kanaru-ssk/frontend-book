import { getArticles } from "@/libs/get-articles";
import { notFound } from "next/navigation";
import { FooterLink } from "@/components/footer-link";
import { getArticleParams } from "@/libs/get-article-params";

export async function generateStaticParams() {
  return await getArticleParams();
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
      <footer>
        <nav className="mt-16 grid grid-cols-2">
          {prevArticle ? (
            <FooterLink
              type="prev"
              href={prevArticle.href}
              title={prevArticle.mdx.metadata.title}
            />
          ) : (
            <span></span>
          )}
          {nextArticle ? (
            <FooterLink
              type="next"
              href={nextArticle.href}
              title={nextArticle.mdx.metadata.title}
            />
          ) : (
            <span></span>
          )}
        </nav>
      </footer>
    </>
  );
}
