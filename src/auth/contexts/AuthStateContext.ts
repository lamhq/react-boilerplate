import { createContext } from 'react';
import AuthState from '../types/AuthState';

export interface AuthStateContextData {
  /**
   * Information about the logged-in user
   * Should not contain sensitive information
   */
  user?: AuthState;

  /**
   * Quick way to check whether user is logged in
   */
  isAuthenticated: boolean;
}

export default createContext<AuthStateContextData | undefined>(undefined);
