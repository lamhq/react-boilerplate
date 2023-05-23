/* eslint-disable @typescript-eslint/no-throw-literal */
import { StatefulPromise } from './stateful-promise';

/**
 * A utility function that make your component to be compatible with React Suspense API
 * @param promise a stateful promise
 * @returns resolved value of the promise
 * @throws if the promise is not resolved, throw the promise.
 * @throws if the promise is rejected, throw the rejected value.
 */
export function suspense<T>(promise: StatefulPromise<T>) {
  if (promise.status === 'fulfilled') {
    return promise.value;
  }

  if (promise.status === 'rejected') {
    throw promise.error;
  } else {
    throw promise;
  }
}
