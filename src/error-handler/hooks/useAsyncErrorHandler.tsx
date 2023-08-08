import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import { useConfig } from '@/configuration';
import AsyncFn from '@/common/types/AsyncFn';
import UnauthenticatedError from '../types/UnauthenticatedError';
import getErrorMessage from '../utils/getErrorMessage';

/**
 * Attach error handler for async functions
 */
export default function useAsyncErrorHandler<P extends unknown[], R>(callBack: AsyncFn<P, R>) {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { auth } = useConfig();

  return async (...args: Parameters<typeof callBack>) => {
    try {
      await callBack(...args);
    } catch (error) {
      if (error instanceof UnauthenticatedError) {
        navigate(auth.signinRoute, { state: { from: error.location }, replace: true });
        return;
      }
      const message = getErrorMessage(error);
      enqueueSnackbar(message, { variant: 'error' });
    }
  };
}
