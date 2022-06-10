import axios from "axios";

export interface ILoginResponse {}

export const login = async ({
  userName,
  password,
}: {
  userName: string;
  password: string;
}) => {
  try {
    const res = await axios.post<ILoginResponse[]>(
      `https://locblog.local/wp-json/api/v1/token`,
      { userName, password }
    );
    return res;
  } catch (error) {
    return Promise.reject(error);
  }
};
