import { ApiService } from '../api/ApiService';
import { CacheService } from './CacheService';

export const cacheService = new CacheService();
export const apiService = new ApiService(cacheService);
