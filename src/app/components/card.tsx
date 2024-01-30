"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ReactNode } from "react";

export const Card = ({
  children,
  image,
  link,
  suggestions,
}: {
  children: ReactNode;
  image: string;
  link: string;
  suggestions?: number[];
}) => {
  const pathname = usePathname();

  return (
    <div
      className={`overflow-hidden duration-700 border ${pathname.startsWith("/blog") ? "h-auto" : "h-full"} rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600`}
    >
      <Link
        href={{
          pathname: link,
          query: { data: suggestions ? JSON.stringify(suggestions) : "" },
        }}
      >
        <div className="w-full overflow-hidden h-fit max-h-48">
          <Image
            alt="/blurImage.jpg"
            src={image}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }} // optional
            priority
            placeholder="blur"
            blurDataURL="/blur.png"
          />
        </div>

        {children}
      </Link>
    </div>
  );
};
