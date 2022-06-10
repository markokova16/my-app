import axios from "axios";

export interface IPost {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  _embedded: {
    "wp:featuredmedia"?: { source_url: string }[];
  };
}

export const getPosts = async () => {
  try {
    const res = await axios.get<IPost[]>(
      `http://locblog.local/wp-json/wp/v2/posts?_embed`
    );
    return res;
  } catch (error) {
    return Promise.reject(error);
  }
};
