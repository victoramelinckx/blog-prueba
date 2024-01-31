import { getPagesByID } from "@/lib/notion";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BlogSuggestionsParams {
  currentPostId: number;
  suggestionsIDs: number[];
}

const BlogSuggestions = async ({
  currentPostId,
  suggestionsIDs,
}: BlogSuggestionsParams) => {
  const suggestions = await getPagesByID(suggestionsIDs);

  return (
    <div className="lg:w-1/3">
      <h2 className="z-10 text-xl font-extrabold sm:text-2xl md:text-3xl text-transparent bg-gradient-to-r from-zinc-400 to-zinc-100 bg-clip-text py-4">
        Up Next
      </h2>
      <ul className="grid grid-flow-row gap-6">
        {suggestions.map((page) => {
          if (
            page.properties.ID.type == "number" &&
            page.properties.ID.number != currentPostId
          ) {
            return (
              <BlogCardS
                key={page.id}
                link={"/blog/post/" + page.properties.ID.number}
                suggestions={suggestionsIDs}
                image={
                  page.cover?.type == "file"
                    ? page.cover?.file.url
                    : (page.cover?.external.url as string)
                }
              >
                <BlogArticleS
                  title={
                    (page.properties.Post.type == "title" &&
                      page.properties.Post.title[0].plain_text) as string
                  }
                  description={
                    (page.properties.Preview.type == "rich_text" &&
                      page.properties.Preview.rich_text[0]
                        ?.plain_text) as string
                  }
                  date={new Date(
                    // @ts-expect-error
                    page.properties.Date.date.start
                  ).toDateString()}
                  // @ts-expect-error
                  link="/blog"
                />
              </BlogCardS>
            );
          }
        })}
      </ul>
    </div>
  );
};

interface CardProps {
  children: React.ReactNode;
  image: string;
  link: string;
  suggestions?: number[];
  className?: string;
}

const BlogCardS = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, image, link, suggestions, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          `overflow-hidden duration-700 border h-fullrounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600`,
          className
        )}
      >
        <Link
          href={{
            pathname: link,
            query: { data: suggestions ? JSON.stringify(suggestions) : "" },
          }}
        >
          <div className={`relative w-full overflow-hidden h-48 }`}>
            <Image
              alt="/blurImage.jpg"
              src={image}
              fill
              priority
              className="z-10"
            />
          </div>
          {children}
        </Link>
      </div>
    );
  }
);
BlogCardS.displayName = "BlogCardS";

interface ArticleProps {
  children: React.ReactNode;
  date: string;
  title: string;
  description: string;
  className?: string;
}

const BlogArticleS = React.forwardRef<HTMLDivElement, ArticleProps>(
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
BlogArticleS.displayName = "BlogArticleS";

export default BlogSuggestions;
