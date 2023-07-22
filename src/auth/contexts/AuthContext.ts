import { createContext } from 'react';
import AuthState from '../types/AuthState';

export interface AuthContextInterface {
  /**
   * Information about the logged-in user
   * Should not contain sensitive information
   */
  user?: AuthState;

  /**
   * Quick way to check whether user is logged in
   */
  isAuthenticated: boolean;

  /**
   * Login in user with username and password
   */
  login: (username: string, password: string) => Promise<void>;

  /**
   * Logout from the server and reset authentication state
   */
  logout: () => Promise<void>;

  /**
   * Reset authentication state to empty
   */
  reset: () => void;
}

export default createContext<AuthContextInterface | undefined>(undefined);
