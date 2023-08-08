import { PropsWithChildren } from 'react';

import appConfig from '@/config';
import ConfigContext from '../../contexts/ConfigContext';

export interface ConfigProviderProps extends PropsWithChildren {
  config: typeof appConfig;
}

export default function ConfigProvider({ children, config }: ConfigProviderProps) {
  return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>;
}
