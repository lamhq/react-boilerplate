import { createBrowserRouter } from 'react-router-dom';

import MainLayout from './common/templates/MainLayout';
import NotFoundPage from './common/pages/NotfoundPage';
import GuestLayout from './common/templates/GuestLayout';
import getProtectedComponent from './auth/utils/getProtectedComponent';
import getImportedComponent from './common/utils/getImportedComponent';
import { RouteErrorBoundary } from './error-handler';

export default createBrowserRouter([
  {
    ErrorBoundary: RouteErrorBoundary,
    children: [
      {
        element: <GuestLayout />,
        children: [
          {
            path: '/auth/signin',
            lazy: () => import('./auth/pages/SigninPage').then(getImportedComponent),
          },
        ],
      },
      {
        element: <MainLayout />,
        children: [
          {
            path: '/',
            lazy: () => import('./common/pages/HomePage').then(getProtectedComponent),
          },
          {
            path: '/demo/data-fetching',
            lazy: () =>
              import('./demo/data-fetching/pages/DataFetching').then(getProtectedComponent),
          },
          {
            path: '/demo/data-mutation',
            lazy: () =>
              import('./demo/data-fetching/pages/DataMutation').then(getProtectedComponent),
          },
          {
            path: '/demo/lazy-load-image-1',
            lazy: () =>
              import('./demo/image-lazy-load/pages/ImageLazyLoad1').then(getProtectedComponent),
          },
          {
            path: '/demo/lazy-load-image-2',
            lazy: () =>
              import('./demo/image-lazy-load/pages/ImageLazyLoad2').then(getProtectedComponent),
          },
        ],
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
