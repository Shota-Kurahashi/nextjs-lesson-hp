import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { Layout } from "../../Components/Layout";
import { getAllPostsId, getPostData } from "../../lib/posts";

export default function Post({ post }: any) {
  if (!post) {
    return <div>Loading</div>;
  }

  return (
    <Layout title={post.title}>
      <p className="m-4">
        {"ID :"}
        {post.id}
      </p>
      <p className="mb-8 text-xl font-bold">{post.title}</p>
      <p className="px-10">{post.body}</p>
      <Link href="/blog-page" passHref>
        <div className="mt-12 flex cursor-pointer">
          <svg
            className="mr-3 h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            ></path>
          </svg>
          <span>Back to blog-page</span>
        </div>
      </Link>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostsId();

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const post = await getPostData(params.id);

  return {
    props: {
      post,
    },
  };
};
