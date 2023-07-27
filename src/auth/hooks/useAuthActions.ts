import { useContext } from 'react';
import AuthActionsContext, { AuthActionsContextData } from '../contexts/AuthActionsContext';

export default function useAuthActions(): AuthActionsContextData {
  const authUtils = useContext(AuthActionsContext);
  if (!authUtils) {
    throw new Error('Missing AuthProvider in React tree');
  }
  return authUtils;
}
