import { render } from '@testing-library/react';
import LoadingFallback from '.';

describe('LoadingFallback', () => {
  it('should render a circular progress bar', () => {
    const { getByRole } = render(<LoadingFallback />);

    const circularProgress = getByRole('progressbar');
    expect(circularProgress).toBeInTheDocument();
  });
});
