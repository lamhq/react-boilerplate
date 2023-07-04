import { Outlet, Link, createBrowserRouter, RouterProvider, useNavigation } from 'react-router-dom';

function Layout() {
  const navigation = useNavigation();

  return (
    <div>
      <div>{navigation.state !== 'idle' && <p>Navigation in progress...</p>}</div>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-1">Page 1</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'page-1',
        async lazy() {
          const { Page1 } = await import('./Page1');
          return { Component: Page1 };
        },
      },
      {
        path: 'page-2',
        async lazy() {
          const { Page2 } = await import('./Page2');
          return { Component: Page2 };
        },
      },
      {
        index: true,
        element: (
          <div>
            <h2>Home</h2>
          </div>
        ),
      },
    ],
  },
]);

export function LazyLoadPageDemo() {
  return <RouterProvider router={router} />;
}
