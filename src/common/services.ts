import { ApiService } from './ApiService';
import { CacheService } from './CacheService';

export const cacheService = new CacheService();
export const apiService = new ApiService(cacheService);
