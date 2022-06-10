import axios from "axios";
import { IPost } from "./getPosts";

export const getPostById = async (id: string) => {
  try {
    const res = await axios.get<IPost>(
      `http://locblog.local/wp-json/wp/v2/posts/${id}?_embed`
    );
    return res;
  } catch (error) {
    return Promise.reject(error);
  }
};
