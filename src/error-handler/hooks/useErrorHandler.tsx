import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import { useConfig } from 'src/configuration';
import { useAuth } from 'src/auth';
import UnauthenticatedError from '../types/UnauthenticatedError';
import getErrorMessage from '../utils/getErrorMessage';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AsyncFn = (...args: any[]) => Promise<void>;

/**
 * Attach error handler for async functions
 */
export default function useErrorHandler<T extends AsyncFn>(callBack: T) {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { signinRoute } = useConfig();
  const { reset } = useAuth();

  return async (...args: Parameters<T>) => {
    try {
      await callBack(...args);
    } catch (error) {
      if (error instanceof UnauthenticatedError) {
        navigate(signinRoute, { state: { from: error.location }, replace: true });
        reset();
        return;
      }
      const message = getErrorMessage(error);
      enqueueSnackbar(message, { variant: 'error' });
    }
  };
}
