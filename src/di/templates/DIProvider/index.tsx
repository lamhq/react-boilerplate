import { PropsWithChildren } from 'react';

import { DependencyContainer } from 'tsyringe';
import DIContext from '../../contexts/DIContext';

export interface DIProviderProps extends PropsWithChildren {
  container: DependencyContainer;
}

export default function DIProvider({ container, children }: DIProviderProps) {
  return <DIContext.Provider value={container}>{children}</DIContext.Provider>;
}
