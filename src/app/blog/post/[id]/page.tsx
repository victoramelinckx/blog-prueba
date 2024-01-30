import BlogSuggestions from "../../../components/BlogSuggestions";
import { getPageMetadata, getSinglePageAndBlocks } from "@/lib/notion";
import {
  BlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import { Suspense } from "react";
import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";

import {
  ArticleSection,
  ArticleContent,
  ArticleDate,
  ArticleTitle,
  ArticleImage,
  BackLink,
} from "@/app/components/blog/BlogArticle";

import { LoadingBlogSuggestions } from "@/app/components/blog/loadingArticle";

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // fetch data
  const page = (await getPageMetadata(
    parseInt(params.id)
  )) as PageObjectResponse;

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title:
      page.properties.Post.type == "title"
        ? page.properties.Post.title[0].plain_text
        : "Hyperion",
    description:
      page.properties.Preview.type == "rich_text"
        ? page.properties.Preview.rich_text[0]?.plain_text
        : "We build customized softwares solutions for your business.",
    openGraph: {
      title:
        page.properties.Post.type == "title"
          ? page.properties.Post.title[0].plain_text
          : "Hyperion",
      description:
        page.properties.Preview.type == "rich_text"
          ? page.properties.Preview.rich_text[0]?.plain_text
          : "We build customized softwares solutions for your business.",
      images:
        page.cover?.type == "external"
          ? page.cover.external.url
          : page.cover?.type == "file"
            ? page.cover.file.url
            : previousImages,
    },
    twitter: {
      title:
        page.properties.Post.type == "title"
          ? page.properties.Post.title[0].plain_text
          : "Hyperion",
      description:
        page.properties.Preview.type == "rich_text"
          ? page.properties.Preview.rich_text[0]?.plain_text
          : "We build customized softwares solutions for your business.",
      card: "summary_large_image",
      images:
        page.cover?.type == "external"
          ? page.cover.external.url
          : page.cover?.type == "file"
            ? page.cover.file.url
            : previousImages,
    },
  };
}

type Props = {
  params: { id: string };
  searchParams?: { data: string };
};

export default async function Post({ params, searchParams }: Props) {
  const { page: pageResponse, blocks } = await getSinglePageAndBlocks(
    parseInt(params.id)
  );
  let numberedListNumber = 1;
  const page = pageResponse as PageObjectResponse;
  const suggestionsIDs = searchParams ? JSON.parse(searchParams?.data) : null;

  const renderBlock = (block: BlockObjectResponse) => {
    if (block.type != "numbered_list_item") numberedListNumber = 1;
    switch (block.type) {
      case "heading_1":
        return (
          <h2>
            {block.heading_1.rich_text.map((value, index) => (
              <span
                key={index}
                className="z-10 text-xl font-extrabold sm:text-2xl md:text-3xl text-transparent bg-gradient-to-r from-zinc-400 to-zinc-100 bg-clip-text py-4"
              >
                {value.plain_text}
              </span>
            ))}
          </h2>
        );
      case "heading_2":
        return (
          <h3>
            {block.heading_2.rich_text.map((value, index) => (
              <span
                key={index}
                className="z-10 text-xl font-extrabold sm:text-2xl md:text-3xl text-transparent bg-gradient-to-r from-zinc-400 to-zinc-100 bg-clip-text py-4"
              >
                {value.plain_text}
              </span>
            ))}
          </h3>
        );
      case "heading_3":
        return (
          <h4>
            {block.heading_3.rich_text.map((value, index) => (
              <span
                key={index}
                className="z-10 text-lg font-extrabold sm:text-xl md:text-2xl text-transparent bg-gradient-to-r from-zinc-400 to-zinc-100 bg-clip-text py-4"
              >
                {value.plain_text}
              </span>
            ))}
          </h4>
        );
      case "paragraph":
        return block.paragraph.rich_text.map((value, index) => {
          if (value.href == null) {
            return (
              <span
                key={index}
                className={`text-transparent ${
                  value.annotations.bold && "font-bold"
                } ${value.annotations.italic && "italic"} ${
                  value.annotations.code
                    ? "bg-zinc-700 py-[2px] px-1 rounded-md text-zinc-200 text-sm sm:text-md md:text-lg"
                    : "text-md sm:text-lg md:text-xl bg-gradient-to-r from-zinc-400 to-zinc-300 bg-clip-text"
                }`}
              >
                {value.plain_text}
              </span>
            );
          } else {
            return (
              <a
                key={index}
                className={`text-transparent ${
                  value.annotations.bold && "font-bold"
                } ${
                  value.annotations.italic && "italic"
                } text-md sm:text-lg md:text-xl bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text`}
                href={value.href}
              >
                {value.plain_text}
              </a>
            );
          }
        });
      case "image":
        return (
          <Image
            alt="Blog Image"
            src={
              block.image.type == "file"
                ? block.image.file.url
                : block.image.external.url
            }
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto rounded-md"
            placeholder="blur"
            blurDataURL="/blur.png"
          />
        );
      case "bulleted_list_item":
        return (
          <div className="flex pl-6 text-md md:text-xl text-transparent bg-gradient-to-r from-zinc-400 to-zinc-300 bg-clip-text">
            <p>
              <span className="text-xl pr-2">&#x2022;</span>
              {block.bulleted_list_item.rich_text.map((value, index) => (
                <span
                  className={`text-transparent ${
                    value.annotations.bold && "font-bold"
                  } ${value.annotations.italic && "italic"} ${
                    value.annotations.code
                      ? "bg-zinc-700 py-[2px] px-1 rounded-md text-zinc-200 text-sm sm:text-md md:text-lg"
                      : "text-md sm:text-lg md:text-xl bg-gradient-to-r from-zinc-400 to-zinc-300 bg-clip-text"
                  }`}
                >
                  {block.bulleted_list_item.rich_text[index].plain_text}
                </span>
              ))}
            </p>
          </div>
        );
      case "numbered_list_item":
        numberedListNumber += 1;
        return (
          <div className="flex pl-6 text-md md:text-xl text-transparent bg-gradient-to-r from-zinc-400 to-zinc-300 bg-clip-text">
            <p>
              <span className="text-md sm:text-lg md:text-xl pr-2 font-bold">
                {numberedListNumber - 1}.
              </span>
              {block.numbered_list_item.rich_text.map((value, index) => (
                <span
                  className={`text-transparent ${
                    value.annotations.bold && "font-bold"
                  } ${value.annotations.italic && "italic"} ${
                    value.annotations.code
                      ? "bg-zinc-700 py-[2px] px-1 rounded-md text-zinc-200 text-sm sm:text-md md:text-lg"
                      : "text-md sm:text-lg md:text-xl bg-gradient-to-r from-zinc-400 to-zinc-300 bg-clip-text"
                  }`}
                >
                  {block.numbered_list_item.rich_text[index].plain_text}
                </span>
              ))}
            </p>
          </div>
        );
      case "code":
        return (
          <div className="w-full whitespace-pre-wrap rounded-md bg-zinc-700 p-4 font-mono text-zinc-200">
            <code>{block.code.rich_text[0].plain_text}</code>
          </div>
        );
    }
  };

  return (
    <>
      <ArticleSection>
        <ArticleContent>
          <BackLink link="/blog" />
          <ArticleDate>
            {/* @ts-expect-error */}
            {new Date(page.properties.Date.date.start).toDateString()}
          </ArticleDate>
          <ArticleTitle>
            {/* @ts-expect-error */}
            {page.properties.Post.title[0].plain_text}
          </ArticleTitle>{" "}
          <ArticleImage>
            {page.cover?.type == "file" ? (
              <Image
                alt="Blog Image"
                src={page.cover.file.url}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto rounded-md"
                placeholder="blur"
                blurDataURL="/blur.png"
              />
            ) : (
              <Image
                alt="Blog Image"
                src={page.cover?.external.url as string}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto rounded-md"
                placeholder="blur"
                blurDataURL="/blur.png"
              />
            )}
          </ArticleImage>
          {blocks?.map((block, index) => (
            <div key={index}>{renderBlock(block as BlockObjectResponse)}</div>
          ))}
        </ArticleContent>
        <Suspense fallback={<LoadingBlogSuggestions loading={false} />}>
          {/* @ts-expect-error */}
          <BlogSuggestions
            currentPostId={parseInt(params.id)}
            suggestionsIDs={suggestionsIDs}
          />
        </Suspense>
      </ArticleSection>
    </>
  );
}
