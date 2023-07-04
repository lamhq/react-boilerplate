import { Link } from 'react-router-dom';

export function OrderHistory() {
  return (
    <>
      <p>order history</p>
      <ul>
        <li>
          <Link to="1">Order #1</Link>
        </li>
        <li>
          <Link to="2">Order #2</Link>
        </li>
        <li>
          <Link to="3">Order #3</Link>
        </li>
      </ul>
    </>
  );
}
