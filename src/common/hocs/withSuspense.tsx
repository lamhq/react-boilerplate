import React, { Suspense } from 'react';

import LoadingFallback from 'src/common/atoms/LoadingFallback';

/**
 * HOC that wrap a component with React Suspense
 * @param Component React.ComponentType
 * @returns React.ReactNode
 */
export default function withSuspense<T extends JSX.IntrinsicAttributes>(
  Component: React.ComponentType<T>
) {
  function WithSuspense(props: T) {
    return (
      <Suspense fallback={<LoadingFallback />}>
        <Component {...props} />
      </Suspense>
    );
  }
  // set friendly component name in devtools
  WithSuspense.displayName = `withSuspense(${
    Component.displayName || Component.name || 'Component'
  })`;
  return WithSuspense;
}
