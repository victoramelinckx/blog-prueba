type Props = {
  title: string;
  description: string;
  date: string;
};

export const Article: React.FC<Props> = ({ title, description, date }) => {
  return (
    <article className="p-4 md:p-8">
      <div className="flex justify-between gap-2 items-center">
        <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
          {date}
        </span>
        <span className="text-zinc-500 text-xs  flex items-center gap-1"></span>
      </div>
      <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
        {title}
      </h2>
      <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
        {description}
      </p>
    </article>
  );
};
