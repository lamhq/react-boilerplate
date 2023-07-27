import { useEffect } from 'react';
import { FallbackProps, useErrorBoundary } from 'react-error-boundary';
import { Link, useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useSnackbar } from 'notistack';

import { useConfig } from 'src/configuration';
import getErrorMessage from '../../utils/getErrorMessage';
import UnauthenticatedError from '../../types/UnauthenticatedError';
import UnauthorizedError from '../../types/UnauthorizedError';
import NetworkError from '../../types/NetworkError';

/**
 * Fallback UI to show when error occured
 * It is used with `react-error-boundary`:
 * <ErrorBoundary FallbackComponent={ErrorFallback}>
 */
export default function ErrorFallback({ error }: FallbackProps) {
  const navigate = useNavigate();
  const { resetBoundary } = useErrorBoundary();
  const { enqueueSnackbar } = useSnackbar();
  const { auth } = useConfig();

  let title = 'Oops!';
  let content = getErrorMessage(error);
  let button = (
    <Button variant="contained" onClick={resetBoundary}>
      Retry
    </Button>
  );

  if (error instanceof UnauthenticatedError) {
    title = 'Unauthenticated';
    button = (
      <Button variant="contained" component={Link} to={auth.signinRoute}>
        Sign in
      </Button>
    );
  }

  if (error instanceof UnauthorizedError) {
    title = 'Unauthorized';
    content = "You don't have permission to access this page";
    button = (
      <Button variant="contained" component={Link} to="/">
        Back Home
      </Button>
    );
  }

  if (error instanceof NetworkError) {
    title = 'Network Error';
  }

  // show login reminder message and redirect user to sign-in page
  useEffect(() => {
    const notiTimeoutId = setTimeout(() => {
      if (error instanceof UnauthenticatedError) {
        enqueueSnackbar(content, { variant: 'error' });
        navigate(auth.signinRoute, { state: { from: error.location }, replace: true });
      }
    }, 100);

    return () => clearTimeout(notiTimeoutId);
  }, [error, auth.signinRoute, content, enqueueSnackbar, navigate]);

  return (
    <>
      <Typography variant="h1" role="alert" gutterBottom>
        {title}
      </Typography>

      <Typography variant="body1" color="error" paragraph>
        {content}
      </Typography>

      {button}
    </>
  );
}
