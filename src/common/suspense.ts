/**
 * Javascript Promise that contains additional properties to know is status
 */
export interface StatefulPromise<T> extends Promise<T> {
  status?: 'fulfilled' | 'rejected' | 'pending';

  error?: Error;

  value?: T;
}

/**
 * A utility function that make your component to be compatible with React Suspense API
 * @param promise a stateful promise
 * @returns resolved value of the promise
 * @throws if the promise is not resolved, throw the promise.
 * @throws if the promise is rejected, throw the rejected value.
 */
export function suspense<T>(promise: StatefulPromise<T>) {
  // update promise's attributes when resolved/rejected
  if (!promise.status) {
    /* eslint-disable no-param-reassign */
    promise.status = 'pending';
    promise.then(
      (result) => {
        promise.status = 'fulfilled';
        promise.value = result;
      },
      (reason) => {
        promise.status = 'rejected';
        promise.error = reason;
      }
    );
    /* eslint-enable */
  }

  // throw the promise if it's pending
  if (promise.status === 'pending') {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw promise;
  }

  // throw the rejected value if it's rejected
  if (promise.status === 'rejected') {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw promise.error;
  }

  // return promise's resolved value if it's fulfilled' or ...
  return promise.value as T;
}
