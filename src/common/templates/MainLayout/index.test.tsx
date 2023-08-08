import { RouterProvider, createMemoryRouter, Outlet } from 'react-router-dom';
import { render, fireEvent } from 'src/common/utils/test-utils';
import MainLayout from '.';

jest.mock('src/error-handler', () => ({
  ErrorFallback: () => <h1>Error occured</h1>,
}));

describe('MainLayout', () => {
  it('should render component match current route in <Outlet />', () => {
    const content = 'Page content';
    const router = createMemoryRouter(
      [
        {
          element: (
            <MainLayout>
              <Outlet />
            </MainLayout>
          ),
          children: [
            {
              path: '/home',
              element: <h1>{content}</h1>,
            },
          ],
        },
      ],
      {
        initialEntries: ['/', '/home'],
        initialIndex: 1, // start at "/home"
      }
    );
    const { getByRole } = render(<RouterProvider router={router} />);
    expect(getByRole('heading', { name: content })).toBeInTheDocument();
    // check that open drawer button is clickable
    fireEvent.click(getByRole('button', { name: /open drawer/i }));
  });

  it('should render fallback ui when error occured in render', () => {
    const FakeComponent: React.ComponentType = () => {
      throw new Error('Render error');
    };
    const router = createMemoryRouter(
      [
        {
          element: (
            <MainLayout>
              <Outlet />
            </MainLayout>
          ),
          children: [
            {
              path: '/home',
              Component: FakeComponent,
            },
          ],
        },
      ],
      {
        initialEntries: ['/', '/home'],
        initialIndex: 1, // start at "/home"
      }
    );
    const { getByRole } = render(<RouterProvider router={router} />);
    expect(getByRole('heading', { name: 'Error occured' })).toBeInTheDocument();
  });
});