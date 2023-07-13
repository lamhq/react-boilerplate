import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import React, { Suspense, useCallback, useState } from 'react';
import { ErrorBoundary, FallbackProps, useErrorBoundary } from 'react-error-boundary';

import asyncData from 'src/common/utils/asyncData';
import { useService } from 'src/common/di';
import { ApiService } from './ApiService';

/**
 * React hook to force a component rerender
 */
function useRerender() {
  const [, setRerender] = useState(false);
  return useCallback(() => setRerender((isReload) => !isReload), []);
}

/**
 * UI to show when a component is fetching data
 */
function LoadingFallback() {
  return (
    <Fade
      in
      unmountOnExit
      style={{
        transitionDelay: '500ms',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 3 }}>
        <CircularProgress />
      </Box>
    </Fade>
  );
}

/**
 * UI to show when a component failed to failed data
 */
function ErrorFallback({ error }: FallbackProps) {
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

/**
 * HOC that wrap a component with Loading Fallback
 * @param Component React.ComponentType
 * @returns React.ReactNode
 */
function withLoadingFallback<T extends JSX.IntrinsicAttributes>(Component: React.ComponentType<T>) {
  return function WithLoading(props: T) {
    return (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LoadingFallback />}>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...props} />
        </Suspense>
      </ErrorBoundary>
    );
  };
}

function UserProfile() {
  const apiService = useService(ApiService);
  const data = asyncData(apiService.getData());
  const reload = useRerender();
  return (
    <>
      <Typography variant="body1" color="info" paragraph>
        {data}
      </Typography>
      <Button variant="contained" onClick={reload}>
        Reload
      </Button>
    </>
  );
}

export default withLoadingFallback(UserProfile);
