import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export function PostFeatured() {
  const slug = "qualquer";
  const PostLink = `/post/${slug}`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        linkProps={{
          href: PostLink,
          className: "opacity-50",
        }}
        imageProps={{
          width: 1200,
          height: 72,
          src: "/images/bryen_9.png",
          alt: "alt da imagem",
          priority: true,
        }}
      ></PostCoverImage>

      <div className="flex flex-col gap-4 sm:justify-center">
        <time
          className="text-slate-600 block text-sm/tight"
          dateTime="2026-03-31"
        >
          2026-03-31 10:00
        </time>

        <PostHeading as="h1" url={PostLink}>
          autem blanditiis, deserunt commodi pariatur.
        </PostHeading>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni alias
          sapiente molestias accusantium, excepturi quo. Id beatae suscipit
          dignissimos reprehenderit sequi dolor quia, repellendus architecto
          autem blanditiis, deserunt commodi pariatur.
        </p>
      </div>
    </section>
  );
}
