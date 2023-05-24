/**
 * The place where all services are inited
 */
import { CacheService } from '../common';
import { ApiService } from '../user';
import { IServices } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cacheStore = new Map<string, Promise<any>>();
const cacheService = new CacheService(cacheStore);
const apiService = new ApiService(cacheService);
export const services: IServices = { apiService };
