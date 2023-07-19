import { FallbackProps, useErrorBoundary } from 'react-error-boundary';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

/**
 * UI to show when a component failed to failed data
 * Showing the error message and enable user to retry
 * It is used with `react-error-boundary`
 */
export default function ErrorFallback({ error }: FallbackProps) {
  const { resetBoundary } = useErrorBoundary();

  return (
    <>
      <Typography variant="h1" gutterBottom role="alert">
        Something went wrong
      </Typography>

      <Typography variant="body1" color="error" paragraph>
        {(error as Error).message}
      </Typography>

      <Button variant="contained" onClick={resetBoundary}>
        Retry
      </Button>
    </>
  );
}
