import { Navigate, useRouteError } from 'react-router-dom';
import { useConfig } from 'src/configuration';
import { UnauthenticatedError } from 'src/error-handler';

export default function RouteErrorBoundary() {
  const error = useRouteError();
  const { signinRoute } = useConfig();

  if (error instanceof UnauthenticatedError) {
    return <Navigate to={signinRoute} state={{ from: error.location }} replace />;
  }

  // rethrow to let the parent error boundary handle it
  // when it's not a special case for this route
  return <p>Error</p>;
}
