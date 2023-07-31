import { singleton } from 'tsyringe';

/**
 * Type of a function that return a Promise
 */
export type FactoryFn<T> = () => Promise<T>;

@singleton()
export default class CacheService {
  public constructor(readonly store: Map<string, Promise<unknown>>) {}

  /**
   * Retrieve a promise from the cache by a key
   * if there's no value in cache, call the factory function to create a new promise
   * if the promise is resolved/rejected, remove it from cache
   * @param key cache key
   * @param promiseFactory the function that return a promise
   * @returns Promise
   */
  public getPromise<T>(key: string, promiseFactory: FactoryFn<T>): Promise<T> {
    let promise: Promise<T>;
    const cacheValue = this.store.get(key);
    if (!cacheValue) {
      // call the callback function to get a new promise
      promise = promiseFactory();

      // remove the promise from cache if it is resolved or rejected
      promise.finally(() => {
        setTimeout(() => {
          this.store.delete(key);
        }, 10);
      });
      this.store.set(key, promise);
    } else {
      promise = cacheValue as Promise<T>;
    }

    return promise;
  }
}
