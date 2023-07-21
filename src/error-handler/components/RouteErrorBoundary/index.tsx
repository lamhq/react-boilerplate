import { useRouteError } from 'react-router-dom';

export default function RouteErrorBoundary() {
  const error = useRouteError();
  // throw the error so it will be handled by parent error boundary
  throw error;

  return <p>Not rendered</p>;
}
