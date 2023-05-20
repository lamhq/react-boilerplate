import { renderHook } from '@testing-library/react';

import { useApi } from './useApi';
import { ApiService } from './ApiService';

describe('useApi', () => {
  test('should return ApiService', () => {
    const { result } = renderHook(() => useApi());
    expect(result).toBe(expect.any(ApiService));
  });
});
