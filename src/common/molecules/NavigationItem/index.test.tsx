import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import NavigationItem from '.';

describe('NavigationItem', () => {
  const to = '/home';
  const icon = <svg />;
  const label = 'Home';
  const router = createMemoryRouter(
    [
      {
        path: '*',
        element: <NavigationItem to={to} icon={icon} label={label} />,
      },
    ],
    {
      initialEntries: ['/', '/home'],
      initialIndex: 1, // start at "/home"
    }
  );

  it('should render navigation item', () => {
    const { getByRole } = render(<RouterProvider router={router} />);
    expect(getByRole('link', { name: label })).toBeInTheDocument();
  });

  it('should have class `active` when current route match url', () => {
    const { getByRole } = render(<RouterProvider router={router} />);
    expect(getByRole('link', { name: label })).toHaveClass('active');
  });
});
