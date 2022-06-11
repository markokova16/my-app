import axios from "axios";

export interface ICreatePost {
  data: { token: string };
}

export const createPost = async ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  try {
    const res = await axios.post<ICreatePost>(
      `https://locblog.local/wp-json/wp/v2/posts`,
      { title, content }
    );
    return res;
  } catch (error) {
    return Promise.reject(error);
  }
};
