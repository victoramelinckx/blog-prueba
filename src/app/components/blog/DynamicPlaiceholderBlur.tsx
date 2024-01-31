import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";
import { cn } from "@/lib/utils";

interface BlurImageProps {
  src: string;
  className?: string;
}

const BlurImage: React.FC<BlurImageProps> = async ({ src, className }) => {
  const buffer = await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  });
  const { base64 } = await getPlaiceholder(buffer);

  return (
    <Image
      alt="Blog Image"
      src={src}
      width={0}
      height={0}
      sizes="100vw"
      className={cn("w-full h-auto rounded-md", className)}
      placeholder="blur"
      blurDataURL={base64}
    />
  );
};

export default BlurImage;
