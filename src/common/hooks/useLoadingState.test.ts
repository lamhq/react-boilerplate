import { renderHook, act, waitFor } from '@testing-library/react';
import useLoadingState from './useLoadingState';

describe('useLoadingState', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('loading state should have correct value', async () => {
    const asyncFn = jest.fn().mockImplementation(
      () =>
        new Promise((rs) => {
          setTimeout(() => {
            rs('result');
          }, 10000);
        })
    );
    // Render the hook with the mocked async function
    const { result } = renderHook(() => useLoadingState(asyncFn));

    // Execute the async function
    act(() => {
      result.current[1]().finally(() => {});
    });

    // loading state should be true during async execution
    expect(result.current[0]).toBe(true);

    // fast-forward timer in async function
    jest.runAllTimers();

    // loading state should be false after async execution
    await waitFor(() => {
      expect(result.current[0]).toBe(false);
    });
  });
});
