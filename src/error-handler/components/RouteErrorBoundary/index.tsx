import { useRouteError } from 'react-router-dom';

export default function RouteErrorBoundary() {
  const error = useRouteError();
  throw error;
  return <p>Not rendered</p>;
}
