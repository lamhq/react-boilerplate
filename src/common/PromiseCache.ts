/**
 * Type of a function that return a Promise
 */
export type AsyncFn<T> = () => Promise<T>;

export class PromiseCache {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public constructor(readonly store: Map<string, Promise<any>>) {}

  /**
   * Retrieve a promise from the cache by a key
   * if there's no value in cache, call the factory function to create a new promise
   * if the promise is resolved/rejected, remove it from cache
   * @param key cache key
   * @param factoryFn the function that return a promise
   * @returns Promise
   */
  public get<T>(key: string, factoryFn: AsyncFn<T>): Promise<T> {
    let promise: Promise<T>;
    const cacheValue = this.store.get(key);
    if (!cacheValue) {
      // call the callback function to get a new promise
      promise = factoryFn();

      // remove the promise from cache if it is resolved or rejected
      promise.then(() => {
        setTimeout(() => {
          this.store.delete(key);
        }, 10);
      });
      this.store.set(key, promise);
    } else {
      promise = cacheValue;
    }

    return promise;
  }
}
