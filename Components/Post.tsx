import Link from "next/link";

type Props = {
  post: { userId: number; id: number; title: string; body: string };
};

const Post = ({ post }: Props) => {
  return (
    <div>
      <span>{post.id}</span>
      {":"}

      <Link href={`/posts/${post.id}`} passHref>
        <span className="cursor-pointer border-b border-blue-500 text-blue-500 hover:bg-gray-200">
          {post.title}
        </span>
      </Link>
    </div>
  );
};

export default Post;
