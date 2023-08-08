import { PropsWithChildren, useMemo, useState } from 'react';

import { useService } from '@/di';
import { useConfig } from '@/configuration';
import getInitialAuthState from '../../utils/getInitialAuthState';
import AuthState from '../../types/AuthState';
import AuthService from '../../services/AuthService';
import AuthStateContext from '../../contexts/AuthStateContext';
import AuthActionsContext from '../../contexts/AuthActionsContext';
import useSyncLocalStorage from '../../hooks/useSyncLocalStorage';

export default function AuthProvider({ children }: PropsWithChildren) {
  // prettier-ignore
  const { auth: { authStateName } } = useConfig();
  const [authState, setAuthState] = useState<AuthState | undefined>(() =>
    getInitialAuthState(authStateName)
  );
  const authService = useService(AuthService);
  useSyncLocalStorage(authStateName, authState);

  const authStateContextValue = useMemo(
    () => ({
      user: authState,
      isAuthenticated: !!authState,
    }),
    [authState]
  );

  const authActionsContextValue = useMemo(() => {
    const login = async (email: string, password: string) => {
      const loginData = await authService.login(email, password);
      setAuthState({ id: loginData.id, email: loginData.email });
    };

    const reset = () => {
      setAuthState(undefined);
    };

    const logout = async () => {
      await authService.logout();
      reset();
    };
    return {
      login,
      logout,
      reset,
    };
  }, [authService]);

  return (
    <AuthStateContext.Provider value={authStateContextValue}>
      <AuthActionsContext.Provider value={authActionsContextValue}>
        {children}
      </AuthActionsContext.Provider>
    </AuthStateContext.Provider>
  );
}
