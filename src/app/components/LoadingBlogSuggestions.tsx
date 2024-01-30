import { LoadingCard } from "./LoadingCard";

export const LoadingBlogSuggestions = ({ loading }: { loading: boolean }) => {
  return (
    <div className="lg:w-1/3">
      {loading ? (
        <h2 className="z-10 text-xl font-extrabold sm:text-2xl md:text-3xl text-transparent bg-zinc-700 animate-pulse w-fit rounded-md my-4">
          Up Next
        </h2>
      ) : (
        <h2 className="z-10 text-xl font-extrabold sm:text-2xl md:text-3xl text-transparent bg-gradient-to-r from-zinc-400 to-zinc-100 bg-clip-text py-4">
          Up Next
        </h2>
      )}
      <ul className="grid grid-flow-row gap-6">
        <LoadingCard index={0} />
        <LoadingCard index={1} />
        <LoadingCard index={2} />
      </ul>
    </div>
  );
};
