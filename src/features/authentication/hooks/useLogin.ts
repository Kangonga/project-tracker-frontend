import axios, { AxiosError } from 'axios';

interface loginProps {
  email: string;
  password: string;
}
export default async function useLogin(props: loginProps) {
  const url = 'http://localhost:3000/auth/signin';
  const params = {
    email: props.email,
    password: props.password,
  };
  try {
    const result = await axios.post(url, params, { withCredentials: true });
    return { data: result.data, error: null };
  } catch (error) {
    if (error instanceof AxiosError) {
      return { error: error.response?.data, data: null };
    }
    return { error, data: null };
  }
}
