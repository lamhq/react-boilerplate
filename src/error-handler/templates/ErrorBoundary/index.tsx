import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { useLocation } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import ErrorFallback from '../../organisms/ErrorFallback';

export default function ErrorBoundary({ children }: PropsWithChildren) {
  const location = useLocation();
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback} key={location.pathname}>
      {children}
    </ReactErrorBoundary>
  );
}
