import { useRouteError } from 'react-router-dom';

interface Error {
  statusText?: string;
  message?: string;
}

function isError(err: unknown): err is Error {
  return Boolean((err as Error).statusText) || Boolean((err as Error).message);
}

export function ErrorPage() {
  const error = useRouteError();
  if (!isError(error)) {
    throw new Error('Unexpected error');
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
