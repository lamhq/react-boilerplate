import isAuthState from './isAuthState';

export default function getAuthStateFromLocalStorage(authStateName: string) {
  const sjson = localStorage.getItem(authStateName);
  if (!sjson) return undefined;
  try {
    const value: unknown = JSON.parse(sjson);
    return isAuthState(value) ? value : undefined;
  } catch (error) {
    return undefined;
  }
}
