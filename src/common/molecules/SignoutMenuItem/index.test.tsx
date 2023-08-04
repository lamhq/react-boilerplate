import { render, fireEvent } from '@testing-library/react';
import SignoutMenuItem from '.';

// Mock the useAuthActions hook
const logoutMock = jest.fn();

jest.mock('src/auth', () => ({
  useAuthActions: () => ({
    logout: logoutMock,
  }),
}));

describe('SignoutMenuItem', () => {
  it('should call logout function on click', () => {
    const { getByText } = render(<SignoutMenuItem />);
    const menuItem = getByText('Sign out');

    fireEvent.click(menuItem);

    // Check if the logout function is called
    expect(logoutMock).toHaveBeenCalled();
  });
});
