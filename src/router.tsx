import { Outlet, createBrowserRouter } from 'react-router-dom';

import MainLayout from './common/templates/MainLayout';
import NotFoundPage from './common/pages/NotfoundPage';
import GuestLayout from './common/templates/GuestLayout';
import getProtectedModule from './auth/utils/getProtectedModule';
import getLazyModule from './common/utils/getLazyModule';
import { RouteErrorBoundary } from './error-handler';

export default createBrowserRouter([
  {
    ErrorBoundary: RouteErrorBoundary,
    children: [
      {
        element: (
          <GuestLayout>
            <Outlet />
          </GuestLayout>
        ),
        children: [
          {
            path: '/auth/signin',
            lazy: () => import('./auth/pages/SigninPage').then(getLazyModule),
          },
        ],
      },
      {
        element: (
          <MainLayout>
            <Outlet />
          </MainLayout>
        ),
        children: [
          {
            path: '/',
            lazy: () => import('./common/pages/HomePage').then(getProtectedModule),
          },
          {
            path: '/demo/data-fetching',
            lazy: () => import('./demo/data-fetching/pages/DataFetching').then(getProtectedModule),
          },
          {
            path: '/demo/data-mutation',
            lazy: () => import('./demo/data-fetching/pages/DataMutation').then(getProtectedModule),
          },
          {
            path: '/demo/lazy-load-image-1',
            lazy: () =>
              import('./demo/image-lazy-load/pages/ImageLazyLoad1').then(getProtectedModule),
          },
          {
            path: '/demo/lazy-load-image-2',
            lazy: () =>
              import('./demo/image-lazy-load/pages/ImageLazyLoad2').then(getProtectedModule),
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
