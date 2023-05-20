import { ApiService } from './ApiService';
import { ApiContext } from './context';

export interface ApiProviderProps {
  service: ApiService;
  children: React.ReactNode;
}

export function ApiProvider({ service, children }: ApiProviderProps) {
  return <ApiContext.Provider value={service}>{children}</ApiContext.Provider>;
}
