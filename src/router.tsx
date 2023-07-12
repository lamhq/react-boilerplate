import { ComponentType } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import MainLayout from './common/templates/MainLayout';
import ErrorPage from './common/pages/ErrorPage';

/**
 * Convert default export of ES module to React Router lazy import structure
 *
 * @param module ES module with default export
 * @returns object { Component: React.ComponentType }
 */
function getReactRouterLazyImport(module: { default: ComponentType }) {
  return {
    Component: module.default,
  };
}

const ErrorUI = <ErrorPage title="Something went wrong" message="Please try again later" />;

export default createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    // display error page in case layout has error
    errorElement: ErrorUI,
    children: [
      {
        // display error page in case sub pages can not be loaded
        errorElement: ErrorUI,
        children: [
          {
            index: true,
            lazy: () => import('./common/pages/Home').then(getReactRouterLazyImport),
          },
          {
            path: 'demo/data-fetching',
            lazy: () => import('./demo/pages/DataFetching').then(getReactRouterLazyImport),
          },
          {
            path: 'demo/lazy-load-image-1',
            lazy: () => import('./demo/pages/ImageLazyLoad1').then(getReactRouterLazyImport),
          },
          {
            path: 'demo/lazy-load-image-2',
            lazy: () => import('./demo/pages/ImageLazyLoad2').then(getReactRouterLazyImport),
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
]);
