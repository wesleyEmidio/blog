"use client";

import clsx from "clsx";

type ErroMessageProps = {
  pageTitle: string;
  contentTile: string;
  content: React.ReactNode;
};

export default function ErrorMessage({
  pageTitle,
  contentTile,
  content,
}: ErroMessageProps) {
  return (
    <>
      <title>{pageTitle}</title>
      <div
        className={clsx(
          "min-h-80 bg-slate-900 text-slate-100",
          "mb-16 p-8 rounded-xl",
          "flex items-center justify-center",
          "text-center",
        )}
      >
        <div>
          <h1 className="text-7xl/tight mb-4 font-extrabold">{contentTile}</h1>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
}
