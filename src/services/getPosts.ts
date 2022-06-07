import axios from "axios";

export interface IPost {
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  _embedded: {
    "wp:featuredmedia": { link: string }[];

  };
}

export const getPosts = async () => {
  try {
    const res = await axios.get<IPost[]>(
      `http://locasticblog.local/wp-json/wp/v2/posts?_embed`
    );
    return res;
  } catch (error) {
    return Promise.reject(error);
  }
};
