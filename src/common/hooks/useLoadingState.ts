import { useCallback, useEffect, useRef, useState } from 'react';
import AsyncFn from '../types/AsyncFn';

/**
 * React hook that return loading flag for async action
 */
export default function useLoadingState<R>(asyncFn: AsyncFn<R>): [boolean, AsyncFn<R>] {
  const [isLoading, setLoading] = useState(false);
  const unmountedRef = useRef(false);
  const act: typeof asyncFn = useCallback(
    async (...args: Parameters<typeof asyncFn>) => {
      try {
        setLoading(true);
        return await asyncFn(...args);
      } finally {
        if (!unmountedRef.current) {
          setLoading(false);
        }
      }
    },
    [setLoading, asyncFn]
  );

  useEffect(() => {
    unmountedRef.current = false;
    return () => {
      unmountedRef.current = true;
    };
  });

  return [isLoading, act];
}
