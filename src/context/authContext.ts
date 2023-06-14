import { Dispatch, SetStateAction, createContext } from 'react';

interface AuthContextInterface {
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
}
export const AuthContext = createContext<AuthContextInterface | undefined>(undefined);
