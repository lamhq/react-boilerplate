import { useState } from 'react';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);

  function login() {
    setAuthenticated(true);
  }

  function logout() {
    setAuthenticated(false);
  }

  return { authenticated, login, logout };
}
