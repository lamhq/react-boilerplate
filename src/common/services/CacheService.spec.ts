import { mock } from 'jest-mock-extended';
import CacheService from './CacheService';
import { StatefulPromise } from '../utils';

jest.useFakeTimers();
describe('CacheService', () => {
  let cacheService: CacheService;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cacheStore = mock<Map<string, Promise<any>>>();
  const key = 'key';
  const asyncFn = jest.fn();

  beforeEach(async () => {
    asyncFn.mockReset();
    cacheStore.get.mockReset();
    cacheStore.delete.mockReset();
    cacheService = new CacheService(cacheStore);
  });

  describe('get', () => {
    it('should call factory function if not cached', () => {
      const promise = Promise.resolve(1);
      asyncFn.mockReturnValueOnce(promise);
      const p: StatefulPromise<number> = cacheService.getPromise(key, asyncFn);

      expect(p).toBe(promise);
      expect(asyncFn).toBeCalled();
    });

    it('should remove cached promise if its status is fulfilled or rejected', async () => {
      const promise = Promise.resolve(1);
      asyncFn.mockReturnValueOnce(promise);
      await cacheService.getPromise(key, asyncFn);

      // At this point in time, cache should not be removed
      expect(cacheStore.delete).not.toBeCalled();

      // Fast-forward until all timers have been executed
      jest.runAllTimers();

      // Now our callback cache should be removed
      expect(cacheStore.delete).toBeCalledWith(key);
    });

    it('should return the cached value in sub sequent calls', () => {
      const promise = Promise.resolve(1);
      cacheStore.get.mockReturnValueOnce(promise);
      const p = cacheService.getPromise(key, asyncFn);

      expect(p).toBe(promise);
      expect(asyncFn).not.toBeCalled();
    });
  });
});
