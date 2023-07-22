/**
 * Information of authenticated user that is stored in client side
 * Note that we do not store access token or sensitive information
 * Access token will be stored securely by browser using http cookie
 */
export default interface AuthState {
  /**
   * Logged-in user's id
   */
  id: string;

  /**
   * User's email
   */
  email: string;
}
