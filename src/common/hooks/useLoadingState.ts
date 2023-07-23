/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Type of async function
 */
export type AsyncFn<P extends any[], R> = (...args: P) => Promise<R>;

/**
 * React hook that return loading flag for async action
 */
export default function useLoadingState<P extends any[], R>(
  asyncFn: AsyncFn<P, R>
): [boolean, AsyncFn<P, R>] {
  const [isLoading, setLoading] = useState(false);
  const unmountedRef = useRef(false);
  const act: typeof asyncFn = useCallback(
    async (...args: P) => {
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
