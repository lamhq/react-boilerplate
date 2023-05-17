import { useContext } from 'react';
import { ApiService } from './ApiService';
import { ApiContext } from './context';

export function useApi(): ApiService {
  const apiService = useContext(ApiContext);
  if (!apiService) {
    throw new Error('Missing ApiProvider in React tree');
  }

  return apiService;
}
