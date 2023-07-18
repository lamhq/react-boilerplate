import { useCallback, useState } from 'react';

/**
 * React hook to force a component rerender
 */
export default function useRerender() {
  const [, setRerender] = useState(false);
  return useCallback(() => setRerender((isReload) => !isReload), []);
}
