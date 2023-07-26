import isAuthState from './isAuthState';

/**
 * Get Auth State from Local Storage
 * @param authStateName
 * @returns
 */
export default function getInitialAuthState(authStateName: string) {
  const sjson = localStorage.getItem(authStateName);
  if (!sjson) return undefined;
  try {
    const value: unknown = JSON.parse(sjson);
    return isAuthState(value) ? value : undefined;
  } catch (error) {
    return undefined;
  }
}
