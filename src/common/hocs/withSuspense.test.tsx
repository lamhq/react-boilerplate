import { render } from '@testing-library/react';
import { FunctionComponent } from 'react';
import withSuspense from './withSuspense';

// A dummy component for testing
const MockComponent = jest.fn();

describe('withSuspense', () => {
  it('should render loading fallback when component is fetching data', () => {
    MockComponent.mockImplementationOnce(() => {
      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw new Promise(() => {});
    });
    const WithSuspenseComponent = withSuspense(MockComponent);
    const { getByRole } = render(<WithSuspenseComponent />);

    // Assert that the loading fallback component is rendered
    expect(getByRole('progressbar')).toBeInTheDocument();
  });

  it("should render wrapped component when it doesn't load data", () => {
    MockComponent.mockReturnValueOnce(<p role="note">Mock component</p>);
    const WithSuspenseComponent = withSuspense(MockComponent);
    const { getByRole } = render(<WithSuspenseComponent />);
    expect(getByRole('note')).toBeInTheDocument();
  });

  it('should have correct name', () => {
    MockComponent.mockReturnValueOnce(<p role="note">Mock component</p>);
    let WithSuspenseComponent = withSuspense(MockComponent);
    expect(WithSuspenseComponent.displayName).toBe(`withSuspense(Component)`);

    (MockComponent as FunctionComponent).displayName = 'MockComponent';
    WithSuspenseComponent = withSuspense(MockComponent);
    expect(WithSuspenseComponent.displayName).toBe('withSuspense(MockComponent)');
  });
});
