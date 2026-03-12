import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";
import { findAllPublicPostsCached } from "@/lib/post/queries/public";

export async function PostFeatured() {
  const posts = await findAllPublicPostsCached();
  const post = posts[0];
  const PostLink = `/post/${post.slug}`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        linkProps={{
          href: PostLink,
        }}
        imageProps={{
          width: 1200,
          height: 72,
          src: post.coverImageUrl,
          alt: post.title,
          priority: true,
        }}
      ></PostCoverImage>

      <PostSummary
        createdAt={post.createdAt}
        title={post.title}
        excerpt={post.excerpt}
        postLink={PostLink}
        postHeading="h1"
      ></PostSummary>
    </section>
  );
}
