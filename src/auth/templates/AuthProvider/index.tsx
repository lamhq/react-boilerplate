import { PropsWithChildren, useEffect, useMemo, useState } from 'react';

import { useService } from 'src/di';
import { useConfig } from 'src/configuration';
import AuthService from 'src/auth/services/AuthService';
import AuthState from 'src/auth/types/AuthState';
import getInitialAuthState from 'src/auth/utils/getInitialAuthState';
import AuthContext from '../../contexts/AuthContext';

export default function AuthProvider({ children }: PropsWithChildren) {
  // prettier-ignore
  const { auth: { authStateName } } = useConfig();
  const [authState, setAuthState] = useState<AuthState | undefined>(() =>
    getInitialAuthState(authStateName)
  );
  const authService = useService(AuthService);

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

  /**
   * persist auth state to local storage
   */
  useEffect(() => {
    if (authState) {
      localStorage.setItem(authStateName, JSON.stringify(authState));
    } else {
      localStorage.removeItem(authStateName);
    }
  }, [authState, authStateName]);

  const contextValue = useMemo(
    () => ({
      user: authState,
      isAuthenticated: !!authState,
      login,
      logout,
      reset,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [authState]
  );

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}
