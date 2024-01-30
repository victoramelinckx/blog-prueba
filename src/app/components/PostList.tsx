"use client";

import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { Card } from "./card";
import { Article } from "./article";
import { useState } from "react";
import { usePagination } from "@mantine/hooks";

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
    total: total,
    initialPage: 1,
    onChange(page) {
      const start = (page - 1) * ITEMS_PER_PAGE;
      const end = start + ITEMS_PER_PAGE;
      setVisibleResults(pages.slice(start, end));
    },
  });

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
        {visibleResults.map((object) => {
          const page = object;
          return (
            <Card
              // @ts-expect-error
              link={"/blog/post/" + page.properties.ID.number}
              suggestions={suggestions}
              key={page.id}
              image={
                page.cover?.type == "file"
                  ? page.cover?.file.url
                  : (page.cover?.external.url as string)
              }
            >
              <Article
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
            </Card>
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
