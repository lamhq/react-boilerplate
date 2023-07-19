import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import ErrorFallback from 'src/error-handler/components/ErrorFallback';
import LoadingFallback from 'src/common/atoms/LoadingFallback';

/**
 * HOC that wrap a component with React Suspense and ErrorBoundary
 * @param Component React.ComponentType
 * @returns React.ReactNode
 */
export default function withErrorBoundary<T extends JSX.IntrinsicAttributes>(
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
