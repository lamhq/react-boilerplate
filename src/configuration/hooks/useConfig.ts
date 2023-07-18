import { useContext } from 'react';
import ConfigContext from '../contexts/ConfigContext';

/**
 * React hook to force a component rerender
 */
export default function useConfig() {
  const config = useContext(ConfigContext);
  if (!config) {
    throw new Error('Missing ConfigProvider in React tree');
  }
  return config;
}
