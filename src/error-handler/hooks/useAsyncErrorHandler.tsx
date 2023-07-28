import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import { useConfig } from 'src/configuration';
import AsyncFn from 'src/common/types/AsyncFn';
import UnauthenticatedError from '../types/UnauthenticatedError';
import getErrorMessage from '../utils/getErrorMessage';

/**
 * Attach error handler for async functions
 */
export default function useAsyncErrorHandler<R>(callBack: AsyncFn<R>) {
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
