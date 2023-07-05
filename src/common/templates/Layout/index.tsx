import { Link, Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/demo/data-fetching">Data Fetching</Link>
          </li>
          <li>
            <Link to="/demo/lazy-load-image-1">Image Lazy Loading (1)</Link>
          </li>
          <li>
            <Link to="/demo/lazy-load-image-2">Image Lazy Loading (2)</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}
