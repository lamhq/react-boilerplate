import { Suspense, useState } from 'react';
import { ErrorBoundary, FallbackProps, useErrorBoundary } from 'react-error-boundary';

import { lazyData } from 'src/common';
import { useService } from 'src/services';

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

function Profile() {
  const { userService } = useService();
  const data = lazyData(userService.getProfile());
  return <p>{data}</p>;
}

function Albums() {
  const { userService } = useService();
  const data = lazyData(userService.getAlbum('abcd'));
  return <p>{data}</p>;
}

function Content() {
  const [page, setPage] = useState('profile');
  const nextPage = page === 'profile' ? 'album' : 'profile';

  return (
    <>
      <p>
        <button type="button" onClick={() => setPage(nextPage)}>
          Show {nextPage}
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
      <pre style={{ color: 'red' }}>{(error as Error).message}</pre>
      <button onClick={resetBoundary} type="button">
        Try again
      </button>
    </div>
  );
}

export default function DataFetching() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Content />
    </ErrorBoundary>
  );
}
