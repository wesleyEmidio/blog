import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { normalizeImageUrl } from "@/utils/normalize-image-url";

type PostCoverImageProps = {
  imageProps: React.ComponentProps<typeof Image>;
  linkProps: React.ComponentProps<typeof Link>;
};

export function PostCoverImage({ imageProps, linkProps }: PostCoverImageProps) {
  const src =
    typeof imageProps.src === "string"
      ? normalizeImageUrl(imageProps.src)
      : imageProps.src;

  return (
    <Link
      {...linkProps}
      className={clsx(
        "(w-full",
        "h-full",
        "overflow-hidden",
        "rounded-xl",
        linkProps.className,
      )}
    >
      <Image
        {...imageProps}
        src={src}
        className={clsx(
          "w-full",
          "h-full",
          "object-cover",
          "object-center",
          "group-hover:scale-105",
          "transition",
          imageProps.className,
        )}
        alt={imageProps.alt}
      ></Image>
    </Link>
  );
}
