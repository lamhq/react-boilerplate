import { useContext } from 'react';
import { ServiceContext } from './context';
import { IServices } from './service';

export function useService(): IServices {
  const services = useContext(ServiceContext);
  if (!services) {
    throw new Error('Missing ServiceProvider in React tree');
  }

  return services;
}
