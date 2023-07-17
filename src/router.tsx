import { ComponentType } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import MainLayout from './common/templates/MainLayout';
import ErrorPage from './common/pages/ErrorPage';
import BlankLayout from './common/templates/BlankLayout';
import { withAuth } from './auth';

/**
 * Convert default export of ES module to React Router lazy import structure
 *
 * @param module ES module with default export
 * @returns object { Component: React.ComponentType }
 */
function getImportedComponent(module: { default: ComponentType }) {
  return {
    Component: module.default,
  };
}

/**
 * Require user be authenticated before rendering
 */
function getProtectedComponent(module: { default: ComponentType }) {
  return {
    Component: withAuth(module.default),
  };
}

const ErrorUI = <ErrorPage title="Something went wrong" message="Please try again later" />;

export default createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: ErrorUI, // display error page in case layout has error
    children: [
      {
        // display error page in case sub pages can not be loaded
        errorElement: ErrorUI,
        children: [
          {
            index: true,
            lazy: () => import('./common/pages/HomePage').then(getProtectedComponent),
          },
          {
            path: 'demo/data-fetching',
            lazy: () =>
              import('./demo/data-fetching/pages/DataFetching').then(getProtectedComponent),
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
          {
            path: '*',
            element: (
              <ErrorPage
                title="URL not found"
                message="We couldn't find what you were looking for."
              />
            ),
          },
        ],
      },
    ],
  },
  {
    path: '/auth/signin',
    element: <BlankLayout />,
    errorElement: ErrorUI, // display error page in case layout has error
    children: [
      {
        index: true,
        lazy: () => import('./auth/pages/SigninPage').then(getImportedComponent),
        errorElement: ErrorUI,
      },
    ],
  },
]);
