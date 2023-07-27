import { createContext } from 'react';

export interface AuthActionsContextData {
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

export default createContext<AuthActionsContextData | undefined>(undefined);
