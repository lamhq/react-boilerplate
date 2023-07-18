import { useContext } from 'react';
import AuthContext, { AuthContextInterface } from '../contexts/AuthContext';

export default function useAuth(): AuthContextInterface {
  const authUtils = useContext(AuthContext);
  if (!authUtils) {
    throw new Error('Missing AuthProvider in React tree');
  }
  return authUtils;
}
