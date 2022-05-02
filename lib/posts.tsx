import axios from "axios";
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

type Posts = { userId: number; id: number; title: string; body: string };

export async function getAllPostsData() {
  const res = await axios.get(apiUrl);
  const posts = res.data;

  return posts;
}

export async function getAllPostsId() {
  const res = await axios.get(apiUrl);
  const posts = res.data;

  return posts.map((post: Posts) => {
    return { params: { id: String(post.id) } };
  });
}

//この関数は自分で決めてOK
export async function getPostData(id: string | undefined | string[]) {
  const res = await axios.get(`${apiUrl}/${id}/`);
  const post = res.data;

  return post;
}
