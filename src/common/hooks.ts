import { useCallback, useState } from 'react';

/**
 * React hook to force a component rerender
 */
export function useRerender() {
  const [, setRerender] = useState(false);
  return useCallback(() => setRerender((isReload) => !isReload), []);
}
