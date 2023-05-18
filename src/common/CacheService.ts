import { AsyncFn, StatefulPromise, isPromise } from './stateful-promise';

export class CacheService {
  private cache = new Map<string, unknown>();

  /**
   * Retrieve a promise from the cache by a key
   * if there's no value in cache, call the factory function to create a new promise
   * if the promise is resolved/rejected, remove it from cache
   * @param key cache key
   * @param factoryFn the function that return a promise
   * @returns Promise
   */
  public getPromise<T>(key: string, factoryFn: AsyncFn<T>): StatefulPromise<T> {
    if (!this.cache.has(key)) {
      const promise = factoryFn();
      promise.status = 'pending';
      promise.then(
        (result) => {
          promise.status = 'fulfilled';
          promise.value = result;
        },
        (reason) => {
          promise.status = 'rejected';
          promise.error = reason;
        },
      );
      this.cache.set(key, promise);
    }

    const val = this.cache.get(key);
    if (!isPromise<T>(val)) {
      throw new Error('Expect a promise for API calls');
    }

    // remove promise from cache if it's resolved or rejected
    if (val.status && ['fulfilled', 'rejected'].includes(val.status)) {
      setTimeout(() => {
        this.cache.delete(key);
      }, 10);
    }

    return val;
  }
}
