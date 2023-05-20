import { Suspense, useState } from 'react';
import { ErrorBoundary, FallbackProps, useErrorBoundary } from 'react-error-boundary';

import { suspense } from '../common';
import { useApi } from '../api';

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

function Profile() {
  const apiService = useApi();
  const data = suspense(apiService.getProfile());
  return (<p>{data}</p>);
}

function Albums() {
  const apiService = useApi();
  const data = suspense(apiService.getAlbum('abcd'));
  return (<p>{data}</p>);
}

function Content() {
  const [page, setPage] = useState('profile');
  const nextPage = page === 'profile' ? 'album' : 'profile';

  return (
    <>
      <p>
        <button type="button" onClick={() => setPage(nextPage)}>
          Show
          {' '}
          {nextPage}
        </button>
      </p>
      <Suspense fallback={<Loading />}>
        {page === 'profile' && <Profile />}
        {page === 'album' && <Albums />}
      </Suspense>
    </>
  );
}

function ErrorFallback({ error }: FallbackProps) {
  const { resetBoundary } = useErrorBoundary();

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
      <button onClick={resetBoundary} type="button">Try again</button>
    </div>
  );
}

export function DataFetchingDemo() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Content />
    </ErrorBoundary>
  );
}
