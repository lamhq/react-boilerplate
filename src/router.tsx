import { createBrowserRouter } from 'react-router-dom';
import { ComponentType } from 'react';
import MainLayout from './common/templates/MainLayout';

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

export default createBrowserRouter([
  {
    element: <MainLayout />,
    path: '/',
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
    ],
  },
]);
