import { renderHook, act } from '@testing-library/react';
import useRerender from './useRerender';

describe('useRerender', () => {
  it('should return rerender function', async () => {
    const { result } = renderHook(() => useRerender());

    // Verify initial state
    expect(result.current).toBeInstanceOf(Function);

    // Trigger a rerender
    act(() => {
      result.current();
    });

    // Assert state change
    expect(result.current).toBeInstanceOf(Function);
  });
});
