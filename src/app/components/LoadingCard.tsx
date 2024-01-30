export const LoadingCard = ({ index }: { index: number }) => {
  return (
    <div
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
  );
};
