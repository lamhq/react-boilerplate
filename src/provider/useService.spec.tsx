import { renderHook } from '@testing-library/react';
import { mock } from 'jest-mock-extended';

import { ApiService } from '../user/UserService';
import { useService } from './useService';
import { ServiceProvider } from '.';

describe('useService', () => {
  test('should return service instance', () => {
    const services = { apiService: mock<ApiService>() };
    const wrapper = ({ children }: { children: React.ReactElement }) => (
      <ServiceProvider services={services}>{children}</ServiceProvider>
    );

    const { result } = renderHook(() => useService(), { wrapper });
    expect(result.current).toBe(services);
  });

  test('should throw exception when ServiceProvider is not in React tree', () => {
    expect(() => renderHook(() => useService())).toThrow('Missing ServiceProvider in React tree');
  });
});
