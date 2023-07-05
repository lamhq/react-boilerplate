import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './common/templates/Layout';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    path: '/',
    children: [
      {
        index: true,
        async lazy() {
          const { Home } = await import('./common/pages/Home');
          return { Component: Home };
        },
      },
      {
        path: 'demo/data-fetching',
        async lazy() {
          const { DataFetching: DataFetchingDemo } = await import('./demo/pages/DataFetching');
          return { Component: DataFetchingDemo };
        },
      },
      {
        path: 'demo/lazy-load-image-1',
        async lazy() {
          const { LazyLoadImageDemo1 } = await import('./demo/pages/ImageLazyLoad');
          return { Component: LazyLoadImageDemo1 };
        },
      },
      {
        path: 'demo/lazy-load-image-2',
        async lazy() {
          const { LazyLoadImageDemo2 } = await import('./demo/pages/ImageLazyLoad');
          return { Component: LazyLoadImageDemo2 };
        },
      },
    ],
  },
]);
