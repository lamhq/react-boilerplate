import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import { useConfig } from 'src/configuration';
import UnauthenticatedError from '../types/UnauthenticatedError';
import getErrorMessage from '../utils/getErrorMessage';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CallBack = (...args: any[]) => Promise<void>;

/**
 * Attach error handler for async functions
 */
export default function useErrorHandler<T extends CallBack>(callBack: T) {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { signinRoute } = useConfig();

  return async (...args: Parameters<T>) => {
    try {
      await callBack(...args);
    } catch (error) {
      if (error instanceof UnauthenticatedError) {
        navigate(signinRoute, { state: { from: error.location }, replace: true });
        return;
      }
      const message = getErrorMessage(error);
      enqueueSnackbar(message, { variant: 'error' });
    }
  };
}
