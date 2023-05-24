import { ServiceContext } from './context';
import { IServices } from './types';

export interface ServiceProviderProps {
  services: IServices;
  children: React.ReactNode;
}

export function ServiceProvider({ services, children }: ServiceProviderProps) {
  return <ServiceContext.Provider value={services}>{children}</ServiceContext.Provider>;
}
