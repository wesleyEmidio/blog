import clsx from "clsx";
import Link from "next/link";
import React from "react";

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: "h1" | "h2";
};

export function PostHeading({
  children,
  url,
  as: Tag = "h2",
}: PostHeadingProps) {
  const HeadingClassesMap = {
    h1: "text-2xl/tight sm:text-4xl",
    h2: "text-4xl/normal sm:text-6xl",
  };

  const commonClasses = "font-extrabold";

  return (
    <Tag className={clsx(HeadingClassesMap[Tag], commonClasses)}>
      <Link href={url}>{children}</Link>
    </Tag>
  );
}
