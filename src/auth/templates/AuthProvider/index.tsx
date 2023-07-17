import { PropsWithChildren, useMemo, useState } from 'react';

import { useService } from 'src/di';
import AuthService from 'src/auth/services/AuthService';
import User from 'src/auth/types/User';
import AuthContext from '../../contexts/AuthContext';

export default function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | undefined>(undefined);
  const authService = useService(AuthService);

  const login = async (email: string, password: string) => {
    const loginData = await authService.login(email, password);
    setUser({ id: loginData.id, email: loginData.email });
  };

  const logout = async () => {
    await authService.logout();
    setUser(undefined);
  };

  const contextValue = useMemo(
    () => ({
      user,
      isAuthenticated: !!user,
      login,
      logout,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user]
  );

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}
