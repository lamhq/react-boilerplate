import { FallbackProps, useErrorBoundary } from 'react-error-boundary';
import { Link, Navigate } from 'react-router-dom';
import Button from '@mui/material/Button';

import { useConfig } from '@/configuration';
import getErrorMessage from '../../utils/getErrorMessage';
import UnauthenticatedError from '../../types/UnauthenticatedError';
import UnauthorizedError from '../../types/UnauthorizedError';
import NetworkError from '../../types/NetworkError';
import useLoginReminder from '../../hooks/useLoginReminder';
import ErrorUI from '../ErrorUI';

/**
 * Fallback Component for `react-error-boundary`
 * Usage: <ErrorBoundary FallbackComponent={ErrorFallback}>
 */
export default function ErrorFallback({ error }: FallbackProps) {
  const { resetBoundary } = useErrorBoundary();
  const { auth } = useConfig();
  let title = 'Oops!';
  let content = getErrorMessage(error);
  let action = (
    <Button variant="contained" onClick={resetBoundary}>
      Retry
    </Button>
  );

  useLoginReminder(error);

  if (error instanceof UnauthenticatedError) {
    return <Navigate to={auth.signinRoute} replace state={{ from: error.location }} />;
  }

  if (error instanceof UnauthorizedError) {
    title = 'Unauthorized';
    content = "You don't have permission to access this page";
    action = (
      <Button variant="contained" component={Link} to="/">
        Back Home
      </Button>
    );
  }

  if (error instanceof NetworkError) {
    title = 'Network Error';
  }

  return <ErrorUI title={title} content={content} action={action} />;
}
