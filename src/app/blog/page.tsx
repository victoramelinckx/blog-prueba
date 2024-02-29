import { getPages } from "@/lib/notion";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { BlogSection, BlogTitle, BlogSubtitle } from "react-notion-blog/serverComponents"
import { PostList } from "react-notion-blog/clientComponents"

export const revalidate = 0;

const Blog = async () => {
  const pages = await getPages();
  let suggestions: number[] = [];

  for (let i = 0; i < pages.results.length && i < 3; i++) {
    const suggestion = pages.results[i] as PageObjectResponse;
    if (suggestion.properties.ID.type == "number") {
      suggestions.push(suggestion.properties.ID.number as number);
    }
  }

  return (
    <>
      <BlogSection>
        <BlogTitle>Blog</BlogTitle>
        <BlogSubtitle>
          We know how important education is. Check out our most recent post!
        </BlogSubtitle>

        <PostList
          pages={pages.results as PageObjectResponse[]}
          suggestions={suggestions}
          ITEMS_PER_PAGE={12}
        />
      </BlogSection >
    </>
  );
};

export default Blog;


/* 
  <P
*/