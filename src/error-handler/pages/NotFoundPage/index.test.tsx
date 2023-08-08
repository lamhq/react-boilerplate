import { render } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import NotFoundPage from '.';

describe('NotFoundPage', () => {
  const routes = [
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ];
  const router = createMemoryRouter(routes, {
    initialEntries: ['/', '/home'],
    initialIndex: 1, // start at "/home"
  });

  it('should renders page heading', () => {
    const { getByRole } = render(<RouterProvider router={router} />);
    const headingElement = getByRole('alert');
    expect(headingElement).toBeInTheDocument();
  });

  it('should renders page content', () => {
    const { getByText } = render(<RouterProvider router={router} />);
    const contentElement = getByText(/we couldn't find what you were looking for/i);
    expect(contentElement).toBeInTheDocument();
  });

  it('should renders back home button', () => {
    const { getByRole } = render(<RouterProvider router={router} />);
    const buttonElement = getByRole('link', { name: /back home/i });
    expect(buttonElement).toBeInTheDocument();
  });
});
