"use client";
import * as React from "react";

import { cn } from "@/lib/utils";

interface BlogLoadingProps {
  classNames?: string;
  [key: string]: any;
}

const ArticleLoading = React.forwardRef<HTMLDivElement, BlogLoadingProps>(
  ({ classNames, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative min-h-screen w-full flex justify-center py-10 h-fit px-10 sm:px-16 xl:px-0 gap-20",
          classNames
        )}
        {...props}
      />
    );
  }
);
ArticleLoading.displayName = "ArticleLoading";

const ArticleLoadingSection = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("max-w-5xl flex flex-col lg:flex-row gap-16 ", className)}
    {...props}
  />
));
ArticleLoadingSection.displayName = "ArticleLoadingSection";

const LoadingEffect = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    {...props}
    className={`oflex flex-col min-h-screen w-full lg:w-3/5 gap-3`}
  >
    <div className="grid grid-flow-row gap-1">
      <p
        className=" bg-zinc-700 text-transparent animate-pulse w-fit rounded-md"
        style={{
          animationDuration: "1s",
        }}
      >
        Sat Jul 08 2023
      </p>
      <h1
        className=" bg-zinc-700 animate-pulse h-fit rounded-md z-10 text-3xl font-extrabold sm:text-4xl md:text-5xl text-transparent"
        style={{
          animationDelay: `${1 * 0.05}s`,
          animationDuration: "1s",
        }}
      >
        Masajes Quemadores
      </h1>
    </div>
    <div className="grid grid-flow-row gap-3">
      <div
        className="w-full h-72 overflow-hidden bg-zinc-700 animate-pulse rounded-md"
        style={{
          animationDuration: "1s",
        }}
      />
      <h2
        className="p-0 text-transparent bg-zinc-700 animate-pulse lg:w-fit rounded-md z-10 text-2xl font-extrabold sm:text-3xl md:text-4xl"
        style={{
          animationDelay: `${2 * 0.05}s`,
          animationDuration: "1s",
        }}
      >
        Lorem ipsum dolor sit amet
      </h2>
      <p
        className="p-0 text-transparent bg-zinc-700 animate-pulse rounded-md"
        style={{
          animationDelay: `${3 * 0.05}s`,
          animationDuration: "1s",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Odio ut enim blandit
        volutpat maecenas volutpat blandit. Proin nibh nisl condimentum id.
        Egestas pretium aenean pharetra magna ac. Risus quis varius quam quisque
        id diam vel. Magna fringilla urna porttitor rhoncus dolor. Eget velit
        aliquet sagittis id consectetur. A arcu cursus vitae congue mauris.
        Convallis convallis tellus id interdum velit laoreet. Bibendum arcu
        vitae elementum curabitur. Massa tincidunt nunc pulvinar sapien et
        ligula ullamcorper malesuada. Scelerisque felis imperdiet proin
        fermentum leo vel orci porta non.
      </p>
      <h2
        className="p-0 text-transparent bg-zinc-700 animate-pulse lg:w-fit rounded-md z-10 text-2xl font-extrabold sm:text-3xl md:text-4xl"
        style={{
          animationDelay: `${4 * 0.05}s`,
          animationDuration: "1s",
        }}
      >
        Lorem ipsum dolor sit amet
      </h2>
      <p
        className="p-0 text-transparent bg-zinc-700 animate-pulse rounded-md"
        style={{
          animationDelay: `${5 * 0.05}s`,
          animationDuration: "1s",
        }}
      >
        Rhoncus est pellentesque elit ullamcorper. Purus faucibus ornare
        suspendisse sed nisi. Natoque penatibus et magnis dis parturient montes
        nascetur ridiculus. Risus sed vulputate odio ut enim. Consequat semper
        viverra nam libero justo laoreet sit. Auctor eu augue ut lectus arcu
        bibendum at. Gravida in fermentum et sollicitudin ac. At lectus urna
        duis convallis convallis tellus id interdum velit. Velit ut tortor
        pretium viverra suspendisse potenti nullam. In eu mi bibendum neque
        egestas congue quisque egestas. Nunc congue nisi vitae suscipit tellus
        mauris a. Eget velit aliquet sagittis id consectetur. A arcu cursus
        vitae congue mauris. Convallis convallis tellus id interdum velit
        laoreet. Bibendum arcu vitae elementum curabitur. Massa tincidunt nunc
        pulvinar sapien et ligula ullamcorper malesuada. Scelerisque felis
        imperdiet proin fermentum leo vel orci porta non. Praesent tristique
        magna sit amet purus. Lacus sed viverra tellus in hac habitasse.
      </p>
      <h2
        className="p-0 text-transparent bg-zinc-700 animate-pulse lg:w-fit rounded-md z-10 text-2xl font-extrabold sm:text-3xl md:text-4xl"
        style={{
          animationDelay: `${6 * 0.05}s`,
          animationDuration: "1s",
        }}
      >
        Lorem ipsum dolor sit amet
      </h2>
      <p
        className="p-0 text-transparent bg-zinc-700 animate-pulse rounded-md"
        style={{
          animationDelay: `${7 * 0.05}s`,
          animationDuration: "1s",
        }}
      >
        Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Eget
        dolor morbi non arcu risus quis varius quam. Cursus sit amet dictum sit
        amet justo. Pretium lectus quam id leo in vitae. Laoreet non curabitur
        gravida arcu ac tortor dignissim convallis aenean. Quam id leo in vitae
        turpis. Duis ultricies lacus sed turpis tincidunt. Arcu cursus euismod
        quis viverra nibh cras pulvinar mattis nunc. Ultricies mi eget mauris
        pharetra et ultrices neque ornare. Vehicula ipsum a arcu cursus vitae.
      </p>
    </div>
  </div>
));
LoadingEffect.displayName = "LoadingEffect";

const LoadingBlogSuggestions = React.forwardRef<
  HTMLParagraphElement,
  { loading: boolean } & React.HTMLAttributes<HTMLDivElement>
>(({ className, loading, ...props }, ref) => (
  <div
    className={cn("lg:w-1/3 grid grid-flow-row gap-6", className)}
    ref={ref}
    {...props}
  />
));

const SuggestionsTitle = React.forwardRef<
  HTMLHeadingElement,
  { loading: boolean } & React.HTMLAttributes<HTMLDivElement>
>(({ className, loading, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "z-10 text-xl font-extrabold sm:text-2xl md:text-3xl",
      loading
        ? "text-transparent bg-zinc-700 animate-pulse w-fit rounded-md my-4"
        : "text-transparent bg-gradient-to-r from-zinc-400 to-zinc-100 bg-clip-text py-4",
      className
    )}
    {...props}
  />
));

SuggestionsTitle.displayName = "SuggestionsTitle";

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
  ArticleLoading,
  ArticleLoadingSection,
  LoadingEffect,
  LoadingBlogSuggestions,
  LoadingCard,
  SuggestionsTitle,
};
