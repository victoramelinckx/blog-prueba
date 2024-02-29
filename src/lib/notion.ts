import { Client } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function getPages() {
  const myPage = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID as string,
    filter: {
      property: "Published",
      checkbox: {
        equals: true,
      },
    },
  });

  return myPage;
}

export async function getSinglePageAndBlocks(pageId: number) {
  const page = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID as string,
    filter: {
      property: "ID",
      number: {
        equals: pageId,
      },
    },
  });

  const blocks = await notion.blocks.children.list({
    block_id: page.results[0].id,
  });

  return { page: page.results[0], blocks: blocks.results };
}

export async function getPageMetadata(pageId: number) {
  const page = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID as string,
    filter: {
      property: "ID",
      number: {
        equals: pageId,
      },
    },
  });

  return page.results[0];
}

export async function getPagesByID(pagesIDs: number[]) {
  let pages: PageObjectResponse[] = [];
  for (let i = 0; i < pagesIDs.length; i++) {
    const page = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID as string,
      filter: {
        property: "ID",
        number: {
          equals: pagesIDs[i],
        },
      },
    });
    pages.push(page.results[0] as PageObjectResponse);
  }

  return pages;
}
