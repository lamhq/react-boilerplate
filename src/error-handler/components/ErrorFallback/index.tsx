import { FallbackProps, useErrorBoundary } from 'react-error-boundary';
import { Navigate, Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useConfig } from 'src/configuration';
import { NetworkError, UnauthenticatedError, UnauthorizedError } from 'src/error-handler';

/**
 * Fallback UI to show when error occured
 * It is used with `react-error-boundary`:
 * <ErrorBoundary FallbackComponent={ErrorFallback}>
 */
export default function ErrorFallback({ error }: FallbackProps) {
  const { resetBoundary } = useErrorBoundary();
  const { signinRoute } = useConfig();
  let title = 'Something went wrong';
  let content = 'Please try again later';
  let button = (
    <Button variant="contained" onClick={resetBoundary}>
      Retry
    </Button>
  );

  if (error instanceof UnauthenticatedError) {
    return <Navigate to={signinRoute} state={{ from: error.location }} replace />;
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
    content = 'Please check your internet connection';
  }

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
