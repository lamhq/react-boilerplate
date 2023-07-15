import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import ErrorFallback from 'src/common/atoms/ErrorFallback';
import LoadingFallback from 'src/common/atoms/LoadingFallback';

/**
 * HOC that wrap a component with Loading Fallback
 * @param Component React.ComponentType
 * @returns React.ReactNode
 */
export function withLoadingFallback<T extends JSX.IntrinsicAttributes>(
  Component: React.ComponentType<T>
) {
  return function WithLoading(props: T) {
    return (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LoadingFallback />}>
          <Component {...props} />
        </Suspense>
      </ErrorBoundary>
    );
  };
}

export default null;
