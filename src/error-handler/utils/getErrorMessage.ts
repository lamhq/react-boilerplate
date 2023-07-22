import UnauthenticatedError from '../types/UnauthenticatedError';
import UnauthorizedError from '../types/UnauthorizedError';
import NetworkError from '../types/NetworkError';
import RequestError from '../types/RequestError';

/**
 * Return display message for a specific error
 */
export default function getErrorMessage(error: unknown) {
  if (error instanceof UnauthenticatedError) {
    return 'You have to sign in to continue.';
  }

  if (error instanceof UnauthorizedError) {
    return "You don't have permission to perform this action.";
  }

  if (error instanceof NetworkError) {
    return 'Network error. Please check your internet connection.';
  }

  if (error instanceof RequestError && error.details) {
    return 'Please check your inputs.';
  }

  return 'Something went wrong. Please try again later.';
}
