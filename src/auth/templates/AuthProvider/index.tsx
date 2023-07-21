import { PropsWithChildren, useMemo, useState } from 'react';

import { useService } from 'src/di';
import AuthService from 'src/auth/services/AuthService';
import AuthState from 'src/auth/types/AuthState';
import AuthContext from '../../contexts/AuthContext';

export default function AuthProvider({ children }: PropsWithChildren) {
  const [authState, setAuthState] = useState<AuthState | undefined>();
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
  };

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
