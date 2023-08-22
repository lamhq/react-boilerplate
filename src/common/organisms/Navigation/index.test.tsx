import { render } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import Navigation from '.';

describe('Navigation', () => {
  const router = createMemoryRouter(
    [
      {
        path: '*',
        element: <Navigation />,
      },
    ],
    {
      initialEntries: ['/', '/home'],
      initialIndex: 1, // start at "/home"
    }
  );

  it('should renders home navigation item correctly', () => {
    const { getByText } = render(<RouterProvider router={router} />);
    const homeNavItem = getByText('Home');
    expect(homeNavItem).toBeInTheDocument();
  });

  it('renders lazy loading navigation items correctly', () => {
    const { getByText } = render(<RouterProvider router={router} />);
    const intersectionApiNavItem = getByText('Intersection API');
    const lazyAttributeNavItem = getByText('HTML Lazy Attribute');
    expect(intersectionApiNavItem).toBeInTheDocument();
    expect(lazyAttributeNavItem).toBeInTheDocument();
  });
});
