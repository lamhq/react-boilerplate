import AuthState from '../types/AuthState';

/**
 * Type guard to safely retrieve auth state from local storage
 * @param value unknown
 * @returns boolean
 */
export default function isAuthState(value: unknown): value is AuthState {
  return typeof value === 'object' && value !== null && 'id' in value && 'email' in value;
}
