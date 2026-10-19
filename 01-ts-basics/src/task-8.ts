import axios from "axios";

export interface Post {
  id: number;
  title: string;
  body: string;
}

export function fetchPosts(): Promise<Post[]> {
  return axios
    .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.data);
}

fetchPosts().then((posts: Post[]): void => {
  console.log(posts[0].title);
});
