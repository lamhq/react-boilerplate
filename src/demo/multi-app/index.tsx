import {
  Outlet,
  Link,
  createBrowserRouter,
  RouterProvider,
  useNavigation,
  Navigate,
} from 'react-router-dom';

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
            <Link to="/customer/account">My account</Link>
          </li>
          <li>
            <Link to="/sale/orders">Order History</Link>
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
        index: true,
        element: <Navigate to="/customer" replace />,
      },
      {
        path: 'customer/*',
        async lazy() {
          const { CustomerModule } = await import('./customer/CustomerModule');
          return { Component: CustomerModule };
        },
      },
      {
        path: 'sale/*',
        async lazy() {
          const { SaleModule } = await import('./sale/SaleModule');
          return { Component: SaleModule };
        },
      },
      {
        path: '*',
        element: <p>Not found</p>,
      },
    ],
  },
]);

export function MultiAppDemo() {
  return <RouterProvider router={router} />;
}
