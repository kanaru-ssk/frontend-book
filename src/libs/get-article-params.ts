import { loadArticles } from "@/libs/load-articles";

export async function getArticleParams() {
  const articles = await loadArticles();

  const params: { slug: string[] }[] = [];
  let chapterSlug: string = "";
  for (let i = 0; i < articles.length; i++) {
    const slug: string[] = [];

    slug.push(articles[i].slug);
    if (articles[i].sectionId === 0) chapterSlug = articles[i].slug;
    else slug.unshift(chapterSlug);

    params.push({ slug });
  }

  return params;
}
