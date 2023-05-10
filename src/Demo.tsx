import { Suspense, useState } from 'react';
import { ErrorBoundary, FallbackProps, useErrorBoundary } from 'react-error-boundary';

import Albums from './Album';
import Profile from './Profile';

function Loading() {
  return <h2>🌀 Loading...</h2>;
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

export default function Demo() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Content />
    </ErrorBoundary>
  );
}
