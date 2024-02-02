import { getPagesByID } from "@/lib/notion";
import { BlogCard, BlogArticle } from "@/app/components/blog/BlogSection";

interface BlogSuggestionsParams {
  currentPostId: number;
  suggestionsIDs: number[];
  title: string;
}

const BlogSuggestions = async ({
  currentPostId,
  suggestionsIDs,
  title,
}: BlogSuggestionsParams) => {
  const suggestions = await getPagesByID(suggestionsIDs);

  return (
    <div className="lg:w-1/3">
      <h2 className="z-10 text-xl font-extrabold sm:text-2xl md:text-3xl text-transparent bg-gradient-to-r from-zinc-400 to-zinc-100 bg-clip-text py-4">
        {title}
      </h2>
      <ul className="grid grid-flow-row gap-6">
        {suggestions.map((page) => {
          if (
            page.properties.ID.type == "number" &&
            page.properties.ID.number != currentPostId
          ) {
            return (
              <BlogCard
                key={page.id}
                link={"/blog/post/" + page.properties.ID.number}
                suggestions={suggestionsIDs}
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
              </BlogCard>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default BlogSuggestions;
