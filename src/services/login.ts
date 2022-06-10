import axios from "axios";

export interface ILoginResponse {
  data: { token: string };
  success: boolean;
}

export const login = async ({
  userName,
  password,
}: {
  userName: string;
  password: string;
}) => {
  try {
    const res = await axios.post<ILoginResponse>(
      `https://locblog.local/wp-json/jwt-auth/v1/token`,
      { username: userName, password }
    );
    return res;
  } catch (error) {
    return Promise.reject(error);
  }
};
