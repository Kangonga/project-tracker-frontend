import axios, { AxiosError } from 'axios';

export const getAuthStatus = async () => {
  const url = 'http://localhost:3000/auth/isLoggedIn';

  try {
    const isLoggedIn = await axios.post(
      url,
      {},
      {
        withCredentials: true,
        headers: { 'Access-Control-Allow-Credentials': true },
      }
    );
    return isLoggedIn.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
    return error;
  }
};
