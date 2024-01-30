"use client";
import * as React from "react";

import { cn } from "@/lib/utils";

interface BlogLoadingProps {
  classNames?: string;
  [key: string]: any;
}

const BlogLoading = React.forwardRef<HTMLDivElement, BlogLoadingProps>(
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

BlogLoading.displayName = "BlogLoading";

const BlogLoadingTitle = React.forwardRef<
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
BlogLoadingTitle.displayName = "BlogLoadingTittle";

const BlogLoadingSubtitle = React.forwardRef<
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
BlogLoadingSubtitle.displayName = "BlogLoadingSubtittle";

const BlogLoadingSection = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 py-4 ",
      className
    )}
    {...props}
  />
));
BlogLoadingSection.displayName = "BlogLoadingSection";

const LoadingCard = React.forwardRef<
  HTMLDivElement,
  { index: number } & React.HTMLAttributes<HTMLDivElement>
>(({ index, ...props }, ref) => (
  <div
    ref={ref}
    {...props}
    className={`overflow-hidden duration-700 border h-auto rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600`}
  >
    <div>
      <div
        className="w-full h-48 animate-pulse bg-zinc-700"
        style={{
          animationDuration: "1s",
        }}
      />
      <article className="p-4 md:p-8">
        <div className="flex justify-between gap-2 items-center">
          <span
            className="text-xs bg-zinc-700 animate-pulse text-transparent my-1 rounded-md"
            style={{
              animationDelay: `${index * 0.05}s`,
              animationDuration: "1s",
            }}
          >
            03 03 Jun 2022
          </span>
        </div>
        <h2
          className="z-20 text-xl font-medium bg-zinc-700 animate-pulse text-transparent my-1 rounded-md"
          style={{
            animationDelay: `${(index + 0.5) * 0.05}s`,
            animationDuration: "1s",
          }}
        >
          Andrew Tate: The Top G
        </h2>
        <p
          className="z-20 mt-4 text-sm bg-zinc-700 animate-pulse text-transparent rounded-md"
          style={{
            animationDelay: `${(index + 1) * 0.05}s`,
            animationDuration: "1s",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </article>
    </div>
  </div>
));
LoadingCard.displayName = "LoadingCard";

export {
  BlogLoading,
  BlogLoadingTitle,
  BlogLoadingSubtitle,
  BlogLoadingSection,
  LoadingCard,
};
