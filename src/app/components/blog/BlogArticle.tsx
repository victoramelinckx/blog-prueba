import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const ArticleSection = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative min-h-screen w-full flex flex-col lg:flex-row justify-center py-10 pb-20 xl:pt-20 h-fit px-10 sm:px-16 xl:px-0 gap-16 max-w-5xl mx-auto",
        className
      )}
      {...props}
    />
  );
});
ArticleSection.displayName = "ArticleSection";

const ArticleContent = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "grid grid-flow-row min-h-screen w-full lg:w-3/5 gap-3",
        className
      )}
      {...props}
    />
  );
});
ArticleContent.displayName = "ArticleContent";

const BackLink = React.forwardRef<
  HTMLParagraphElement,
  { link: string } & React.HTMLAttributes<HTMLDivElement>
>(({ className, link, ...props }, ref) => {
  return (
    <Link
      className={cn("text-white mb-6 xl:fixed xl:top-12 xl:left-12", className)}
      href={{
        pathname: link,
      }}
    >
      <FaArrowLeft className="w-7 h-auto" />
    </Link>
  );
});
BackLink.displayName = "BackLink";

const ArticleDate = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn(
        "text-sm sm:text-md md:text-lg text-transparent bg-gradient-to-r from-zinc-400 to-zinc-300 bg-clip-text",
        className
      )}
      {...props}
    />
  );
});
ArticleDate.displayName = "ArticleDate";

const ArticleTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <h1
      ref={ref}
      className={cn(
        "z-10 text-3xl font-extrabold sm:text-4xl md:text-5xl text-transparent bg-gradient-to-r from-zinc-400 to-zinc-100 bg-clip-text pb-4",
        className
      )}
      {...props}
    />
  );
});
ArticleTitle.displayName = "ArticleTitle";

const ArticleImage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("grid grid-flow-row gap-3", className)}
      {...props}
    />
  );
});
ArticleImage.displayName = "ArticleImage";

const BlogSuggestions = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("grid grid-flow-row gap-3", className)}
      {...props}
    />
  );
});
ArticleImage.displayName = "ArticleImage";

export {
  ArticleSection,
  ArticleContent,
  ArticleDate,
  ArticleTitle,
  ArticleImage,
  BackLink,
};
