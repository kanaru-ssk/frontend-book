import type { ReactNode } from "react";
import { SideMenu } from "@/components/side-menu";
import { SyncTabProvider } from "@/components/tab";
import { loadArticleChapters } from "@/libs/load-article-chapters";

export default async function ArticleLayout({
  children,
}: {
  children: ReactNode;
}) {
  const articleChapters = await loadArticleChapters();

  return (
    <>
      <SideMenu articleChapters={articleChapters} />
      <main className="mt-16 px-5 py-10 lg:ml-64 lg:px-10">
        <SyncTabProvider>{children}</SyncTabProvider>
      </main>
      <footer className="py-10 text-center text-xs">
        &copy; 2024 Frontend Book
      </footer>
    </>
  );
}
