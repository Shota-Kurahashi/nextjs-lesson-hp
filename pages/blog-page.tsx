import { GetStaticProps } from "next";
import { Layout } from "../Components/Layout";
import Post from "../Components/Post";
import { getAllPostsData } from "../lib/posts";

type Posts = { userId: number; id: number; title: string; body: string };
type Props = { posts: Posts[] };

export default function Blog({ posts }: Props) {
  return (
    <Layout title="Blog">
      <ul className="mt-10">
        {posts &&
          posts.map((post: Posts) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPostsData();

  return { props: { posts } };
};
