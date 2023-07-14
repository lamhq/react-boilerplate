import { InjectionToken } from 'tsyringe';
import { useContext } from 'react';

import DIContext from './context';

export default function useService<T>(token: InjectionToken<T>) {
  const container = useContext(DIContext);
  if (!container) {
    throw new Error('Missing DIProvider in React tree');
  }

  return container.resolve(token);
}
