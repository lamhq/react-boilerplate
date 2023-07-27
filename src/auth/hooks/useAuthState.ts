import { useContext } from 'react';
import AuthContext, { AuthStateContextData } from '../contexts/AuthStateContext';

export default function useAuthState(): AuthStateContextData {
  const authUtils = useContext(AuthContext);
  if (!authUtils) {
    throw new Error('Missing AuthProvider in React tree');
  }
  return authUtils;
}
