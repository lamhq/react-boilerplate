import { render } from '@testing-library/react';
import { useNavigation } from 'react-router-dom';
import NavigationProgress from '.';

jest.mock('react-router-dom', () => ({
  // mock the useNavigation hook
  useNavigation: jest.fn(),
}));

describe('NavigationProgress', () => {
  const useNavMock = useNavigation as jest.Mock;

  it('should renders null no navigation happen', () => {
    useNavMock.mockReturnValueOnce({ state: 'idle' });
    const { container } = render(<NavigationProgress />);
    expect(container.firstChild).toBeNull();
  });

  it('should renders loading indicators when navigating', () => {
    useNavMock.mockReturnValueOnce({ state: 'loading' });
    const { getByRole } = render(<NavigationProgress />);
    expect(getByRole('progressbar')).toBeTruthy();
  });
});
