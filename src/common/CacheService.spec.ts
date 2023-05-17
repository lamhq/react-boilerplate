import { CacheService } from './CacheService';
import { StatefulPromise } from './stateful-promise';

describe('CacheService', () => {
  let cacheService: CacheService;
  const key = 'key';
  const fn = jest.fn();

  beforeEach(async () => {
    fn.mockReset();
    cacheService = new CacheService();
  });

  describe('getPromise', () => {
    it('should return a StatefulPromise', () => {
      fn.mockReturnValueOnce(Promise.resolve());
      const p: StatefulPromise<void> = cacheService.getPromise(key, fn);

      expect(p).toEqual(expect.any(Promise));
      expect(p.status).toBe('pending');
    });

    it('should call factory function if not cached', () => {
      fn.mockReturnValueOnce(Promise.resolve());
      cacheService.getPromise(key, fn);

      expect(fn).toHaveBeenCalled();
    });

    it('should return the cached value in sub sequent calls', () => {
      fn.mockReturnValueOnce(Promise.resolve());
      const p = cacheService.getPromise(key, fn);
      expect(fn).toHaveBeenCalled();

      fn.mockReset();
      expect(cacheService.getPromise(key, fn)).toBe(p);
      expect(fn).not.toHaveBeenCalled();
    });
  });
});
