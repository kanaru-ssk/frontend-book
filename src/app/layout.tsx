import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { loadArticleChapters } from "@/libs/load-article-chapters";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Frontend Book", template: "%s | Frontend Book" },
  description:
    "「Frontend Book」は、Webフロントエンドエンジニアを目指す方向けの学習サイトです。",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const articleChapters = await loadArticleChapters();

  return (
    <html lang="ja">
      <body>
        <header className="fixed top-0 z-10 flex h-16 w-full items-center justify-center border-b border-b-neutral-300 backdrop-blur md:justify-start md:px-10">
          <Link href="/" className="text-xl font-bold">
            Frontend Book
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
