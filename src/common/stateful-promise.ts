/**
 * Javascript Promise that contains additional properties to know is status
 */
export interface StatefulPromise<T> extends Promise<T> {
  status?: 'fulfilled' | 'rejected' | 'pending';

  error?: Error;

  value?: T;
}

/**
 * Type of a function that return a Promise
 */
export type AsyncFn<T> = () => StatefulPromise<T>;

/**
 * Function that check if an object is a StatefulPromise
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isPromise<T>(obj: any): obj is StatefulPromise<T> {
  return !!obj && typeof obj.then === 'function';
}
