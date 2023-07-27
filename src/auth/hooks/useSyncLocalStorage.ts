import { useEffect } from 'react';
import AuthState from '../types/AuthState';

/**
 * persist auth state to local storage
 */
export default function useSyncLocalStorage(authStateName: string, authState?: AuthState) {
  useEffect(() => {
    if (authState) {
      localStorage.setItem(authStateName, JSON.stringify(authState));
    } else {
      localStorage.removeItem(authStateName);
    }
  }, [authState, authStateName]);
}
