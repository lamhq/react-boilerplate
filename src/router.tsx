import { createBrowserRouter } from 'react-router-dom';

import MainLayout from './common/templates/MainLayout';
import ErrorPage from './common/pages/ErrorPage';
import BlankLayout from './common/templates/BlankLayout';
import getProtectedComponent from './common/utils/getProtectedComponent';
import getImportedComponent from './common/utils/getImportedComponent';
import { RouteErrorBoundary } from './error-handler';

export default createBrowserRouter([
  {
    path: '/auth/signin',
    element: <BlankLayout />,
    ErrorBoundary: RouteErrorBoundary,
    children: [
      {
        index: true,
        lazy: () => import('./auth/pages/SigninPage').then(getImportedComponent),
        ErrorBoundary: RouteErrorBoundary,
      },
    ],
  },
  {
    path: '/',
    element: <MainLayout />,
    ErrorBoundary: RouteErrorBoundary,
    children: [
      {
        index: true,
        lazy: () => import('./common/pages/HomePage').then(getProtectedComponent),
      },
      {
        path: 'demo/data-fetching',
        lazy: () => import('./demo/data-fetching/pages/DataFetching').then(getProtectedComponent),
      },
      {
        path: 'demo/lazy-load-image-1',
        lazy: () =>
          import('./demo/image-lazy-load/pages/ImageLazyLoad1').then(getProtectedComponent),
      },
      {
        path: 'demo/lazy-load-image-2',
        lazy: () =>
          import('./demo/image-lazy-load/pages/ImageLazyLoad2').then(getProtectedComponent),
      },
    ],
  },
  {
    path: '*',
    element: (
      <ErrorPage title="URL not found" message="We couldn't find what you were looking for." />
    ),
  },
]);
