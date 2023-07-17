import { createContext } from 'react';
import User from '../types/User';

export interface AuthContextInterface {
  user?: User;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export default createContext<AuthContextInterface | undefined>(undefined);
