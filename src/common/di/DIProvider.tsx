import { PropsWithChildren } from 'react';

import { DependencyContainer } from 'tsyringe';
import DIContext from './context';

export interface DIProviderProps extends PropsWithChildren {
  container: DependencyContainer;
}

export default function ServiceProvider({ container, children }: DIProviderProps) {
  return <DIContext.Provider value={container}>{children}</DIContext.Provider>;
}
