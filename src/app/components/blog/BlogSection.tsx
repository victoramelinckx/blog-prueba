"use client";

import * as React from "react";
import { useState } from "react";
import { usePagination } from "@mantine/hooks";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface BlogLoadingProps {
  classNames?: string;
  [key: string]: any;
}

const BlogSection = React.forwardRef<HTMLDivElement, BlogLoadingProps>(
  ({ classNames, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "min-h-screen w-full flex flex-col justify-center items-center pt-10 pb-20 h-fit px-10 sm:px-16 xl:px-0 max-w-5xl mx-auto",
          classNames
        )}
        {...props}
      />
    );
  }
);

BlogSection.displayName = "BlogSection";

const BlogTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn(
      "z-10 text-5xl font-extrabold px-8 sm:text-6xl md:text-7xl text-transparent bg-gradient-to-r from-zinc-400 to-zinc-100 bg-clip-text text-center pb-4 max-w-5xl",
      className
    )}
    {...props}
  />
));
BlogTitle.displayName = "BlogTittle";

const BlogSubtitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-md mx-8 md:text-xl text-transparent bg-gradient-to-r from-zinc-400 to-zinc-300 bg-clip-text text-center mb-8",
      className
    )}
    {...props}
  />
));
BlogSubtitle.displayName = "BlogSubtittle";

export const PostList = ({
  pages,
  suggestions,
  ITEMS_PER_PAGE,
}: {
  pages: PageObjectResponse[];
  suggestions: number[];
  ITEMS_PER_PAGE: number;
}) => {
  const [visibleResults, setVisibleResults] = useState(
    pages.slice(0, ITEMS_PER_PAGE)
  );
  const total = Math.ceil(pages.length / ITEMS_PER_PAGE);
  const pagination = usePagination({
    total,
    initialPage: 1,
    onChange: (page) => {
      const start = (page - 1) * ITEMS_PER_PAGE;
      setVisibleResults(pages.slice(start, start + ITEMS_PER_PAGE));
    },
  });

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
        {visibleResults.map((object) => {
          const page = object;
          return (
            <BlogCard
              // @ts-expect-error
              link={"/post/" + page.properties.ID.number}
              suggestions={suggestions}
              key={page.id}
              image={
                page.cover?.type == "file"
                  ? page.cover?.file.url
                  : (page.cover?.external.url as string)
              }
            >
              <BlogArticle
                title={
                  (page.properties.Post.type == "title" &&
                    page.properties.Post.title[0].plain_text) as string
                }
                description={
                  (page.properties.Preview.type == "rich_text" &&
                    page.properties.Preview.rich_text[0]?.plain_text) as string
                }
                // @ts-expect-error
                date={new Date(page.properties.Date.date.start).toDateString()}
                // @ts-expect-error
                link="/blog"
              />
            </BlogCard>
          );
        })}
      </div>
      <div className="pt-10">
        {pagination.active != 1 ? (
          <button
            onClick={pagination.previous}
            className="text-md mx-8 md:text-xl text-transparent bg-gradient-to-r from-zinc-400 to-zinc-300 bg-clip-text text-center mb-8"
          >
            prev
          </button>
        ) : (
          <span className="text-transparent text-md mx-8 select-none cursor-default">
            prev
          </span>
        )}
        <span className="text-md md:text-xl text-transparent bg-gradient-to-r from-zinc-400 to-zinc-300 bg-clip-text text-center mb-8">
          {pagination.active}
        </span>
        {pagination.active != Math.ceil(pages.length / ITEMS_PER_PAGE) ? (
          <button
            onClick={pagination.next}
            className="text-md mx-8 md:text-xl text-transparent bg-gradient-to-r from-zinc-400 to-zinc-300 bg-clip-text text-center mb-8"
          >
            next
          </button>
        ) : (
          <span className="text-transparent text-md mx-8 select-none cursor-default">
            next
          </span>
        )}
      </div>
    </>
  );
};

interface CardProps {
  children: React.ReactNode;
  image: string;
  link: string;
  suggestions?: number[];
  className?: string;
}

const BlogCard = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, image, link, suggestions, className, ...props }, ref) => {
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(true);

    return (
      <div
        ref={ref}
        className={cn(
          `overflow-hidden duration-700 border ${pathname.startsWith("/blog") ? "h-auto" : "h-full"} rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600`,
          className
        )}
      >
        <Link
          href={{
            pathname: link,
            query: { data: suggestions ? JSON.stringify(suggestions) : "" },
          }}
        >
          <div
            className={`relative w-full overflow-hidden h-48 ${isLoading ? "bg-zinc-700 animate-pulse" : ""}`}
          >
            <Image
              alt="/blurImage.jpg"
              src={image}
              fill
              priority
              className="z-10 object-cover"
              onLoadingComplete={() => setIsLoading(false)}
            />
          </div>
          {children}
        </Link>
      </div>
    );
  }
);
BlogCard.displayName = "BlogCard";

interface ArticleProps {
  children: React.ReactNode;
  date: string;
  title: string;
  description: string;
  className?: string;
}

const BlogArticle = React.forwardRef<HTMLDivElement, ArticleProps>(
  ({ children, date, title, description, className, ...props }, ref) => {
    return (
      <article ref={ref} className="p-4 md:p-8">
        <div className="flex justify-between gap-2 items-center">
          <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
            {date}
          </span>
          <span className="text-zinc-500 text-xs  flex items-center gap-1"></span>
        </div>
        <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
          {title}
        </h2>
        <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
          {description}
        </p>
      </article>
    );
  }
);
BlogArticle.displayName = "BlogArticle";

export { BlogTitle, BlogSubtitle, BlogSection, BlogCard, BlogArticle };
