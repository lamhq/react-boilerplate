import { render, fireEvent } from 'src/common/utils/test-utils';
import UserMenu from '.';

describe('UserMenu', () => {
  it('should open and close user menu', () => {
    const { getByRole, queryByRole, getByText } = render(<UserMenu />);

    // Check if the user menu is not opened by default
    expect(queryByRole('menu')).not.toBeInTheDocument();

    // Check if the user menu is opened when clicking userIconButton
    fireEvent.click(getByRole('button'));
    expect(getByRole('menu')).toBeInTheDocument();

    // Check if the user menu is closed when clicking a menu item
    fireEvent.click(getByText(/sign out/i));
    expect(queryByRole('menu')).not.toBeInTheDocument();
  });
});
