import { useEffect, useRef } from 'react';
import { useSnackbar } from 'notistack';

import getErrorMessage from '../utils/getErrorMessage';
import UnauthenticatedError from '../types/UnauthenticatedError';

/**
 * Show login reminder message after unmounted
 */
export default function useLoginReminder(error: unknown) {
  const content = getErrorMessage(error);
  const { enqueueSnackbar } = useSnackbar();
  // prevent message display twice in `useEffect`
  const timerRef = useRef<undefined | NodeJS.Timeout>();
  useEffect(() => {
    clearTimeout(timerRef.current);
    // show message after redirect
    return () => {
      timerRef.current = setTimeout(() => {
        if (error instanceof UnauthenticatedError) {
          enqueueSnackbar(content, { variant: 'error', autoHideDuration: 3000 });
        }
      }, 100);
    };
  });
}
