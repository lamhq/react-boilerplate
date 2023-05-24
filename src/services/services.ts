/**
 * The place where all services are inited
 */
import { CacheService } from 'src/common';
import { UserService } from 'src/user';
import { IServices } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cacheStore = new Map<string, Promise<any>>();
const cacheService = new CacheService(cacheStore);
const userService = new UserService(cacheService);
export const services: IServices = { userService };
